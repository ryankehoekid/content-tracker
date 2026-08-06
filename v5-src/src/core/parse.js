// CSV parsing, ported intact from v4. Both tabs carry a header block plus an
// example row; find the real header by its column names, skip junk rows.
// colIndex resolves exact > endsWith > includes so gviz-merged instruction
// text cannot hijack a column (the €6,078 phantom-cash bug class).
import Papa from "papaparse";
import { DATE_FORMAT } from "./config.js";
import { toNumber, toBool, dayKey } from "./format.js";

// Log rows can never legitimately be dated in the future; a year typo in the
// sheet (2027 for 2026) otherwise silently drops the row from every window.
function fixFutureYear(d) {
  const limit = Date.now() + 7 * 86400000;
  let guard = 0;
  while (d.getTime() > limit && guard++ < 5) d.setFullYear(d.getFullYear() - 1);
  return d;
}

export function makeDateParser(rawDates) {
  let fmt = DATE_FORMAT;
  if (fmt === "auto") {
    fmt = "DMY"; // Irish default
    for (const s of rawDates) {
      const m = String(s || "").match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);
      if (m) {
        if (+m[1] > 12) { fmt = "DMY"; break; }
        if (+m[2] > 12) { fmt = "MDY"; break; }
      }
    }
  }
  return function parseDate(s) {
    const str = String(s || "").trim();
    if (!str) return null;
    let m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    if (m) return fixFutureYear(new Date(+m[1], +m[2] - 1, +m[3]));
    m = str.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);
    if (m) {
      let y = +m[3]; if (y < 100) y += 2000;
      const a = +m[1], b = +m[2];
      const [day, mon] = fmt === "MDY" ? [b, a] : [a, b];
      const d = new Date(y, mon - 1, day);
      return isNaN(d) ? null : fixFutureYear(d);
    }
    const d = new Date(str);
    return isNaN(d) ? null : fixFutureYear(d);
  };
}

function findHeaderRow(rows, mustInclude) {
  for (let i = 0; i < Math.min(rows.length, 12); i++) {
    const cells = rows[i].map((c) => String(c || "").trim().toLowerCase());
    if (mustInclude.every((k) => cells.some((c) => c.includes(k)))) return i;
  }
  return -1;
}
function colIndex(headerCells, ...names) {
  const cells = headerCells.map((c) => String(c || "").trim().toLowerCase());
  for (const pass of ["exact", "ends", "includes"]) {
    for (const name of names) {
      const i = cells.findIndex((c) =>
        pass === "exact" ? c === name : pass === "ends" ? c.endsWith(name) : c.includes(name));
      if (i !== -1) return i;
    }
  }
  return -1;
}
function isJunkRow(cells) {
  const joined = cells.map((c) => String(c || "").trim()).join("");
  if (!joined) return true;
  return cells.some((c) => String(c || "").toLowerCase().includes("example"));
}

export function parseDailyLog(csvText) {
  const rows = Papa.parse(csvText, { skipEmptyLines: false }).data;
  const h = findHeaderRow(rows, ["date", "initials"]);
  if (h === -1) throw new Error("Daily Log: could not find the header row (needs Date and Initials Sent columns).");
  const H = rows[h];
  const ci = {
    date: colIndex(H, "date"),
    setter: colIndex(H, "setter"),
    initials: colIndex(H, "initials sent", "initial"),
    followUps: colIndex(H, "follow ups sent", "follow"),
    comments: colIndex(H, "comments sent", "comment"),
    notes: colIndex(H, "notes", "note"),
  };
  const body = rows.slice(h + 1).filter((r) => !isJunkRow(r));
  const parseDate = makeDateParser(body.map((r) => r[ci.date]));
  const out = [];
  for (const r of body) {
    const date = parseDate(r[ci.date]);
    if (!date) continue;
    out.push({
      date,
      setter: String(r[ci.setter] || "").trim(),
      initials: toNumber(r[ci.initials]),
      followUps: toNumber(r[ci.followUps]),
      comments: ci.comments !== -1 ? toNumber(r[ci.comments]) : 0,
      notes: String(r[ci.notes] || "").trim(),
    });
  }
  out.sort((a, b) => a.date - b.date);
  return out;
}

export function parseReplies(csvText) {
  const rows = Papa.parse(csvText, { skipEmptyLines: false }).data;
  const h = findHeaderRow(rows, ["date", "handle"]);
  if (h === -1) throw new Error("Replies: could not find the header row (needs Date Replied and Handle columns).");
  const H = rows[h];
  const ci = {
    date: colIndex(H, "date replied", "date"),
    handle: colIndex(H, "handle"),
    name: colIndex(H, "name"),
    booked: colIndex(H, "booked", "book"),
    showed: colIndex(H, "showed", "show"),
    closed: colIndex(H, "closed", "close"),
    dealValue: colIndex(H, "deal value", "deal"),
    cash: colIndex(H, "cash collected", "cash"),
    plan: colIndex(H, "payment plan", "plan"),
    notes: colIndex(H, "notes", "note"),
    time: colIndex(H, "time replied", "time"),
    // Phase 1 event columns; all optional, tolerated when absent.
    status: colIndex(H, "status"),
    deadReason: colIndex(H, "dead reason"),
    account: colIndex(H, "account"),
    dateBooked: colIndex(H, "date booked"),
    callDate: colIndex(H, "call date"),
    dateClosed: colIndex(H, "date closed"),
  };
  const body = rows.slice(h + 1).filter((r) => !isJunkRow(r));
  const parseDate = makeDateParser(body.map((r) => r[ci.date]));
  const out = [];
  for (const r of body) {
    const date = parseDate(r[ci.date]);
    if (!date) continue;
    const status = String(r[ci.status] || "").trim();
    const dateBooked = parseDate(r[ci.dateBooked]);
    const dateClosed = parseDate(r[ci.dateClosed]);
    out.push({
      date,
      handle: String(r[ci.handle] || "").trim(),
      name: String(r[ci.name] || "").trim(),
      // The Y flag, the Status dropdown and the event date all mean the same
      // thing; any one of them marks the stage so a missed checkbox cannot
      // hide a booked call or a close.
      booked: toBool(r[ci.booked]) || status.toLowerCase() === "booked" || !!dateBooked,
      showed: toBool(r[ci.showed]),
      closed: toBool(r[ci.closed]) || !!dateClosed,
      dealValue: toNumber(r[ci.dealValue]),
      cash: toNumber(r[ci.cash]),
      paymentPlan: toBool(r[ci.plan]),
      notes: String(r[ci.notes] || "").trim(),
      timeReplied: ci.time !== -1 ? String(r[ci.time] || "").trim() : "",
      status,
      dead: status.toLowerCase() === "dead",
      deadReason: String(r[ci.deadReason] || "").trim(),
      account: String(r[ci.account] || "").trim(),
      dateBooked,
      // Call dates are legitimately in the future; no year rollback.
      callDate: parseFutureDate(r[ci.callDate]),
      dateClosed,
    });
  }
  out.sort((a, b) => a.date - b.date);
  return out;
}

// Dates allowed to be in the future (lead due dates, call dates), so no
// year rollback here; strict formats only.
function parseFutureDate(s) {
  const str = String(s || "").trim();
  if (!str) return null;
  let m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  m = str.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);
  if (m) { let y = +m[3]; if (y < 100) y += 2000; return new Date(y, +m[2] - 1, +m[1]); }
  return null;
}

// Lead scheduler dates are allowed to be in the future (that is the point),
// so no year rollback here; strict formats only.
function parseLeadDate(s) {
  const str = String(s || "").trim();
  if (!str) return null;
  let m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return new Date(+m[1], +m[2] - 1, +m[3]);
  m = str.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);
  if (m) { let y = +m[3]; if (y < 100) y += 2000; return new Date(y, +m[2] - 1, +m[1]); }
  return null;
}

export function parseLeads(csvText) {
  const rows = Papa.parse(csvText, { skipEmptyLines: false }).data;
  const h = findHeaderRow(rows, ["handle", "next due"]);
  if (h === -1) throw new Error("Leads: header row not found.");
  const H = rows[h];
  const ci = {
    handle: colIndex(H, "handle"),
    account: colIndex(H, "account"),
    name: colIndex(H, "name"),
    niche: colIndex(H, "niche"),
    nextTouch: colIndex(H, "next touch"),
    nextDue: colIndex(H, "next due date", "next due"),
    status: colIndex(H, "status"),
  };
  const out = [];
  for (const r of rows.slice(h + 1)) {
    if (isJunkRow(r)) continue;
    const handle = String(r[ci.handle] || "").trim();
    if (!handle) continue;
    out.push({
      handle,
      account: String(r[ci.account] || "").trim(),
      name: String(r[ci.name] || "").trim(),
      niche: String(r[ci.niche] || "").trim(),
      nextTouch: String(r[ci.nextTouch] || "").trim(),
      nextDue: parseLeadDate(r[ci.nextDue]),
      status: String(r[ci.status] || "").trim(),
    });
  }
  return out;
}

/* Payments tab: one row per payment the day money lands. The truth source
   for monthly cash once it carries rows; reply-row cash stays the fallback. */
export function parsePayments(csvText) {
  const rows = Papa.parse(csvText, { skipEmptyLines: false }).data;
  const h = findHeaderRow(rows, ["date", "amount"]);
  if (h === -1) throw new Error("Payments: header row not found.");
  const H = rows[h];
  const ci = {
    date: colIndex(H, "date"),
    handle: colIndex(H, "handle"),
    amount: colIndex(H, "amount"),
    notes: colIndex(H, "notes", "note"),
  };
  const body = rows.slice(h + 1).filter((r) => !isJunkRow(r));
  const parseDate = makeDateParser(body.map((r) => r[ci.date]));
  const out = [];
  for (const r of body) {
    const date = parseDate(r[ci.date]);
    const amount = toNumber(r[ci.amount]);
    if (!date || !(amount > 0)) continue;
    out.push({
      date, amount,
      handle: String(r[ci.handle] || "").trim(),
      notes: String(r[ci.notes] || "").trim(),
    });
  }
  out.sort((a, b) => a.date - b.date);
  return out;
}

/* Sample data, used only while the live feed is unreachable. Mimics the real
   sheet layout including the header block and example row, so it exercises
   the exact same parser as live data. */
export function buildSampleCsvs() {
  const today = new Date();
  const daily = [
    "KEHOEGROUP Daily Log,,,,,",
    "Fill this in once a day,,,,,",
    "Date,Setter,Initials Sent,Follow Ups Sent,Comments Sent,Notes",
    "01/01/2026,Example Setter,25,10,20,Example row - ignore",
  ];
  const replies = [
    "KEHOEGROUP Replies,,,,,,,,,,,,,,,,",
    "One row per person who replied,,,,,,,,,,,,,,,,",
    "Date Replied,Handle,Name,Time Replied,Booked,Showed,Closed,Deal Value,Cash Collected,Payment Plan,Notes,Status,Dead Reason,Account,Date Booked,Call Date,Date Closed",
    "01/01/2026,@example,Example Person,12:00,Y,Y,Y,10000,5000,Y,Example row - ignore,,,,,,",
  ];
  const payments = [
    "KEHOEGROUP Payments,,,",
    "One row per payment received,,,",
    "Date,Handle,Amount,Notes",
  ];
  const dmy = (d) => {
    const p = (x) => String(x).padStart(2, "0");
    return p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear();
  };
  const rand = (seed) => { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; };
  const rnd = rand(42);
  const handles = ["@fx_daniel","@ecom.luke","@ai.martina","@salescoach_tom","@realty.jane",
    "@bizopp.kev","@trading.sy","@creator.mia","@closer.pat","@brand.ash","@growth.finn",
    "@wealth.roy","@mentor.zed","@funnel.gus","@scale.ivy","@offer.max","@coach.nia","@deals.obi"];
  let leadN = 0;
  for (let back = 69; back >= 0; back--) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - back);
    if (d.getDay() === 0) continue;
    const ramp = 1 + (69 - back) / 69;
    const initials = Math.round((14 + rnd() * 14) * ramp);
    const fups = Math.round((8 + rnd() * 16) * ramp);
    const cmts = Math.round(initials * (0.8 + rnd() * 0.2));
    daily.push(dmy(d) + ",Jamie," + initials + "," + fups + "," + cmts + ",");
    const exp = initials * (0.03 + rnd() * 0.025);
    const nReplies = Math.floor(exp) + (rnd() < exp % 1 ? 1 : 0);
    for (let k = 0; k < nReplies; k++) {
      const handle = handles[leadN % handles.length] + (leadN >= handles.length ? "." + leadN : "");
      leadN++;
      const booked = rnd() < 0.38;
      const showed = booked && rnd() < 0.7;
      const closed = showed && back > 20 && rnd() < 0.35;
      const deal = closed ? (rnd() < 0.4 ? 15000 : 10000) : 0;
      const plan = closed && rnd() < 0.5;
      const cash = closed ? (plan ? deal / 2 : deal) : 0;
      const hr = 13 + Math.floor(rnd() * 11);
      const time = String(hr % 24).padStart(2, "0") + ":" + String(Math.floor(rnd() * 60)).padStart(2, "0");
      // Phase 1 event columns in the sample so every new code path renders:
      // dead leads with reasons, statuses, account tags, stage dates.
      const isDead = !booked && back > 14 && rnd() < 0.3;
      const status = isDead ? "Dead" : booked ? "Booked" : back < 5 && rnd() < 0.5 ? "Talking" : "";
      const deadReason = isDead ? ["Ghosted", "No money", "Bad fit", "Priced out"][Math.floor(rnd() * 4)] : "";
      const dBooked = booked ? dmy(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1)) : "";
      const dCall = booked && !showed && back < 4
        ? dmy(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1 + Math.floor(rnd() * 3)))
        : booked ? dmy(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 3)) : "";
      const dClosed = closed ? dmy(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 18)) : "";
      replies.push([dmy(d), handle, "", time, booked ? "Y" : "", showed ? "Y" : "",
        closed ? "Y" : "", deal || "", cash || "", plan ? "Y" : "", "",
        status, deadReason, "Acc 1", dBooked, dCall, dClosed].join(","));
      if (closed && cash > 0) {
        payments.push([dClosed, handle, cash, plan ? "first payment" : "paid in full"].join(","));
      }
    }
  }
  return { daily: daily.join("\n"), replies: replies.join("\n"), payments: payments.join("\n") };
}

export function sampleLeadsCsv() {
  const today = new Date();
  const iso = (off) => dayKey(new Date(today.getFullYear(), today.getMonth(), today.getDate() + off));
  const rows = ["Handle,Account,Name,Niche,Last Touch Sent,Date Last Sent,Next Touch,Next Due Date,Status,Due?,Notes"];
  const mk = (h, touch, off, status) => rows.push([h, "Acc 1", "", "Trading", "", "", touch, iso(off), status || "Active", "", ""].join(","));
  ["@fx_lead1", "@fx_lead2", "@ai_lead3"].forEach((h, i) => mk(h, "Touch 4", -2 + i));
  ["@ec_lead4", "@ec_lead5", "@re_lead6", "@re_lead7"].forEach((h) => mk(h, "FU wk2-4", 0));
  ["@tr_lead8", "@tr_lead9"].forEach((h) => mk(h, "Touch 5", 1));
  ["@tr_lead10", "@ai_lead11", "@ec_lead12"].forEach((h) => mk(h, "FU mon2-3", 2));
  mk("@dead_lead", "Reactivation", 5, "Replied");
  return rows.join("\n");
}
