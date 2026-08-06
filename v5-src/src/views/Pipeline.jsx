import React from "react";
import { KPI, DAY_MS } from "../core/config.js";
import { fmtInt, fmtEuro, fmtPct, dayKey, shortDate } from "../core/format.js";
import { displayName, parseReplyHour, TIME_BANDS, meanReplyTime, speedToBook, upcomingCalls, lossReasons, accountSplit } from "../core/metrics.js";
import { Reveal } from "../ui/atoms.jsx";

const C = { red: "#E11414", bone: "#F4F2ED", steel: "#7A7A7A" };

function FunnelView({ m }) {
  const stages = [
    { label: "Initials", value: m.initials },
    { label: "Replies", value: m.replies, rate: m.replyRate, rateLabel: "reply rate" },
    { label: "Booked", value: m.booked, rate: m.bookingRate, rateLabel: "booking rate" },
    { label: "Shown", value: m.shown, rate: m.showRate, rateLabel: "show rate" },
    { label: "Closed", value: m.closed, rate: m.closeRate, rateLabel: "close rate" },
  ];
  const maxV = Math.max(stages[0].value, 1);
  const W = 700, H = 380, pad = 10;
  const widthFor = (v) => Math.max(Math.sqrt(v / maxV) * (W * 0.62), 44);
  const n = stages.length;
  const segH = (H - pad * 2) / n;
  const bw = stages.map((s) => widthFor(s.value));
  bw.push(bw[n - 1] * 0.72);
  const fills = ["#414141", "#3A3A3A", "#323232", "#2B2B2B", C.red];
  const segPath = (i) => {
    const y0 = pad + i * segH, y1 = y0 + segH;
    const c = segH * 0.55;
    const x0l = (W - bw[i]) / 2, x0r = (W + bw[i]) / 2;
    const x1l = (W - bw[i + 1]) / 2, x1r = (W + bw[i + 1]) / 2;
    return "M" + x0l + "," + y0
      + " C" + x0l + "," + (y0 + c) + " " + x1l + "," + (y1 - c) + " " + x1l + "," + y1
      + " L" + x1r + "," + y1
      + " C" + x1r + "," + (y1 - c) + " " + x0r + "," + (y0 + c) + " " + x0r + "," + y0 + " Z";
  };
  return (
    <div>
      <svg viewBox={"0 0 " + W + " " + H} width="100%" style={{ display: "block" }}>
        <defs>
          <filter id="redglow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor={C.red} floodOpacity="0.45" />
          </filter>
        </defs>
        {stages.map((s, i) => {
          const drop = i > 0 ? stages[i - 1].value - s.value : null;
          const yMid = pad + i * segH + segH / 2;
          return (
            <g key={s.label}>
              <path d={segPath(i)} fill={fills[i]} stroke="#0A0A0A" strokeWidth="2"
                filter={i === n - 1 ? "url(#redglow)" : undefined}>
                <title>{s.label + ": " + fmtInt(s.value)
                  + (s.rate !== undefined ? " · " + fmtPct(s.rate) + " " + s.rateLabel : "")
                  + (drop !== null ? " · " + fmtInt(drop) + " did not make it" : "")}</title>
              </path>
              <text x={W / 2} y={yMid + 6} textAnchor="middle"
                fontFamily="'Archivo Black', sans-serif" fontSize="19" fill={C.bone}
                style={{ pointerEvents: "none" }}>{fmtInt(s.value)}</text>
              <text x={0} y={yMid + 3} fontFamily="'Space Mono', monospace" fontSize="11"
                letterSpacing="1.5" fill={C.steel}>{s.label.toUpperCase()}</text>
              {s.rate !== undefined && (
                <text x={W} y={yMid - 4} textAnchor="end" fontFamily="'Space Mono', monospace"
                  fontSize="11" fill={C.bone}>{fmtPct(s.rate)}</text>
              )}
              {drop !== null && (
                <text x={W} y={yMid + 11} textAnchor="end" fontFamily="'Space Mono', monospace"
                  fontSize="9" fill={C.steel}>{"-" + fmtInt(drop) + " lost"}</text>
              )}
            </g>
          );
        })}
      </svg>
      <div className="note">Widths on a square root scale so late stages stay visible. Hover a stage for detail. The counts and rates are exact.</div>
    </div>
  );
}

function Gauge({ label, value, floor, strong, sample, sampleNeed, sampleUnit }) {
  const R = 40, CIRC = 2 * Math.PI * R;
  const low = sample < sampleNeed;
  const frac = Math.max(0.005, Math.min(value / strong, 1));
  const tickAngle = Math.min(floor / strong, 1) * 360;
  const col = low ? "#3A3A3A" : value >= floor ? C.red : "#C9A227";
  return (
    <div className="gauge">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#1E1E1E" strokeWidth="8" />
        <circle cx="50" cy="50" r={R} fill="none" stroke={col} strokeWidth="8"
          strokeDasharray={frac * CIRC + " " + CIRC} strokeLinecap="round"
          transform="rotate(-90 50 50)" />
        <line x1="50" y1="4" x2="50" y2="13" stroke={C.bone} strokeWidth="2"
          transform={"rotate(" + tickAngle + " 50 50)"} opacity="0.75" />
        <text x="50" y="49" textAnchor="middle" fill={C.bone}
          fontFamily="'Archivo Black', sans-serif" fontSize="16">{low ? "--" : fmtPct(value, 1)}</text>
        <text x="50" y="63" textAnchor="middle" fill="#7A7A7A"
          fontFamily="'Space Mono', monospace" fontSize="7" letterSpacing="1">
          {low ? "LOW SAMPLE" : "FLOOR " + fmtPct(floor, 0)}
        </text>
      </svg>
      <div className="label" style={{ textAlign: "center", marginTop: 7 }}>{label}</div>
      <div className="gauge-sub">{fmtInt(sample)} {sampleUnit}</div>
    </div>
  );
}

function PipelineList({ replies }) {
  const rows = [...replies].sort((a, b) => b.date - a.date);
  const stage = (r) => (r.dead ? "dead" : r.closed ? "closed" : r.showed ? "shown" : r.booked ? "booked" : r.status.toLowerCase() === "talking" ? "talking" : "replied");
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const ageOf = (r) => Math.max(0, Math.round((today - r.date) / DAY_MS));
  const ageClass = (r) => {
    if (stage(r) !== "replied") return "";
    const a = ageOf(r);
    return a > 7 ? " stale" : a >= 2 ? " aging" : "";
  };
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
        <h2 className="sec" style={{ margin: 0 }}>Pipeline</h2>
        <span className="label">{rows.length} {rows.length === 1 ? "reply" : "replies"}</span>
      </div>
      {rows.length === 0 && <div className="note">No replies in this window yet.</div>}
      <div className="pipe-scroll">
        {rows.map((r, i) => (
          <div className={"pipe-row" + (r.dead ? " is-dead" : "")} key={i}>
            <span className="pipe-name">{displayName(r)}</span>
            {!r.closed && !r.dead && <span className={"age" + ageClass(r)} title={"replied " + ageOf(r) + " days ago"}>{ageOf(r)}d</span>}
            {r.account && <span className="age" title="account">{r.account.replace(/^Acc /i, "A")}</span>}
            <span className={"chip " + stage(r)} title={r.dead && r.deadReason ? r.deadReason : undefined}>
              {r.dead && r.deadReason ? "dead · " + r.deadReason.toLowerCase() : stage(r)}
            </span>
            {r.closed && r.cash > 0 && (
              <span className="pipe-money">
                {fmtEuro(r.cash)}{r.dealValue > r.cash ? " of " + fmtEuro(r.dealValue) : ""}{r.paymentPlan ? " · plan" : ""}
              </span>
            )}
            <span className="pipe-date">{shortDate(r.date)}{r.timeReplied ? " · " + r.timeReplied : ""}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReplyWindows({ replies }) {
  const hours = replies.map((r) => parseReplyHour(r.timeReplied)).filter((h) => h !== null);
  if (!hours.length) return null;
  const counts = TIME_BANDS.map((b) => hours.filter(b.test).length);
  const top = counts.indexOf(Math.max(...counts));
  const hmax = Math.max(...Array.from({ length: 24 }, (_, k) => hours.filter((x) => Math.floor(x) === k).length), 1);
  return (
    <div className="card">
      <h2 className="sec">Reply Windows, Irish time</h2>
      <div className="rw-stats">
        <div>
          <div className="label">Best window so far</div>
          <div className="display rw-big" style={{ color: C.red }}>{TIME_BANDS[top].range.replace(" to ", " - ")}</div>
          <div className="hdetail">{TIME_BANDS[top].label.toLowerCase()}</div>
        </div>
        <div>
          <div className="label">Average reply time</div>
          <div className="display rw-big">{meanReplyTime(hours)}</div>
          <div className="hdetail">across {hours.length} timed replies</div>
        </div>
      </div>
      <div className="hm-row">
        {Array.from({ length: 24 }, (_, h) => {
          const c = hours.filter((x) => Math.floor(x) === h).length;
          return (
            <span key={h} className="hm-cell"
              title={String(h).padStart(2, "0") + ":00, " + c + (c === 1 ? " reply" : " replies")}
              style={{ background: c > 0 ? "rgba(225,20,20," + (0.18 + 0.82 * (c / hmax)).toFixed(2) + ")" : "#1E1E1E" }} />
          );
        })}
      </div>
      <div className="hm-labels"><span>00</span><span>06</span><span>12</span><span>18</span><span>23</span></div>
      <div className="note">
        Times on {hours.length} of {replies.length} replies.
        {hours.length < 30 && " Directional only until 30 plus. The reply window is when Tier 1 conversations should be worked live."}
      </div>
    </div>
  );
}

function Queue({ daily, leads }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const stat = (label, val, red) => (
    <div>
      <div className="label">{label}</div>
      <div className="display sv" style={red ? { color: C.red } : null}>{fmtInt(val)}</div>
    </div>
  );
  const active = leads.filter((l) => l.nextDue && l.status.toLowerCase() !== "replied");
  if (active.length > 0) {
    const overdue = active.filter((l) => l.nextDue < today).length;
    const dueToday = active.filter((l) => dayKey(l.nextDue) === dayKey(today)).length;
    const dueTomorrow = active.filter((l) =>
      dayKey(l.nextDue) === dayKey(new Date(today.getTime() + DAY_MS))).length;
    const ladderQ = active.filter((l) => l.nextDue <= today && /^touch/i.test(l.nextTouch)).length;
    const fuQ = active.filter((l) => l.nextDue <= today && !/^touch/i.test(l.nextTouch)).length;
    return (
      <div className="card">
        <h2 className="sec">Follow Up Queue, live from the lead sheet</h2>
        <div className="streaks">
          {stat("Overdue", overdue, overdue > 0)}
          {stat("Due today", dueToday)}
          {stat("Due tomorrow", dueTomorrow)}
        </div>
        <div className="note">
          Of everything due or overdue right now: {fmtInt(ladderQ)} ladder touches, {fmtInt(fuQ)} evergreen follow ups, across {fmtInt(active.length)} open leads.
          {overdue > 0 && " Red rows in the lead sheet are stacking up, work them to zero per the SOP."}
        </div>
      </div>
    );
  }
  const tomorrow = new Date(today.getTime() + DAY_MS);
  let ladder = 0, evergreen = 0;
  for (const c of daily) {
    const age = Math.round((tomorrow - c.date) / DAY_MS);
    if (age >= 1 && age <= 3) ladder += c.initials;
    else if (age >= 8 && age <= 28) evergreen += c.initials / 3;
    else if (age >= 29 && age <= 90) evergreen += c.initials / 7;
    else if (age >= 91) evergreen += c.initials / 30;
  }
  const total = ladder + evergreen;
  return (
    <div className="card">
      <h2 className="sec">Tomorrow's Load, SOP estimate</h2>
      <div className="streaks">
        {stat("Ladder messages", ladder)}
        {stat("Evergreen touches", evergreen)}
        {stat("Total owed", total, total > 450)}
      </div>
      <div className="note">
        Estimated from the daily log cohorts and the SOP cadence. Connects to the lead scheduler sheet automatically when it is reachable.
        {total > 450 && " This load is beyond one setter's day, Tier 3 slips first per the Follow Up SOP."}
      </div>
    </div>
  );
}

function Velocity({ replies }) {
  const stb = speedToBook(replies);
  const calls = upcomingCalls(replies);
  const loss = lossReasons(replies);
  const acc = accountSplit(replies);
  if (!stb && !calls.length && !loss.total && !acc) return null;
  return (
    <div className="card">
      <h2 className="sec">Velocity + Outcomes</h2>
      <div className="streaks">
        <div>
          <div className="label">Reply to booked</div>
          <div className="display sv">{stb ? stb.median + "d" : "--"}</div>
          <div className="hdetail">{stb ? "median, " + stb.n + " booked with dates" : "needs Date Booked entries"}</div>
        </div>
        <div>
          <div className="label">Booked inside 24h</div>
          <div className="display sv">{stb ? fmtPct(stb.within24h, 0) : "--"}</div>
          <div className="hdetail">speed to lead doctrine</div>
        </div>
        <div>
          <div className="label">Lost leads</div>
          <div className="display sv">{loss.total}</div>
          <div className="hdetail">{loss.reasons.length ? loss.reasons.map(([k, v]) => k.toLowerCase() + " " + v).join(" · ") : "none marked dead yet"}</div>
        </div>
      </div>
      {calls.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <div className="label" style={{ marginBottom: 6 }}>Calls on the books</div>
          {calls.map((r, i) => (
            <div className="ev" key={i}>
              <span className="ev-date">{shortDate(r.callDate)}</span>
              <span className="ev-label">{displayName(r)}</span>
              {r.account && <span className="ev-who">{r.account}</span>}
            </div>
          ))}
        </div>
      )}
      {acc && (
        <div className="note">
          Replies by account: {acc.accounts.map(([k, v]) => k + " " + v).join(" · ")}
          {acc.tagged < acc.total && " · " + (acc.total - acc.tagged) + " untagged"}
        </div>
      )}
    </div>
  );
}

export default function Pipeline({ daily, replies, leads, m }) {
  return (
    <div className="grid">
      <div className="two-col">
        <Reveal className="card">
          <h2 className="sec">Funnel, all time</h2>
          <FunnelView m={m} />
        </Reveal>
        <div className="grid">
          <Reveal delay={60}>
            <div className="card">
              <h2 className="sec">Stage Rates vs floors</h2>
              <div className="gauges">
                <Gauge label="Reply" value={m.replyRate} floor={KPI.replyRate[0]} strong={KPI.replyRate[1]} sample={m.initials} sampleNeed={150} sampleUnit="sends" />
                <Gauge label="Booking" value={m.bookingRate} floor={KPI.bookingRate[0]} strong={KPI.bookingRate[1]} sample={m.replies} sampleNeed={10} sampleUnit="replies" />
                <Gauge label="Show" value={m.showRate} floor={KPI.showRate[0]} strong={KPI.showRate[1]} sample={m.booked} sampleNeed={5} sampleUnit="booked" />
                <Gauge label="Close" value={m.closeRate} floor={KPI.closeRate[0]} strong={KPI.closeRate[1]} sample={m.shown} sampleNeed={5} sampleUnit="shows" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}><Velocity replies={replies} /></Reveal>
          <Reveal delay={180}><Queue daily={daily} leads={leads} /></Reveal>
        </div>
      </div>
      <div className="two-col">
        <Reveal><PipelineList replies={replies} /></Reveal>
        <Reveal delay={60}><ReplyWindows replies={replies} /></Reveal>
      </div>
    </div>
  );
}
