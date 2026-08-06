import React, { useMemo, useState } from "react";
import { DAY_MS, COMMISSION_RATE, FALLBACK_REPLY_RATE, FALLBACK_BOOKING_RATE } from "../core/config.js";
import { fmtInt, fmtEuro, fmtEuroK, fmtNum, fmtPct, safeDiv, toNumber, shortDate } from "../core/format.js";
import { forecastBands, computeProjection, displayName, cashModel } from "../core/metrics.js";
import { CountUp, Reveal, Badge } from "../ui/atoms.jsx";

const C = { red: "#E11414", bone: "#F4F2ED", steel: "#7A7A7A", teal: "#3EC1BB" };

/* Cumulative cash this month with the forecast cone to month end. */
function CashTrajectory({ daily, replies, payments, m, calc }) {
  const model = useMemo(() => {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const cm = cashModel(replies, payments);
    const usePayments = cm.source === "payments";
    const days = [];
    let cum = 0;
    for (let t = monthStart.getTime(); t <= today.getTime(); t += DAY_MS) {
      const d = new Date(t);
      const dayCash = usePayments
        ? payments.filter((p) => p.date.getTime() === d.getTime()).reduce((s, p) => s + p.amount, 0)
        : replies.filter((r) => r.date.getTime() === d.getTime()).reduce((s, r) => s + r.cash, 0);
      cum += dayCash;
      days.push({ x: d, y: cum });
    }
    const bands = forecastBands(daily, replies, m, calc, cm.mtd);
    return { days, bands, monthEnd, today, goal: calc.goal };
  }, [daily, replies, payments, m, calc]);

  const { days, bands, monthEnd, today, goal } = model;
  const W = 720, H = 260, padL = 52, padR = 14, padT = 14, padB = 26;
  const x0 = days.length ? days[0].x.getTime() : today.getTime();
  const x1 = monthEnd.getTime();
  const yMax = Math.max(goal, bands.p90, 1) * 1.08;
  const X = (t) => padL + ((t - x0) / Math.max(x1 - x0, 1)) * (W - padL - padR);
  const Y = (v) => padT + (1 - v / yMax) * (H - padT - padB);
  const actualPts = days.map((d) => X(d.x.getTime()).toFixed(1) + "," + Y(d.y).toFixed(1)).join(" ");
  const tX = X(today.getTime()), tY = Y(bands.cashMTD);
  const cone = [
    tX + "," + tY,
    X(x1) + "," + Y(bands.p90),
    X(x1) + "," + Y(bands.p10),
  ].join(" ");
  return (
    <svg viewBox={"0 0 " + W + " " + H} className="chart-svg">
      {[0.25, 0.5, 0.75, 1].map((f) => (
        <g key={f}>
          <line x1={padL} x2={W - padR} y1={Y(yMax * f)} y2={Y(yMax * f)} stroke="#1B1B1B" />
          <text x={padL - 7} y={Y(yMax * f) + 3} textAnchor="end" fontFamily="'Space Mono', monospace" fontSize="9" fill="#4A4A4A">{fmtEuroK(yMax * f)}</text>
        </g>
      ))}
      {/* goal line */}
      <line x1={padL} x2={W - padR} y1={Y(goal)} y2={Y(goal)} stroke={C.bone} strokeDasharray="5 5" opacity="0.45" />
      <text x={W - padR} y={Y(goal) - 5} textAnchor="end" fontFamily="'Space Mono', monospace" fontSize="9" fill={C.bone} opacity="0.7">GOAL {fmtEuroK(goal)}</text>
      {/* forecast cone */}
      <polygon points={cone} fill={C.red} opacity="0.10" />
      <line x1={tX} y1={tY} x2={X(x1)} y2={Y(bands.p50)} stroke={C.red} strokeDasharray="4 5" strokeWidth="1.5" opacity="0.8" />
      {/* actual */}
      {days.length > 1 && <polyline points={actualPts} fill="none" stroke={C.red} strokeWidth="2.4" strokeLinejoin="round" pathLength="1" className="drawline" />}
      <circle cx={tX} cy={tY} r="3.5" fill={C.red} />
      <text x={tX + 6} y={tY - 8} fontFamily="'Space Mono', monospace" fontSize="9" fill={C.bone}>{fmtEuroK(bands.cashMTD)} today</text>
      {/* month labels */}
      <text x={padL} y={H - 8} fontFamily="'Space Mono', monospace" fontSize="9" fill="#4A4A4A">{shortDate(new Date(x0))}</text>
      <text x={W - padR} y={H - 8} textAnchor="end" fontFamily="'Space Mono', monospace" fontSize="9" fill="#4A4A4A">{shortDate(monthEnd)}</text>
    </svg>
  );
}

/* Deals as receipts: one card per close, the collected share filling in. */
function Ledger({ replies }) {
  const deals = replies.filter((r) => r.closed).sort((a, b) => b.date - a.date);
  if (!deals.length) return <div className="note">Closed deals land here as receipts, collected vs signed filling in per deal.</div>;
  return (
    <div className="deal-cards">
      {deals.map((r, i) => {
        const total = r.dealValue || r.cash;
        const pct = safeDiv(r.cash, total);
        const name = displayName(r);
        return (
          <div className="deal-card" key={i}>
            <div className="dc-top">
              <span className="pl-mono won">{(name.replace(/^@/, "")[0] || "?").toUpperCase()}</span>
              <span className="dc-name" title={r.handle}>{name}</span>
              {r.paymentPlan && <span className="chip">plan</span>}
            </div>
            <div className="dc-amount display">{fmtEuro(r.cash)}<span className="dc-of"> of {fmtEuro(total)}</span></div>
            <div className="lbar-track"><span className="lbar-fill" style={{ width: Math.max(pct * 100, 2) + "%" }} /></div>
            <div className="dc-foot">
              <span>{fmtPct(pct, 0)} collected</span>
              <span>{r.dateClosed ? shortDate(r.dateClosed) : shortDate(r.date)}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* Payments as a waterfall: each landing stacked into the running total.
   Rows whose note mentions rev share or backend are split out as the
   backend engine, tracked separately from upfront cash. */
function isRevShare(p) {
  return /rev\s?-?share|backend/i.test(p.notes || "");
}
function PaymentsFlow({ payments }) {
  if (!payments.length) {
    return <div className="note">The Payments tab is live. One row per payment the day it lands; the waterfall, the monthly numbers and the backend split all read from it. Tag backend money with "rev share" in the Notes column.</div>;
  }
  const total = payments.reduce((s, p) => s + p.amount, 0);
  const upfront = payments.filter((p) => !isRevShare(p)).reduce((s, p) => s + p.amount, 0);
  const backend = total - upfront;
  const ordered = [...payments].sort((a, b) => a.date - b.date);
  return (
    <div style={{ marginTop: 14 }}>
      <div className="label" style={{ marginBottom: 8 }}>Payment waterfall</div>
      <div className="wf">
        {ordered.map((p, i) => (
          <span key={i} className={"wf-seg" + (isRevShare(p) ? " rev" : "")}
            style={{ width: Math.max((p.amount / total) * 100, 1.5) + "%" }}
            title={shortDate(p.date) + ": " + fmtEuro(p.amount) + (p.handle ? " · " + p.handle : "") + (isRevShare(p) ? " · rev share" : "")} />
        ))}
      </div>
      <div className="wf-legend">
        <span><i className="wl-up" />upfront {fmtEuro(upfront)}</span>
        <span><i className="wl-rev" />backend rev share {fmtEuro(backend)}</span>
        <span style={{ marginLeft: "auto" }}>{ordered.length} payments · {fmtEuro(total)}</span>
      </div>
      <div style={{ marginTop: 12 }}>
        {[...payments].sort((a, b) => b.date - a.date).slice(0, 10).map((p, i) => (
          <div className="ev" key={i}>
            <span className="ev-date">{shortDate(p.date)}</span>
            <span className="ev-label">{p.handle || p.notes || "payment"}{isRevShare(p) ? " · rev share" : ""}</span>
            <span className="pipe-money" style={{ marginLeft: "auto" }}>{fmtEuro(p.amount)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Planning({ calc, setCalc, m }) {
  const [open, setOpen] = useState(false);
  const { goal, deal, aov, showRate, closeRate, capacity, sendDays } = calc;
  const set = (k) => (v) => setCalc({ ...calc, [k]: v });
  const liveRR = m.replyRate > 0 ? m.replyRate : FALLBACK_REPLY_RATE;
  const liveBR = m.bookingRate > 0 ? m.bookingRate : FALLBACK_BOOKING_RATE;
  const rr = calc.replyRate != null ? calc.replyRate : liveRR;
  const br = calc.bookingRate != null ? calc.bookingRate : liveBR;
  const clientsNeeded = safeDiv(goal, aov);
  const callsToShow = safeDiv(clientsNeeded, closeRate);
  const callsToBook = safeDiv(callsToShow, showRate);
  const repliesNeeded = safeDiv(callsToBook, br);
  const initialsNeeded = safeDiv(repliesNeeded, rr);
  const sendingDaysNeeded = safeDiv(initialsNeeded, capacity);
  const weeksToGoal = safeDiv(sendingDaysNeeded, sendDays / 4.345);
  const timeToGoal = !(capacity > 0) ? null
    : weeksToGoal < 1 ? fmtNum(sendingDaysNeeded, 0) + " days"
    : weeksToGoal < 9 ? fmtNum(weeksToGoal, 1) + " weeks"
    : fmtNum(weeksToGoal / 4.345, 1) + " months";
  const capCash = capacity * sendDays * rr * br * showRate * closeRate * aov;

  const numField = (label, val, setter, step, hint) => (
    <div className="field">
      <label className="label">{label}</label>
      <input type="number" min="0" step={step} value={val}
        onChange={(e) => setter(Math.max(0, toNumber(e.target.value)))} />
      {hint && <div className="hint">{hint}</div>}
    </div>
  );
  const slider = (label, val, setter, min, max, step, hint) => (
    <div className="field">
      <label className="label">
        {label} <Badge kind="manual">Manual</Badge>
        <span className="rate-val" style={{ float: "right" }}>{fmtPct(val)}</span>
      </label>
      <input type="range" min={min} max={max} step={step} value={val}
        onChange={(e) => setter(parseFloat(e.target.value))} />
      {hint && <div className="hint">{hint}</div>}
    </div>
  );
  /* Reply and booking follow the live sheets until dragged; the badge toggles
     back to live. Lets the console answer "what if we hit the KPI" questions. */
  const rateSlider = (label, key, liveVal, min, max, step, hint) => {
    const manual = calc[key] != null;
    const val = manual ? calc[key] : liveVal;
    return (
      <div className="field">
        <label className="label">
          {label}{" "}
          <button className="badge-btn" title={manual ? "back to live" : "drag the slider to override"}
            onClick={() => set(key)(manual ? null : val)}>
            <Badge kind={manual ? "manual" : "live"}>{manual ? "Manual" : "Live"}</Badge>
          </button>
          <span className="rate-val" style={{ float: "right" }}>{fmtPct(val)}</span>
        </label>
        <input type="range" min={min} max={max} step={step} value={val}
          onChange={(e) => set(key)(parseFloat(e.target.value))} />
        {hint && <div className="hint">{hint}</div>}
      </div>
    );
  };
  const chainRow = (label, val, note) => (
    <div className="chain-row">
      <div>
        <div className="mono cr-label">{label}</div>
        {note && <div className="cr-note">{note}</div>}
      </div>
      <div className="display cr-val">{val}</div>
    </div>
  );
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <h2 className="sec" style={{ margin: 0 }}>Planning Console</h2>
        <span style={{ display: "flex", gap: 16, alignItems: "baseline", flexWrap: "wrap" }}>
          <span className="label">goal <b className="display" style={{ color: C.red, fontSize: 16 }}>{fmtEuro(goal)}</b></span>
          <span className="label">time to goal <b className="display" style={{ color: "#F4F2ED", fontSize: 16 }}>{timeToGoal || "--"}</b></span>
          <button className="btn" onClick={() => setOpen(!open)}>{open ? "[ Close ]" : "[ Adjust ]"}</button>
        </span>
      </div>
      {open && (
        <div className="calc-grid" style={{ marginTop: 16 }}>
          <div>
            {numField("Monthly cash goal (€)", goal, set("goal"), 1000)}
            {numField("Cash per close (€)", aov, set("aov"), 500, "What a client pays up front. Most deals are payment plans; the backend is tracked separately.")}
            {numField("Deal value (€)", deal, set("deal"), 1000, "Full contract for the signed-revenue view.")}
            {numField("Capacity, initials a day", capacity, set("capacity"), 5, "One warmed account sends about 100 a day before block risk.")}
            {numField("Send days a month", sendDays, set("sendDays"), 1)}
            {rateSlider("Reply rate", "replyRate", liveRR, 0.005, 0.1, 0.0025)}
            {rateSlider("Booking rate", "bookingRate", liveBR, 0.05, 0.7, 0.005, "KPI baseline 35%.")}
            {slider("Show rate", showRate, set("showRate"), 0.3, 1, 0.005)}
            {slider("Close rate", closeRate, set("closeRate"), 0.05, 0.5, 0.005)}
          </div>
          <div>
            {chainRow("Clients needed", fmtNum(clientsNeeded, 1), "goal / cash per close")}
            {chainRow("Contract revenue", fmtEuro(clientsNeeded * deal), "at full deal value")}
            {chainRow("Shows needed", fmtNum(callsToShow, 1))}
            {chainRow("Calls to book", fmtNum(callsToBook, 1))}
            {chainRow("Replies needed", fmtNum(repliesNeeded, 0), fmtPct(br) + " booking" + (calc.bookingRate != null ? ", manual" : m.bookingRate > 0 ? ", live" : ", assumed"))}
            {chainRow("Initials needed", fmtNum(initialsNeeded, 0), fmtPct(rr) + " reply" + (calc.replyRate != null ? ", manual" : m.replyRate > 0 ? ", live" : ", assumed"))}
            {chainRow("Time to goal", timeToGoal || "--", "at " + fmtInt(capacity) + " a day, " + fmtInt(sendDays) + " send days a month")}
            {chainRow("Month supported by capacity", fmtEuro(capCash), fmtPct(safeDiv(capCash, goal), 0) + " of goal")}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Cash({ daily, replies, payments, m, calc, setCalc }) {
  const cm = cashModel(replies, payments);
  const commission = cm.all * COMMISSION_RATE;
  const outstanding = Math.max(m.dealValue - cm.all, 0);
  const planDeals = replies.filter((r) => r.closed && r.paymentPlan).length;
  const closedDeals = replies.filter((r) => r.closed).length;
  return (
    <div className="grid">
      <div className="tiles" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <Reveal className="tile">
          <div className="label">Collected, this month</div>
          <div className="display val red"><CountUp value={cm.mtd} format={fmtEuro} /></div>
          <div className="sub">{fmtPct(safeDiv(cm.mtd, calc.goal), 0)} of {fmtEuro(calc.goal)}{cm.source === "payments" ? " · by payment date" : ""}</div>
        </Reveal>
        <Reveal className="tile" delay={50}>
          <div className="label">Signed, all time</div>
          <div className="display val"><CountUp value={m.dealValue} format={fmtEuro} /></div>
          <div className="sub">{fmtEuro(outstanding)} still to collect</div>
        </Reveal>
        <Reveal className="tile" delay={100}>
          <div className="label">Commission accrued</div>
          <div className="display val"><CountUp value={commission} format={fmtEuro} /></div>
          <div className="sub">{fmtPct(COMMISSION_RATE, 1)} of collected, owed to the setter</div>
        </Reveal>
        <Reveal className="tile" delay={150}>
          <div className="label">Payment plans</div>
          <div className="display val">{planDeals}<span style={{ color: "#7A7A7A", fontSize: 15 }}> of {closedDeals}</span></div>
          <div className="sub">deals on plans; backend follows</div>
        </Reveal>
      </div>
      {cm.mismatch && (
        <div className="notice">Payments tab total ({fmtEuro(cm.mismatch.payAll)}) and reply-row cash ({fmtEuro(cm.mismatch.repliesAll)}) disagree. Two records of the same money should match; reconcile them.</div>
      )}
      <Reveal className="card">
        <h2 className="sec">Cash Trajectory, this month</h2>
        <CashTrajectory daily={daily} replies={replies} payments={payments} m={m} calc={calc} />
        <div className="note">Red line is money banked{cm.source === "payments" ? ", dated by when each payment landed" : ""}. The cone is 500 simulated month-ends from the live rates: dashed midline P50, shaded P10 to P90. A thin sample means a wide cone; that is the honest read.</div>
      </Reveal>
      <div className="two-col">
        <Reveal className="card">
          <h2 className="sec">Deal Ledger</h2>
          <Ledger replies={replies} />
          <PaymentsFlow payments={payments} />
        </Reveal>
        <Reveal delay={60}><Planning calc={calc} setCalc={setCalc} m={m} /></Reveal>
      </div>
    </div>
  );
}
