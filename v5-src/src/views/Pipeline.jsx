import React from "react";
import { KPI, DAY_MS } from "../core/config.js";
import { fmtInt, fmtEuro, fmtPct, dayKey, shortDate } from "../core/format.js";
import { displayName, parseReplyHour, TIME_BANDS, meanReplyTime, speedToBook, upcomingCalls, lossReasons, accountSplit } from "../core/metrics.js";
import { Reveal } from "../ui/atoms.jsx";

const C = { red: "#E11414", bone: "#F4F2ED", steel: "#7A7A7A" };
const REDUCED = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* The bloodstream: the funnel as a horizontal river. Band thickness is the
   square-root-scaled survivor count; at each stage boundary the lost share
   peels off downward and fades. Particles ride the stream live, and the
   drop-off is something you watch happen instead of a shape you decode. */
function FlowFunnel({ m }) {
  const ref = React.useRef(null);
  const stages = [
    { label: "INITIALS", value: m.initials },
    { label: "REPLIES", value: m.replies, rate: m.replyRate },
    { label: "BOOKED", value: m.booked, rate: m.bookingRate },
    { label: "SHOWN", value: m.shown, rate: m.showRate },
    { label: "CLOSED", value: m.closed, rate: m.closeRate },
  ];
  React.useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const W = 760, H = 350, dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    const n = stages.length;
    const padL = 84, padR = 46, cy = 152, maxHH = 104;
    const xs = stages.map((_, i) => padL + (i * (W - padL - padR)) / (n - 1));
    const maxV = Math.max(stages[0].value, 1);
    const hh = stages.map((s) => Math.max(Math.sqrt(s.value / maxV) * maxHH, 4));
    const pass = stages.slice(1).map((s, i) => stages[i].value > 0 ? s.value / stages[i].value : 0);
    // half-height along x, linear-in-sqrt between stage anchors
    const hhAt = (x) => {
      if (x <= xs[0]) return hh[0];
      if (x >= xs[n - 1]) return hh[n - 1];
      let i = 0;
      while (x > xs[i + 1]) i++;
      const f = (x - xs[i]) / (xs[i + 1] - xs[i]);
      const e = f * f * (3 - 2 * f);
      return hh[i] + (hh[i + 1] - hh[i]) * e;
    };
    const hash = (a, b) => {
      let h = a * 374761393 + b * 668265263;
      h = (h ^ (h >> 13)) * 1274126177;
      return ((h ^ (h >> 16)) >>> 0) / 4294967295;
    };
    const P = 120;
    const parts = Array.from({ length: P }, (_, i) => ({
      i, x: padL + hash(i, 99) * (W - padL - padR), u: hash(i, 7) * 2 - 1,
      v: 0.55 + hash(i, 13) * 0.75, deadAt: -1, fall: 0,
    }));
    const boundaryFor = (p) => {
      for (let b = 0; b < pass.length; b++) if (hash(p.i, b * 31 + 3) > pass[b]) return b;
      return -1;
    };
    parts.forEach((p) => { p.b = boundaryFor(p); });
    const river = () => {
      // lost branches first, behind the stream
      for (let b = 0; b < pass.length; b++) {
        const lostFrac = 1 - pass[b];
        if (lostFrac <= 0.02) continue;
        const bx = xs[b + 1], bw = Math.max((hh[b] - hh[b + 1]) * 1.0, 2);
        const g = ctx.createLinearGradient(bx, cy, bx + 30, H);
        g.addColorStop(0, "rgba(58,58,58,0.5)");
        g.addColorStop(1, "rgba(58,58,58,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(bx - bw * 0.4, cy + hhAt(bx - bw * 0.4) - 1);
        ctx.bezierCurveTo(bx + 8, cy + hh[b] + 26, bx + 18, H - 26, bx + 22, H - 6);
        ctx.lineTo(bx + 40 + bw, H - 6);
        ctx.bezierCurveTo(bx + 30 + bw, H - 40, bx + bw * 0.8 + 10, cy + hh[b] + 10, bx + bw * 0.6, cy + hhAt(bx + bw * 0.6) - 1);
        ctx.closePath(); ctx.fill();
      }
      // the stream itself
      const g = ctx.createLinearGradient(padL, 0, W - padR, 0);
      g.addColorStop(0, "#2E2E2E");
      g.addColorStop(0.72, "#3A2426");
      g.addColorStop(1, "#7E0C0C");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(xs[0], cy - hh[0]);
      for (let x = xs[0]; x <= xs[n - 1]; x += 6) ctx.lineTo(x, cy - hhAt(x));
      ctx.lineTo(xs[n - 1], cy - hh[n - 1]);
      ctx.lineTo(xs[n - 1] + 26, cy - hh[n - 1] * 0.55);
      ctx.lineTo(xs[n - 1] + 26, cy + hh[n - 1] * 0.55);
      ctx.lineTo(xs[n - 1], cy + hh[n - 1]);
      for (let x = xs[n - 1]; x >= xs[0]; x -= 6) ctx.lineTo(x, cy + hhAt(x));
      ctx.closePath(); ctx.fill();
      // glow at the closed end
      const eg = ctx.createRadialGradient(xs[n - 1] + 8, cy, 2, xs[n - 1] + 8, cy, 60);
      eg.addColorStop(0, "rgba(225,20,20,0.35)");
      eg.addColorStop(1, "rgba(225,20,20,0)");
      ctx.fillStyle = eg;
      ctx.beginPath(); ctx.arc(xs[n - 1] + 8, cy, 60, 0, Math.PI * 2); ctx.fill();
    };
    const labels = () => {
      ctx.textAlign = "center";
      stages.forEach((s, i) => {
        ctx.fillStyle = "#7A7A7A";
        ctx.font = "10px 'Space Mono', monospace";
        ctx.fillText(s.label, xs[i], cy - hh[i] - (i === 0 ? 30 : 14) - (i % 2 === 1 ? 14 : 0));
        ctx.fillStyle = i === n - 1 ? "#E11414" : "#F4F2ED";
        ctx.font = "17px 'Archivo Black', sans-serif";
        ctx.fillText(fmtInt(s.value), xs[i], cy + hh[i] + 26 + (i % 2 === 1 ? 12 : 0));
        if (s.rate !== undefined) {
          ctx.fillStyle = "#B9B7B2";
          ctx.font = "10px 'Space Mono', monospace";
          ctx.fillText(fmtPct(s.rate), (xs[i] + xs[i - 1]) / 2, cy - Math.max(hhAt((xs[i] + xs[i - 1]) / 2), 10) - 10);
        }
        if (i > 0) {
          const lost = stages[i - 1].value - s.value;
          if (lost > 0) {
            ctx.fillStyle = "#4A4A4A";
            ctx.font = "9px 'Space Mono', monospace";
            ctx.fillText("-" + fmtInt(lost), xs[i] + 30, H - 12);
          }
        }
      });
    };
    let raf = null;
    const frame = () => {
      ctx.clearRect(0, 0, W, H);
      river();
      // particles
      for (const p of parts) {
        p.x += p.v * (REDUCED ? 0 : 1.1);
        const bx = p.b >= 0 ? xs[p.b + 1] : Infinity;
        let y, alpha = 0.75;
        if (p.x > bx) {
          p.fall += 0.045;
          y = cy + hhAt(bx) * p.u * 0.8 + (p.x - bx) * (0.9 + p.fall);
          alpha = Math.max(0.55 - (p.x - bx) / 90, 0);
          ctx.fillStyle = "rgba(122,122,122," + alpha.toFixed(2) + ")";
        } else {
          y = cy + hhAt(p.x) * p.u * 0.8;
          const t = (p.x - padL) / (W - padL - padR);
          ctx.fillStyle = "rgba(" + (t > 0.7 ? "255,90,60" : "200,160,150") + "," + alpha.toFixed(2) + ")";
        }
        if (p.x > W - padR + 24 || y > H || alpha <= 0) {
          p.x = padL; p.u = Math.random() * 2 - 1; p.fall = 0;
          p.i = (p.i + P) % 100000; p.b = boundaryFor(p);
        }
        ctx.beginPath(); ctx.arc(p.x, y, 1.4, 0, Math.PI * 2); ctx.fill();
      }
      labels();
    };
    const start = () => {
      if (REDUCED) { frame(); return; }
      const loop = () => { frame(); raf = requestAnimationFrame(loop); };
      loop();
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
    else start();
    return () => { if (raf) cancelAnimationFrame(raf); };
  }, [m.initials, m.replies, m.booked, m.shown, m.closed]);
  return (
    <div>
      <canvas ref={ref} style={{ width: "100%", display: "block" }} aria-label="funnel flow" />
      <div className="note">Every dot is volume moving through the funnel; the gray fallout at each boundary is the drop-off, drawn to scale on a square root height. Counts and rates are exact.</div>
    </div>
  );
}

function Gauge({ label, value, floor, strong, sample, sampleNeed, sampleUnit }) {
  const R = 40, CIRC = 2 * Math.PI * R;
  const low = sample < sampleNeed;
  const frac = Math.max(0.005, Math.min(value / strong, 1));
  const tickAngle = Math.min(floor / strong, 1) * 360;
  const col = low ? "#3A3A3A" : value >= floor ? C.red : "#C9A227";
  // Sweep in from zero on mount.
  const [on, setOn] = React.useState(REDUCED);
  React.useEffect(() => {
    const r = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(r);
  }, []);
  return (
    <div className="gauge">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={R} fill="none" stroke="#1E1E1E" strokeWidth="8" />
        <circle cx="50" cy="50" r={R} fill="none" stroke={col} strokeWidth="8"
          strokeDasharray={(on ? frac : 0.005) * CIRC + " " + CIRC} strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.1s cubic-bezier(0.22,1,0.36,1)" }}
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
          <FlowFunnel m={m} />
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
