// The measurement and reasoning layer, ported intact from v4 plus the new
// v5 intelligence: anomaly detection and month-end forecast bands.
import { KPI, DAY_MS, FALLBACK_REPLY_RATE, FALLBACK_BOOKING_RATE } from "./config.js";
import { safeDiv, dayKey, fmtInt, fmtPct } from "./format.js";

export function computeMetrics(daily, replies) {
  const initials = daily.reduce((s, r) => s + r.initials, 0);
  const followUps = daily.reduce((s, r) => s + r.followUps, 0);
  const comments = daily.reduce((s, r) => s + r.comments, 0);
  const replyCount = replies.length;
  const booked = replies.filter((r) => r.booked).length;
  const shown = replies.filter((r) => r.showed).length;
  const closed = replies.filter((r) => r.closed).length;
  const dealValue = replies.reduce((s, r) => s + r.dealValue, 0);
  const cash = replies.reduce((s, r) => s + r.cash, 0);
  return {
    initials, followUps, comments,
    touches: initials + followUps + comments,
    commentCoverage: safeDiv(comments, initials),
    replies: replyCount, booked, shown, closed,
    replyRate: safeDiv(replyCount, initials),
    bookingRate: safeDiv(booked, replyCount),
    showRate: safeDiv(shown, booked),
    closeRate: safeDiv(closed, shown),
    dealValue, cash,
    outstanding: dealValue - cash,
    avgDeal: safeDiv(dealValue, closed),
    cashPerInitial: safeDiv(cash, initials),
  };
}

// Ladder MESSAGES only: loom day one, then niche, urgency, results. The
// day-one comment is logged in its own column, scored as comment coverage.
function ladderPerLead(age) {
  return age >= 0 && age <= 3 ? 1 : 0;
}

export function computeSignals(daily, replies, capacity) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const byDay = new Map(daily.map((r) => [dayKey(r.date), r]));

  const last7 = daily.slice(-7);
  const pace = last7.length ? last7.reduce((s, r) => s + r.initials, 0) / last7.length : 0;
  const paceRatio = safeDiv(pace, capacity);

  let owed = 0, sent = 0;
  for (let i = 13; i >= 0; i--) {
    const d = new Date(today.getTime() - i * DAY_MS);
    if (d.getDay() === 0) continue; // Sundays off
    const row = byDay.get(dayKey(d));
    if (row) sent += row.followUps;
    for (const c of daily) {
      const age = Math.round((d - c.date) / DAY_MS);
      if (age >= 0) owed += c.initials * ladderPerLead(age);
    }
  }
  const fuRatio = owed > 0 ? sent / owed : null;

  let expectDays = 0, loggedDays = 0;
  const firstLogged = daily.length ? daily[0].date : null;
  for (let i = 7; i >= 1; i--) {
    const d = new Date(today.getTime() - i * DAY_MS);
    if (d.getDay() === 0) continue;
    if (firstLogged && d < firstLogged) continue;
    expectDays++;
    if (byDay.has(dayKey(d))) loggedDays++;
  }

  // Stale honors the Status column: Dead leads leave the pipeline, and a
  // lead marked Talking is being worked, not neglected (Ryan doctrine: the
  // follow ups happen, they are just not event-logged).
  const stale = replies.filter((r) => !r.booked && !r.showed && !r.closed
    && !r.dead && String(r.status || "").toLowerCase() !== "talking"
    && (today - r.date) / DAY_MS > 7).length;

  const cut14 = new Date(today.getTime() - 13 * DAY_MS);
  const init14 = daily.filter((r) => r.date >= cut14).reduce((s, r) => s + r.initials, 0);
  const replies14 = replies.filter((r) => r.date >= cut14).length;

  const firstCommented = daily.find((r) => r.comments > 0);
  let commentRatio = null;
  if (firstCommented) {
    const from = new Date(Math.max(firstCommented.date.getTime(), cut14.getTime()));
    const rows = daily.filter((r) => r.date >= from);
    const cInit = rows.reduce((s, r) => s + r.initials, 0);
    const cSent = rows.reduce((s, r) => s + r.comments, 0);
    commentRatio = cInit > 0 ? cSent / cInit : null;
  }

  return { today, pace, paceRatio, fuRatio, owed, sent, expectDays, loggedDays,
    stale, init14, replies14, replyRate14: safeDiv(replies14, init14), commentRatio };
}

export function healthZones(daily, replies, capacity) {
  const s = computeSignals(daily, replies, capacity);
  return [
    { name: "Initials pace", zone: !daily.length ? "n" : s.paceRatio >= 0.9 ? "g" : s.paceRatio >= 0.6 ? "a" : "r",
      detail: fmtInt(s.pace) + " a day vs " + fmtInt(capacity) },
    { name: "Follow up ladder", zone: s.fuRatio === null ? "n" : s.fuRatio >= 0.85 ? "g" : s.fuRatio >= 0.55 ? "a" : "r",
      detail: s.fuRatio === null ? "waiting on logged days" : "about " + fmtPct(Math.min(s.fuRatio, 1.5), 0) + " of ladder cadence, 14 days" },
    { name: "Comment coverage", zone: s.commentRatio === null ? "n" : s.commentRatio >= 0.85 ? "g" : s.commentRatio >= 0.55 ? "a" : "r",
      detail: s.commentRatio === null ? "no comments logged yet" : "about " + fmtPct(Math.min(s.commentRatio, 1.5), 0) + " of initials get a comment" },
    { name: "Daily logging", zone: !daily.length ? "n" : s.loggedDays >= s.expectDays ? "g" : s.loggedDays >= s.expectDays - 2 ? "a" : "r",
      detail: s.loggedDays + " of " + s.expectDays + " days logged, last week" },
    { name: "Reply handling", zone: !replies.length ? "n" : s.stale === 0 ? "g" : s.stale <= 2 ? "a" : "r",
      detail: s.stale === 0 ? "nothing waiting past 7 days" : s.stale + " unbooked past 7 days" },
  ];
}

/* Diagnosis engine. Rules run in causal order, upstream before downstream:
   data integrity, then volume, then ladder completion, then comments (the
   linked indicator), and only if the ladder and comments are healthy does a
   weak reply rate get blamed on the message itself. Downstream verdicts stay
   muted until their sample can carry a conclusion. */
export function computeFindings(daily, replies, capacity, m) {
  const s = computeSignals(daily, replies, capacity);
  const findings = [];
  const waiting = [];
  const add = (sev, title, evidence, lever) => findings.push({ sev, title, evidence, lever });

  if (daily.length && s.expectDays > 0 && s.loggedDays < s.expectDays - 1) {
    add("r", "Fix the data first",
      "Only " + s.loggedDays + " of the last " + s.expectDays + " days have an EOD row. Every other number here is guesswork until logging is daily.",
      "EOD form every working day, no exceptions.");
  }
  if (daily.length && s.paceRatio < 0.9) {
    add(s.paceRatio < 0.6 ? "r" : "a", "Volume below capacity",
      "Initials running " + fmtInt(s.pace) + " a day against the " + fmtInt(capacity) + " target.",
      "Protect the morning sending block. Initials go out while the US sleeps, per the system overview.");
  }
  const ladderShort = s.fuRatio !== null && s.fuRatio < 0.85;
  if (ladderShort) {
    add(s.fuRatio < 0.55 ? "r" : "a", "The ladder is being cut short",
      "Follow ups are at about " + fmtPct(s.fuRatio, 0) + " of what the ladder messages owe the last 14 days of leads. Most replies come from the later touches, so this suppresses reply rate before the opener is to blame.",
      "Finish the full ladder on every open lead before sourcing new ones. Catch up the recent cohorts first.");
  }
  const commentsShort = s.commentRatio !== null && s.commentRatio < 0.85;
  if (commentsShort) {
    add(s.commentRatio < 0.55 ? "r" : "a", "The comment step is being skipped",
      "Only about " + fmtPct(s.commentRatio, 0) + " of initials are getting a comment. These creators rarely see the initial DM, the comment on their latest reel is what earns the look, so low comments and a low reply rate are the same problem.",
      "Comment on the latest reel 3 hours after every initial that got no reply. Rotate the comment bank, never repeat one on the same account.");
  }
  if (s.init14 >= 150) {
    if (!ladderShort && !commentsShort && s.commentRatio !== null && s.replyRate14 < KPI.replyRate[0]) {
      add("a", "First touch underperforming",
        "Ladder and comments are healthy but the 14 day reply rate is " + fmtPct(s.replyRate14) + ", under the " + fmtPct(KPI.replyRate[0], 0) + " floor on " + fmtInt(s.init14) + " sends.",
        "Rotate the opener, check account health and deliverability, tighten sourcing fit.");
    }
    if (s.commentRatio === null) {
      waiting.push("comment coverage and the messaging verdict (no comments logged yet)");
    }
  } else {
    waiting.push("messaging verdict (needs 150 initials in 14 days, at " + fmtInt(s.init14) + ")");
  }
  if (m.replies >= 10) {
    if (m.bookingRate < KPI.bookingRate[0]) {
      add("a", "Replies not turning into booked calls",
        "Booking rate " + fmtPct(m.bookingRate) + " against a " + fmtPct(KPI.bookingRate[0], 0) + " floor, on " + fmtInt(m.replies) + " replies.",
        "Review the reply-to-call handling. Tier 1 first every day, ask for the call in about half the messages.");
    }
  } else {
    waiting.push("booking verdict (needs 10 replies, at " + fmtInt(m.replies) + ")");
  }
  if (s.stale > 0) {
    add(s.stale > 2 ? "r" : "a", "Tier 1 leads going stale",
      s.stale + (s.stale === 1 ? " reply is" : " replies are") + " sitting unbooked past 7 days. Tier 1 never slips.",
      "Work these today before any new outreach.");
  }
  if (m.booked >= 5) {
    if (m.showRate < KPI.showRate[0]) {
      add("a", "Booked calls not showing",
        "Show rate " + fmtPct(m.showRate) + " against a " + fmtPct(KPI.showRate[0], 0) + " floor.",
        "Confirm the day before and the hour before. Calendar invite plus a personal message.");
    }
  } else {
    waiting.push("show verdict (needs 5 booked, at " + fmtInt(m.booked) + ")");
  }
  if (m.shown >= 5) {
    if (m.closeRate < KPI.closeRate[0]) {
      add("a", "Shows not closing",
        "Close rate " + fmtPct(m.closeRate) + " against a " + fmtPct(KPI.closeRate[0], 0) + " floor.",
        "Review call recordings and the offer framing. This is a sales call problem, not an outreach problem.");
    }
  } else {
    waiting.push("close verdict (needs 5 shows, at " + fmtInt(m.shown) + ")");
  }

  return { findings, waiting };
}

/* Lead scheduler standby: the sheet is intentionally parked until accounts
   2 and 3 land (Ryan doctrine, 2026-08-06). When every active lead is
   overdue and nothing has moved in days, the queue is not a failure, it is
   on standby; it re-arms automatically the day the dates move again. */
export function leadsStandby(leads) {
  const active = leads.filter((l) => l.nextDue && l.status.toLowerCase() !== "replied");
  if (!active.length) return false;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const newest = Math.max(...active.map((l) => l.nextDue.getTime()));
  const overdue = active.filter((l) => l.nextDue < today).length;
  return overdue === active.length && newest < today.getTime() - 3 * DAY_MS;
}

/* Lever wheel pricing: every controllable lever in euros of monthly cash from
   the live funnel. Levers overlap, so they are never summed. */
export function computeLevers(daily, replies, leads, m, calc) {
  const s = computeSignals(daily, replies, calc.capacity);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const pace = s.pace;
  const rrMeasured = m.replyRate > 0;
  const rr = rrMeasured ? m.replyRate : FALLBACK_REPLY_RATE;
  const br = m.bookingRate > 0 ? m.bookingRate : FALLBACK_BOOKING_RATE;
  const sr = calc.showRate, cr = calc.closeRate, aov = calc.aov, days = calc.sendDays;
  const perInitial = rr * br * sr * cr * aov;
  const L = [];
  if (pace < calc.capacity) {
    L.push({ name: "Volume back to " + fmtInt(calc.capacity) + " a day", per: "mo",
      value: (calc.capacity - pace) * days * perInitial,
      detail: fmtInt(pace) + " a day now. Every account sending.",
      basis: rrMeasured ? "measured" : "assumed" });
  }
  if (rr < KPI.replyRate[0]) {
    L.push({ name: "Reply rate to " + fmtPct(KPI.replyRate[0], 0), per: "mo",
      value: pace * days * (KPI.replyRate[0] - rr) * br * sr * cr * aov,
      detail: fmtPct(rr) + " now. Deliverability, then opener, then sourcing.",
      basis: "measured" });
  }
  if (m.replies >= 5 && m.bookingRate < KPI.bookingRate[0]) {
    L.push({ name: "Booking rate to " + fmtPct(KPI.bookingRate[0], 0), per: "mo",
      value: pace * days * rr * (KPI.bookingRate[0] - br) * sr * cr * aov,
      detail: fmtPct(br) + " now. Speed to reply, route to the call.",
      basis: m.replies >= 10 ? "measured" : "hypothesis" });
  }
  const closesMo = pace * days * rr * br * sr * cr;
  if (closesMo > 0) {
    L.push({ name: "Cash per close 5k to 7.5k", per: "mo",
      value: closesMo * 2500,
      detail: "Bigger first payment on the same deals. Scales with every fix above.",
      basis: "assumed" });
  }
  if (s.stale > 0) {
    L.push({ name: "Book the stale Tier 1 replies", per: "one time",
      value: s.stale * br * sr * cr * aov,
      detail: s.stale + " replies past 7 days unbooked.",
      basis: "hypothesis" });
  }
  const overdue = leadsStandby(leads) ? 0
    : leads.filter((l) => l.nextDue && l.status.toLowerCase() !== "replied" && l.nextDue < today).length;
  if (overdue > 0) {
    L.push({ name: "Clear the overdue queue", per: "one time",
      value: overdue * rr * br * sr * cr * aov,
      detail: overdue + " leads overdue in the lead sheet.",
      basis: "hypothesis" });
  }
  return L.filter((l) => l.value > 0.5).sort((a, b) => b.value - a.value).slice(0, 6);
}

export function weekOverWeek(daily, replies) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const cur = (d) => (today - d) / DAY_MS <= 6;
  const prev = (d) => { const a = (today - d) / DAY_MS; return a >= 7 && a <= 13; };
  const delta = (c, p) => (p > 0 ? c / p - 1 : null);
  const sum = (rows, test, f) => rows.filter((r) => test(r.date)).reduce((s, r) => s + f(r), 0);
  return {
    initials: delta(sum(daily, cur, (r) => r.initials), sum(daily, prev, (r) => r.initials)),
    followUps: delta(sum(daily, cur, (r) => r.followUps), sum(daily, prev, (r) => r.followUps)),
    comments: delta(sum(daily, cur, (r) => r.comments), sum(daily, prev, (r) => r.comments)),
    replies: delta(sum(replies, cur, () => 1), sum(replies, prev, () => 1)),
    booked: delta(sum(replies, cur, (r) => (r.booked ? 1 : 0)), sum(replies, prev, (r) => (r.booked ? 1 : 0))),
    cash: delta(sum(replies, cur, (r) => r.cash), sum(replies, prev, (r) => r.cash)),
  };
}

export function weeklySums(daily, replies) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const cur = (d) => (today - d) / DAY_MS <= 6;
  const prev = (d) => { const a = (today - d) / DAY_MS; return a >= 7 && a <= 13; };
  const sum = (rows, test, f) => rows.filter((r) => test(r.date)).reduce((s, r) => s + f(r), 0);
  const pair = (rows, f) => ({ cur: sum(rows, cur, f), prev: sum(rows, prev, f) });
  return {
    initials: pair(daily, (r) => r.initials),
    followUps: pair(daily, (r) => r.followUps),
    comments: pair(daily, (r) => r.comments),
    replies: pair(replies, () => 1),
    booked: pair(replies, (r) => (r.booked ? 1 : 0)),
    cash: pair(replies, (r) => r.cash),
  };
}

export function computeStreaks(daily, capacity) {
  const have = new Map(daily.map((r) => [dayKey(r.date), r]));
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let cur = have.has(dayKey(today)) ? 1 : 0;
  for (let i = 1; i < 400; i++) {
    const d = new Date(today.getTime() - i * DAY_MS);
    if (d.getDay() === 0) continue;
    if (have.has(dayKey(d))) cur++; else break;
  }
  let best = 0, run = 0;
  if (daily.length) {
    for (let t = daily[0].date.getTime(); t <= today.getTime(); t += DAY_MS) {
      const d = new Date(t);
      if (d.getDay() === 0) continue;
      if (have.has(dayKey(d))) { run++; best = Math.max(best, run); } else run = 0;
    }
  }
  let vol = 0;
  for (let i = daily.length - 1; i >= 0; i--) {
    if (daily[i].initials >= capacity * 0.9) vol++; else break;
  }
  return { cur, best, vol };
}

export function displayName(r) {
  if (r.name) return r.name;
  const m = String(r.handle || "").match(/instagram\.com\/([^/?#]+)/i);
  if (m) return "@" + m[1];
  return r.handle || "unknown";
}

export function computeMilestones(daily, replies) {
  const ev = [];
  const firstOf = (test, label) => {
    const r = replies.find(test);
    if (r) ev.push({ date: r.date, label, who: displayName(r) });
  };
  if (replies.length) ev.push({ date: replies[0].date, label: "First reply", who: displayName(replies[0]) });
  firstOf((r) => r.booked, "First call booked");
  firstOf((r) => r.showed, "First call shown");
  firstOf((r) => r.closed, "First client closed");
  if (daily.length) {
    const top = daily.reduce((a, b) => (b.initials > a.initials ? b : a));
    if (top.initials > 0) ev.push({ date: top.date, label: "Biggest day, " + fmtInt(top.initials) + " initials" });
  }
  const cashDays = new Map();
  replies.forEach((r) => {
    if (r.cash > 0) cashDays.set(dayKey(r.date), (cashDays.get(dayKey(r.date)) || 0) + r.cash);
  });
  if (cashDays.size) {
    const [k, v] = [...cashDays.entries()].sort((a, b) => b[1] - a[1])[0];
    const [y, mo, d] = k.split("-").map(Number);
    ev.push({ date: new Date(y, mo - 1, d), label: "Biggest cash day, €" + Math.round(v).toLocaleString("en-IE") });
  }
  let cum = 0;
  for (const r of daily) {
    const before = cum;
    cum += r.initials;
    for (const t of [500, 1000, 2500, 5000, 10000, 25000]) {
      if (before < t && cum >= t) ev.push({ date: r.date, label: fmtInt(t) + " initials sent, all time" });
    }
  }
  ev.sort((a, b) => b.date - a.date);
  return ev.slice(0, 8);
}

/* Reply time analysis */
export function parseReplyHour(s) {
  const m = String(s || "").match(/(\d{1,2}):(\d{2})\s*(am|pm)?/i);
  if (!m) return null;
  let h = +m[1];
  const min = +m[2];
  const ap = m[3] ? m[3].toLowerCase() : null;
  if (ap === "pm" && h < 12) h += 12;
  if (ap === "am" && h === 12) h = 0;
  if (h > 23 || min > 59) return null;
  return h + min / 60;
}
export const TIME_BANDS = [
  { label: "Morning", range: "06 to 12", test: (h) => h >= 6 && h < 12 },
  { label: "Afternoon", range: "12 to 17", test: (h) => h >= 12 && h < 17 },
  { label: "Evening", range: "17 to 22", test: (h) => h >= 17 && h < 22 },
  { label: "Late", range: "22 to 06", test: (h) => h >= 22 || h < 6 },
];
// Circular mean so times either side of midnight average correctly.
export function meanReplyTime(hours) {
  let x = 0, y = 0;
  for (const h of hours) {
    const a = (h / 24) * 2 * Math.PI;
    x += Math.cos(a); y += Math.sin(a);
  }
  let a = Math.atan2(y, x);
  if (a < 0) a += 2 * Math.PI;
  const h = (a / (2 * Math.PI)) * 24;
  const hh = Math.floor(h), mm = Math.round((h - hh) * 60);
  return String(hh % 24).padStart(2, "0") + ":" + String(mm % 60).padStart(2, "0");
}

/* Cash truth: once the Payments tab carries rows it becomes the source for
   when money landed (reply-row cash cannot place a September instalment in
   September). Reply-row cash stays the fallback and the all-time floor. */
export function cashModel(replies, payments) {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const repliesAll = replies.reduce((s, r) => s + r.cash, 0);
  if (!payments || !payments.length) {
    return {
      source: "replies",
      all: repliesAll,
      mtd: replies.filter((r) => r.date >= monthStart).reduce((s, r) => s + r.cash, 0),
    };
  }
  const payAll = payments.reduce((s, p) => s + p.amount, 0);
  return {
    source: "payments",
    // All-time takes the larger of the two records so a payment logged only
    // on the reply row is never lost while the tab backfills.
    all: Math.max(payAll, repliesAll),
    mtd: payments.filter((p) => p.date >= monthStart).reduce((s, p) => s + p.amount, 0),
    mismatch: Math.abs(payAll - repliesAll) > 1 ? { payAll, repliesAll } : null,
  };
}

/* Reply-to-booked velocity, from the Date Booked column. */
export function speedToBook(replies) {
  const lags = replies
    .filter((r) => r.dateBooked && r.date && r.dateBooked >= r.date)
    .map((r) => Math.round((r.dateBooked - r.date) / DAY_MS));
  if (!lags.length) return null;
  lags.sort((a, b) => a - b);
  return {
    n: lags.length,
    median: lags[Math.floor(lags.length / 2)],
    within24h: lags.filter((d) => d <= 1).length / lags.length,
  };
}

export function upcomingCalls(replies) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return replies
    .filter((r) => r.callDate && !r.closed && !r.dead && r.callDate >= today && !r.showed)
    .sort((a, b) => a.callDate - b.callDate)
    .slice(0, 8);
}

export function lossReasons(replies) {
  const dead = replies.filter((r) => r.dead);
  const counts = new Map();
  dead.forEach((r) => {
    const k = r.deadReason || "Unspecified";
    counts.set(k, (counts.get(k) || 0) + 1);
  });
  return { total: dead.length, reasons: [...counts.entries()].sort((a, b) => b[1] - a[1]) };
}

export function accountSplit(replies) {
  const tagged = replies.filter((r) => r.account);
  if (!tagged.length) return null;
  const counts = new Map();
  tagged.forEach((r) => counts.set(r.account, (counts.get(r.account) || 0) + 1));
  return { tagged: tagged.length, total: replies.length,
    accounts: [...counts.entries()].sort((a, b) => b[1] - a[1]) };
}

/* Month-end projection: banked cash, plus the open pipeline weighted by
   stage, plus remaining sends this month damped hard for close lag. */
export function computeProjection(daily, replies, m, calc, cashMTDOverride) {
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const cashMTD = cashMTDOverride !== undefined && cashMTDOverride !== null
    ? cashMTDOverride
    : replies.filter((r) => r.date >= monthStart).reduce((s, r) => s + r.cash, 0);
  const rr = m.replyRate > 0 ? m.replyRate : FALLBACK_REPLY_RATE;
  const br = m.bookingRate > 0 ? m.bookingRate : FALLBACK_BOOKING_RATE;
  let pipe = 0;
  replies.forEach((r) => {
    if (r.closed || r.dead) return;
    if (r.showed) pipe += calc.closeRate * calc.aov;
    else if (r.booked) pipe += calc.showRate * calc.closeRate * calc.aov;
    else pipe += br * calc.showRate * calc.closeRate * calc.aov;
  });
  let remDays = 0;
  for (let t = today.getTime() + DAY_MS; t <= monthEnd.getTime(); t += DAY_MS) {
    if (new Date(t).getDay() !== 0) remDays++;
  }
  const last7 = daily.slice(-7);
  const pace7 = last7.length ? last7.reduce((s, r) => s + r.initials, 0) / last7.length : 0;
  const future = remDays * pace7 * rr * br * calc.showRate * calc.closeRate * calc.aov * 0.35;
  return { cashMTD, pipe, future, remDays, pace7, mid: cashMTD + pipe + future };
}

/* Forecast bands: a small Monte Carlo over the rest of the month. Seeded from
   the data itself so the same snapshot always draws the same band (no flicker
   between refreshes). Wide bands are the honest output of a thin sample. */
export function forecastBands(daily, replies, m, calc, cashMTDOverride) {
  const p = computeProjection(daily, replies, m, calc, cashMTDOverride);
  const rr = m.replyRate > 0 ? m.replyRate : FALLBACK_REPLY_RATE;
  const br = m.bookingRate > 0 ? m.bookingRate : FALLBACK_BOOKING_RATE;
  const open = replies.filter((r) => !r.closed && !r.dead);
  const seed = 1 + m.initials * 7 + m.replies * 131 + Math.round(m.cash) * 17;
  let s = seed % 2147483647; if (s <= 0) s += 2147483646;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const N = 500;
  const results = [];
  for (let i = 0; i < N; i++) {
    let cash = p.cashMTD;
    // open pipeline: each lead resolves by stage odds
    for (const r of open) {
      let pr;
      if (r.showed) pr = calc.closeRate;
      else if (r.booked) pr = calc.showRate * calc.closeRate;
      else pr = br * calc.showRate * calc.closeRate;
      if (rnd() < pr) cash += calc.aov;
    }
    // future sends: binomial replies, then the chain, damped for close lag
    const sends = Math.round(p.remDays * p.pace7);
    let reps = 0;
    for (let k = 0; k < Math.min(sends, 4000); k++) if (rnd() < rr) reps++;
    const chain = br * calc.showRate * calc.closeRate * 0.35;
    for (let k = 0; k < reps; k++) if (rnd() < chain) cash += calc.aov;
    results.push(cash);
  }
  results.sort((a, b) => a - b);
  const q = (f) => results[Math.min(N - 1, Math.floor(f * N))];
  return { p10: q(0.10), p50: q(0.50), p90: q(0.90), mid: p.mid, cashMTD: p.cashMTD };
}

/* Anomaly detection: same-day signals computed on every load, no waiting for
   the Monday memo. Each check compares the latest data against its own
   trailing baseline and only speaks when the deviation is real. */
export function computeAnomalies(daily, replies, leads, capacity) {
  const out = [];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (!daily.length) return out;
  const byDay = new Map(daily.map((r) => [dayKey(r.date), r]));

  // Yesterday unlogged (Sundays excused)
  const yd = new Date(today.getTime() - DAY_MS);
  if (yd.getDay() !== 0 && daily[0].date < yd && !byDay.has(dayKey(yd))) {
    out.push({ sev: "r", text: "No EOD row for yesterday" });
  }

  // Latest logged day volume vs trailing 14-day mean
  const last = daily[daily.length - 1];
  const hist = daily.slice(-15, -1);
  if (hist.length >= 5) {
    const mean = hist.reduce((s, r) => s + r.initials, 0) / hist.length;
    if (mean > 10 && last.initials < mean * 0.5) {
      out.push({ sev: "r", text: "Volume drop: " + fmtInt(last.initials) + " initials vs " + fmtInt(mean) + " avg. Block?" });
    } else if (mean > 10 && last.initials > mean * 1.6) {
      out.push({ sev: "g", text: "Volume surge: " + fmtInt(last.initials) + " initials, " + fmtInt((last.initials / mean - 1) * 100) + "% over trend" });
    }
  }

  // Reply drought: expected replies over the last 3 logged days vs actual
  const d3 = daily.slice(-3);
  const sends3 = d3.reduce((s, r) => s + r.initials, 0);
  const allRate = safeDiv(replies.length, daily.reduce((s, r) => s + r.initials, 0));
  if (sends3 >= 120 && allRate > 0) {
    const cut = d3[0].date;
    const got = replies.filter((r) => r.date >= cut).length;
    const expected = sends3 * allRate;
    if (expected >= 3 && got === 0) {
      out.push({ sev: "r", text: "Reply drought: 0 replies on last " + fmtInt(sends3) + " sends, about " + fmtInt(expected) + " expected. Check account health." });
    }
  }

  // Fresh replies needing action inside 24h (speed to lead doctrine)
  const fresh = replies.filter((r) => !r.booked && !r.closed && !r.dead && (today - r.date) / DAY_MS <= 1).length;
  if (fresh > 0) {
    out.push({ sev: "a", text: fresh + (fresh === 1 ? " live reply" : " live replies") + " in the last 24h. Work them now" });
  }

  // Stale Tier 1: Dead is out of the pipeline, Talking is being worked
  const stale = replies.filter((r) => !r.booked && !r.showed && !r.closed && !r.dead
    && String(r.status || "").toLowerCase() !== "talking" && (today - r.date) / DAY_MS > 7).length;
  if (stale > 0) out.push({ sev: "a", text: stale + " unbooked past 7 days" });

  // Calls on the books
  const calls = replies.filter((r) => r.callDate && !r.closed && !r.dead && !r.showed && r.callDate >= today).length;
  if (calls > 0) out.push({ sev: "g", text: calls + (calls === 1 ? " call" : " calls") + " on the books" });

  // Comment coverage collapse on the latest day
  const anyC = daily.some((r) => r.comments > 0);
  if (anyC && last.initials > 10 && last.comments < last.initials * 0.4) {
    out.push({ sev: "a", text: "Comments at " + fmtInt(safeDiv(last.comments, last.initials) * 100) + "% of initials on the latest day" });
  }

  // Lead sheet staleness vs EOD activity. Fully-parked sheet is standby
  // (waiting on the account fleet), not a failure.
  const activeLeads = leads.filter((l) => l.nextDue && l.status.toLowerCase() !== "replied");
  if (activeLeads.length > 5 && !leadsStandby(leads)) {
    const overdue = activeLeads.filter((l) => l.nextDue < today).length;
    if (overdue > activeLeads.length * 0.8) {
      out.push({ sev: "a", text: "Lead sheet: " + overdue + " of " + activeLeads.length + " overdue. Sheet stale or queue slipping" });
    }
  }

  // Cash landed this week
  const wkCash = replies.filter((r) => (today - r.date) / DAY_MS <= 6).reduce((s, r) => s + r.cash, 0);
  if (wkCash > 0) out.push({ sev: "g", text: "€" + Math.round(wkCash).toLocaleString("en-IE") + " collected this week" });

  return out.slice(0, 6);
}
