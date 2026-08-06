import React, { useState, useMemo } from "react";
import { KPI, DAY_MS, FALLBACK_REPLY_RATE, FALLBACK_BOOKING_RATE } from "../core/config.js";
import { fmtInt, fmtEuro, fmtEuroK, fmtPct, fmtNum, safeDiv, dayKey, shortDate } from "../core/format.js";
import {
  healthZones, computeFindings, computeLevers, weekOverWeek, weeklySums,
  computeProjection, forecastBands, cashModel,
} from "../core/metrics.js";
import { usePublished } from "../core/useData.js";
import { CountUp, Tile, TypeOn, Reveal } from "../ui/atoms.jsx";
import PalantirOrb from "../orb/PalantirOrb.jsx";

const MONTHS = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];

function Hero({ daily, replies, payments, m, calc }) {
  const cm = cashModel(replies, payments);
  const bands = useMemo(() => forecastBands(daily, replies, m, calc, cm.mtd), [daily, replies, m, calc, cm.mtd]);
  const goalPct = Math.min(safeDiv(cm.mtd, calc.goal), 1);
  const now = new Date();
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const monthFrac = now.getDate() / monthEnd;
  const rr = calc.replyRate != null ? calc.replyRate : m.replyRate > 0 ? m.replyRate : FALLBACK_REPLY_RATE;
  const br = calc.bookingRate != null ? calc.bookingRate : m.bookingRate > 0 ? m.bookingRate : FALLBACK_BOOKING_RATE;
  const initialsNeeded = safeDiv(safeDiv(safeDiv(safeDiv(safeDiv(calc.goal, calc.aov), calc.closeRate), calc.showRate), br), rr);
  const weeks = safeDiv(safeDiv(initialsNeeded, calc.capacity), calc.sendDays / 4.345);
  const timeToGoal = !(calc.capacity > 0) ? "set capacity"
    : weeks < 1 ? fmtNum(weeks * 7, 0) + " days"
    : weeks < 9 ? fmtNum(weeks, 1) + " wks"
    : fmtNum(weeks / 4.345, 1) + " mo";
  // Beam scale runs to the goal or the P90, whichever is larger, so every
  // marker always lands on the bar.
  const scale = Math.max(calc.goal, bands.p90, 1);
  const X = (v) => Math.min(v / scale, 1) * 100 + "%";
  const bookLow = m.replies < 10;
  const bookBad = !bookLow && m.bookingRate < KPI.bookingRate[0];
  return (
    <Reveal className="card herostrip">
      <div className="hs-ghost display" aria-hidden="true">{MONTHS[now.getMonth()].slice(0, 3)}</div>
      <div className="hs-main">
        <div className="label">Cash collected · {MONTHS[now.getMonth()].toLowerCase()}</div>
        <div className="display hs-num"><CountUp value={cm.mtd} format={fmtEuro} /></div>
        <div className="beam" title="the month, drawn to scale">
          <span className="beam-fill" style={{ width: X(cm.mtd) }} />
          <span className="beam-goal" style={{ left: X(calc.goal) }} />
          <span className="beam-pace" style={{ left: monthFrac * 100 + "%" }} title="where the month is" />
          <span className="beam-band" style={{ left: X(bands.p10), width: "calc(" + X(bands.p90) + " - " + X(bands.p10) + ")" }} />
          <span className="beam-p50" style={{ left: X(bands.p50) }} />
        </div>
        <div className="beam-legend">
          <span><i className="bl-fill" />banked {fmtPct(goalPct, 0)}</span>
          <span><i className="bl-band" />forecast P10-P90</span>
          <span><i className="bl-p50" />P50 {fmtEuroK(bands.p50)}</span>
          <span><i className="bl-goal" />goal {fmtEuroK(calc.goal)}</span>
          <span><i className="bl-pace" />month pace</span>
        </div>
      </div>
      <div className="hs-rail">
        <div className="hs-stat">
          <div className="label">Projected month end</div>
          <div className="display hs-sv"><CountUp value={bands.p50} format={fmtEuro} /></div>
          <div className="hdetail">{fmtEuroK(bands.p10)} to {fmtEuroK(bands.p90)}, 500 runs</div>
        </div>
        <div className="hs-stat">
          <div className="label">Booking rate</div>
          <div className={"display hs-sv" + (bookBad ? " bad" : "")}>{bookLow ? "--" : fmtPct(m.bookingRate)}</div>
          <div className="hdetail">{bookLow
            ? "needs 10 replies, at " + fmtInt(m.replies)
            : fmtInt(m.booked) + " of " + fmtInt(m.replies) + " replies · floor " + fmtPct(KPI.bookingRate[0], 0)}</div>
        </div>
        <div className="hs-stat">
          <div className="label">Time to goal</div>
          <div className="display hs-sv">{timeToGoal}</div>
          <div className="hdetail">at {fmtInt(calc.capacity)} a day, live rates</div>
        </div>
        <div className="hs-stat">
          <div className="label">All time</div>
          <div className="display hs-sv"><CountUp value={cm.all} format={fmtEuro} /></div>
          <div className="hdetail">{fmtEuro(m.dealValue)} signed{cm.source === "payments" ? " · payments tab" : ""}</div>
        </div>
      </div>
    </Reveal>
  );
}

function Tiles({ daily, replies, m }) {
  const wow = weekOverWeek(daily, replies);
  const ws = weeklySums(daily, replies);
  const spark = useMemo(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dByDay = new Map(daily.map((r) => [dayKey(r.date), r]));
    const rByDay = new Map();
    replies.forEach((r) => {
      const k = dayKey(r.date);
      rByDay.set(k, (rByDay.get(k) || { n: 0, booked: 0, cash: 0 }));
      const o = rByDay.get(k);
      o.n++; if (r.booked) o.booked++; o.cash += r.cash;
    });
    const out = { initials: [], followUps: [], comments: [], replies: [], booked: [], cash: [] };
    for (let i = 13; i >= 0; i--) {
      const k = dayKey(new Date(today.getTime() - i * DAY_MS));
      const d = dByDay.get(k), rp = rByDay.get(k);
      out.initials.push(d ? d.initials : 0);
      out.followUps.push(d ? d.followUps : 0);
      out.comments.push(d ? d.comments : 0);
      out.replies.push(rp ? rp.n : 0);
      out.booked.push(rp ? rp.booked : 0);
      out.cash.push(rp ? rp.cash : 0);
    }
    return out;
  }, [daily, replies]);
  const t = (o) => [["this wk", fmtInt(o.cur)], ["last wk", fmtInt(o.prev)]];
  return (
    <div className="tiles">
      {/* Each stage carries its own rate: the rate under a tile is always
          "how this stage converts from the one before it". */}
      <Tile label="Initials" num={m.initials} format={fmtInt} sub={fmtInt(m.touches) + " total touches"} delta={wow.initials} spark={spark.initials} tip={t(ws.initials)} />
      <Tile label="Follow ups" num={m.followUps} format={fmtInt} sub={fmtNum(safeDiv(m.followUps, m.initials)) + " per initial"} delta={wow.followUps} spark={spark.followUps} tip={t(ws.followUps)} />
      <Tile label="Comments" num={m.comments} format={fmtInt} sub={fmtPct(m.commentCoverage, 0) + " of initials"} delta={wow.comments} spark={spark.comments} tip={t(ws.comments)} />
      <Tile label="Replies" num={m.replies} format={fmtInt} sub={fmtPct(m.replyRate) + " reply rate"} delta={wow.replies} spark={spark.replies} tip={t(ws.replies)} />
      <Tile label="Booked" num={m.booked} format={fmtInt} sub={fmtPct(m.bookingRate) + " booking rate"} delta={wow.booked} spark={spark.booked} tip={t(ws.booked)} />
      <Tile label="Shown" num={m.shown} format={fmtInt} sub={fmtPct(m.showRate) + " show rate"} />
      <Tile label="Closed" num={m.closed} format={fmtInt} red sub={fmtPct(m.closeRate) + " close rate" + (m.avgDeal > 0 ? " · " + fmtEuro(m.avgDeal) + " avg" : "")} />
      <Tile label="Cash" num={m.cash} format={fmtEuro} red sub={fmtEuro(m.outstanding) + " outstanding"} delta={wow.cash} spark={spark.cash} tip={t(ws.cash)} />
    </div>
  );
}

/* Ask the stone: a question box wired to /api/ask, a serverless function
   that reads the live sheets plus the doctrine and answers through the
   Anthropic API. Degrades to a plain note when the function is not set up. */
function AskConsole() {
  const [q, setQ] = useState("");
  const [thread, setThread] = useState([]);
  const [busy, setBusy] = useState(false);
  const endRef = React.useRef(null);

  const send = async (question, keyOverride) => {
    try {
      const r = await fetch("/api/ask", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          question,
          key: keyOverride || localStorage.getItem("palantirKey") || undefined,
        }),
      });
      if (r.status === 401 && !keyOverride) {
        const k = window.prompt("This stone is keyed. Enter the ask key:");
        if (k) { localStorage.setItem("palantirKey", k); return send(question, k); }
        return "The stone stays dark without the key.";
      }
      const data = await r.json().catch(() => ({}));
      if (r.status === 503) return "The stone is not wired yet. In Vercel, set ANTHROPIC_API_KEY (and PALANTIR_DOCTRINE) to switch it on.";
      if (!r.ok || !data.answer) return "The stone clouded over (" + (data.error || r.status) + "). Ask again.";
      return data.answer;
    } catch {
      return "The stone is unreachable. Check the connection and ask again.";
    }
  };

  const ask = async () => {
    const question = q.trim();
    if (!question || busy) return;
    setQ("");
    setBusy(true);
    setThread((t) => [...t, { role: "q", text: question }]);
    const answer = await send(question);
    setThread((t) => [...t, { role: "a", text: answer }]);
    setBusy(false);
    requestAnimationFrame(() => endRef.current && endRef.current.scrollIntoView({ block: "nearest" }));
  };

  return (
    <div className="askc">
      <div className="ask-thread">
        {thread.length === 0 && (
          <div className="note">Ask the stone anything the sheets can answer. It reads the live Daily Log, Replies, Payments and lead scheduler, holds the doctrine, and cites its numbers. Try: "why is booking rate below floor" or "what happens to the month if we hold this pace".</div>
        )}
        {thread.map((line, i) => (
          <div key={i} className={"ask-line " + line.role}>
            <span className="ask-tag">{line.role === "q" ? "> RYAN" : "< STONE"}</span>
            {line.role === "a" && i === thread.length - 1 && !busy
              ? <TypeOn text={line.text} />
              : <span className="ask-text">{line.text}</span>}
          </div>
        ))}
        {busy && <div className="ask-line a"><span className="ask-tag">{"< STONE"}</span><span className="ask-wait">the glass is turning<span className="cursor">_</span></span></div>}
        <div ref={endRef} />
      </div>
      <div className="ask-row">
        <input
          className="ask-input" type="text" value={q} maxLength={600}
          placeholder="ask the stone"
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") ask(); e.stopPropagation(); }}
        />
        <button className="btn ask-send" onClick={ask} disabled={busy}>ASK</button>
      </div>
    </div>
  );
}

function Palantir({ daily, replies, leads, m, calc, flare }) {
  const zones = healthZones(daily, replies, calc.capacity);
  const fr = computeFindings(daily, replies, calc.capacity, m);
  const levers = computeLevers(daily, replies, leads, m, calc);
  const [tab, setTab] = useState("alerts");
  const [dot, setDot] = useState(null);
  const [openAlert, setOpenAlert] = useState(0);
  const [openDir, setOpenDir] = useState(null);
  const [openLog, setOpenLog] = useState(null);
  const [openLever, setOpenLever] = useState(null);
  const [speak, setSpeak] = useState(false);
  const brief = usePublished("overseer");
  const memo = usePublished("memo");
  const dailyBrief = usePublished("brief");
  const callsDoc = usePublished("calls");
  const [openCall, setOpenCall] = useState(null);

  const reds = fr.findings.filter((f) => f.sev === "r").length + zones.filter((z) => z.zone === "r").length;
  const ambers = fr.findings.filter((f) => f.sev === "a").length + zones.filter((z) => z.zone === "a").length;
  const agitation = reds > 0 ? 1 : ambers > 0 ? 0.55 : 0.15;
  const ZW = { g: "OK", a: "WARN", r: "FAIL", n: "NULL" };
  const maxL = levers.length ? levers[0].value : 1;
  const top = levers[0];

  const tabBtn = (id, label) => (
    <button key={id} className={"btn" + (tab === id ? " active" : "")} onClick={() => setTab(id)}>{label}</button>
  );
  const dirCards = (sections, openIdx, setOpen, word) => (sections || []).map((s, i) => (
    <div className="dir" key={i} onClick={() => setOpen(openIdx === i ? null : i)}>
      <div className="dir-title"><span className="dnum">{word} {String(i + 1).padStart(2, "0")}</span> // {s.title.toUpperCase()}</div>
      {openIdx === i && <div className="dir-body">{s.text}</div>}
    </div>
  ));

  return (
    <Reveal className="pal">
      <div className="pal-head">
        <h2 className="sec" style={{ margin: 0 }}>Palantir</h2>
        <span className="sysdots">
          <span className="label">sys</span>
          {zones.map((z, i) => (
            <button key={i} className={"sysdot " + z.zone} title={z.name}
              onClick={() => setDot(dot === i ? null : i)} aria-label={z.name} />
          ))}
        </span>
        <span className="label">cash collected basis</span>
      </div>
      {dot !== null && (
        <div className="dot-detail">{zones[dot].name.toUpperCase()} [{ZW[zones[dot].zone]}] · {zones[dot].detail}</div>
      )}
      <div className="pal-grid">
        <div>
          <div className="orb-stage speakable" onClick={() => setSpeak((v) => !v)}
            title="tap the stone" role="button" aria-label="ask the stone">
            <PalantirOrb agitation={agitation} flare={flare} />
            {speak ? (
              <div className="orb-speak" key={String(speak)}>
                <TypeOn text={fr.findings.length
                  ? fr.findings[0].title + ". " + fr.findings[0].lever
                  : brief ? brief.headline
                  : "All quiet in the glass. Push volume, keep the ladder full."} />
              </div>
            ) : top && (
              <div className="orb-text">
                <div className="display ov">{fmtEuroK(top.value)}</div>
                <div className="ol">{top.per === "mo" ? "per month · top lever" : "one time · top lever"}</div>
                <div className="on">{top.name}</div>
              </div>
            )}
          </div>
          <div className="lbars">
            {levers.map((l, i) => (
              <div className="lbar" key={i} onClick={() => setOpenLever(openLever === i ? null : i)}>
                <div className="lbar-top">
                  <span className="lever-rank">{String(i + 1).padStart(2, "0")}</span>
                  <span className="lbar-name">{l.name}</span>
                  <span className="lbar-val display">{fmtEuroK(l.value)}<span className="lever-per"> {l.per === "mo" ? "/mo" : "1x"}</span></span>
                </div>
                <div className="lbar-track">
                  <span className="lbar-fill" style={{ width: Math.max((l.value / maxL) * 100, 4) + "%", boxShadow: i === 0 ? "0 0 10px rgba(225,20,20,0.55)" : "none" }} />
                </div>
                {openLever === i && <div className="lbar-detail">{l.detail} · basis: {l.basis}</div>}
              </div>
            ))}
          </div>
          <div className="note">Levers priced independently; they overlap and never sum. Baselines assumed until measured. Tap a lever for detail.</div>
        </div>
        <div className="console">
          <div className="ptabs">
            {tabBtn("alerts", "Alerts" + (fr.findings.length ? " · " + fr.findings.length : ""))}
            {tabBtn("ask", "Ask")}
            {tabBtn("daily", "Daily")}
            {tabBtn("calls", "Calls" + (callsDoc && callsDoc.calls && callsDoc.calls.length ? " · " + callsDoc.calls.length : ""))}
            {tabBtn("brief", "Brief")}
            {tabBtn("log", "Log")}
          </div>
          {tab === "ask" && <AskConsole />}
          {tab === "calls" && (callsDoc && callsDoc.calls && callsDoc.calls.length ? (
            <div>
              <div className="label" style={{ marginBottom: 9 }}>Call intelligence · updated {callsDoc.updated}</div>
              {callsDoc.calls.map((c, i) => (
                <div className="dir" key={i} onClick={() => setOpenCall(openCall === i ? null : i)}>
                  <div className="dir-title">
                    <span className="dnum">CALL {String(c.date || "").toUpperCase()}</span> // {String(c.title || "").toUpperCase()}
                    {c.score != null && <span className="call-score">{c.score}/10</span>}
                  </div>
                  {openCall === i && (
                    <div className="dir-body">{c.read}{c.fix ? " Biggest fix: " + c.fix : ""}</div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="note">No calls read yet. Drop the transcript TEXT (a Fathom transcript pasted into a Google Doc, or the exported .docx) into a Drive folder named KEHOEGROUP Calls, or name the doc starting with CALL. The morning run reads every new one: objections, doctrine compliance, a score out of 10 and the single biggest fix land here. Video files alone cannot be read; it needs the transcript.</div>
          ))}
          {tab === "alerts" && (
            <div>
              {fr.findings.length === 0 && (
                <div className="brief-head">No active alerts. Push volume, keep the ladder full.</div>
              )}
              {fr.findings.map((f, i) => (
                <div className="alert-line" key={i}>
                  <div className="alert-head" onClick={() => setOpenAlert(openAlert === i ? null : i)}>
                    <span className={f.sev === "r" ? "sevr" : "seva"}>&gt;&gt; ALERT {String(i + 1).padStart(2, "0")}</span>
                    <span>{f.title.toUpperCase()}</span>
                    <span style={{ marginLeft: "auto", color: "#7A7A7A" }}>{openAlert === i ? "−" : "+"}</span>
                  </div>
                  {openAlert === i && (
                    <div className="alert-body">{f.evidence}<div className="diag-lever"><span>Lever</span> {f.lever}</div></div>
                  )}
                </div>
              ))}
              {fr.waiting.length > 0 && (
                <div className="note">On mute until the sample can carry it: {fr.waiting.join("; ")}.</div>
              )}
            </div>
          )}
          {tab === "daily" && (dailyBrief ? (
            <div>
              <div className="label" style={{ marginBottom: 9 }}>Daily brief · {dailyBrief.date}</div>
              <div className="brief-head"><TypeOn text={dailyBrief.headline} /></div>
              {dirCards(dailyBrief.sections, openDir, setOpenDir, "NOTE")}
            </div>
          ) : <div className="note">The daily brief lands here every weekday morning.</div>)}
          {tab === "brief" && (brief ? (
            <div>
              <div className="label" style={{ marginBottom: 9 }}>Palantir brief · {brief.date}</div>
              <div className="brief-head"><TypeOn text={brief.headline} /></div>
              {dirCards(brief.sections, openDir, setOpenDir, "DIRECTIVE")}
            </div>
          ) : <div className="note">No brief published yet.</div>)}
          {tab === "log" && (memo ? (
            <div>
              <div className="label" style={{ marginBottom: 9 }}>Weekly memo · {memo.week}</div>
              <div className="brief-head">{memo.headline}</div>
              {dirCards(memo.sections, openLog, setOpenLog, "ENTRY")}
              {(memo.archive || []).map((old, k) => (
                <div className="dir" key={"a" + k} onClick={() => setOpenLog(openLog === "a" + k ? null : "a" + k)}>
                  <div className="dir-title"><span className="dnum">ARCHIVE</span> // {String(old.week || old.date || "").toUpperCase()}</div>
                  {openLog === "a" + k && <div className="dir-body">{old.headline}</div>}
                </div>
              ))}
            </div>
          ) : <div className="note">No memo published yet.</div>)}
        </div>
      </div>
    </Reveal>
  );
}

export default function Command({ daily, replies, leads, payments, m, calc, flare }) {
  return (
    <div>
      <Hero daily={daily} replies={replies} payments={payments} m={m} calc={calc} />
      <Tiles daily={daily} replies={replies} m={m} />
      <Palantir daily={daily} replies={replies} leads={leads} m={m} calc={calc} flare={flare} />
    </div>
  );
}
