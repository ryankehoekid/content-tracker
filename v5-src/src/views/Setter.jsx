import React from "react";
import { DAY_MS } from "../core/config.js";
import { fmtInt, fmtNum, fmtPct, safeDiv, dayKey, shortDate } from "../core/format.js";
import { computeStreaks, computeMilestones, weeklySums } from "../core/metrics.js";
import { Reveal, LineChart } from "../ui/atoms.jsx";

const C = { red: "#E11414", teal: "#3EC1BB", steel: "#5A5A5A" };

function FieldLog({ daily, replies, capacity }) {
  const rByDay = new Map();
  replies.forEach((r) => {
    const k = dayKey(r.date);
    rByDay.set(k, (rByDay.get(k) || 0) + 1);
  });
  const anyCmts = daily.some((r) => r.comments > 0);
  const flagsOf = (r) => {
    const f = [];
    if (capacity > 0 && r.initials < capacity * 0.5) f.push("volume under half target");
    if (anyCmts && r.comments === 0) f.push("no comments logged");
    return f;
  };
  const rows = daily.slice(-9).reverse();
  return (
    <div className="card">
      <h2 className="sec">Field Log, latest days</h2>
      <div className="flog-head">
        <span>Date</span><span>Init</span><span>FUps</span><span>Cmts</span><span>Repl</span><span>Note</span>
      </div>
      {rows.map((r, i) => (
        <div className="flog-row" key={i}>
          <span className={"fd" + (flagsOf(r).length ? " warn" : "")}
            title={flagsOf(r).join(", ") || undefined}>{shortDate(r.date)}{flagsOf(r).length > 0 && " ⚠"}</span>
          <span>{fmtInt(r.initials)}</span>
          <span>{fmtInt(r.followUps)}</span>
          <span>{r.comments > 0 ? fmtInt(r.comments) : "·"}</span>
          <span>{rByDay.get(dayKey(r.date)) || "·"}</span>
          <span className={"fnote" + (r.notes && r.notes.length > 1 ? " alert" : "")} title={r.notes}>
            {r.notes && r.notes.length > 1 ? r.notes : "·"}
          </span>
        </div>
      ))}
      {rows.length === 0 && <div className="note">Logged days land here.</div>}
      <div className="note">Notes come straight from the EOD form. Anything written there is an operational flag worth reading.</div>
    </div>
  );
}

/* Consistency calendar: 16 weeks of working days (Mon to Sat), colored by
   initials vs capacity. Unlogged working days inside the tracking window
   show as misses. Consistency becomes something you can see. */
function Heatmap({ daily, capacity }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const byDay = new Map(daily.map((r) => [dayKey(r.date), r]));
  const firstLogged = daily.length ? daily[0].date : null;
  const dow = (today.getDay() + 6) % 7; // 0 = Monday
  const thisMon = new Date(today.getTime() - dow * DAY_MS);
  const weeks = [];
  for (let w = 15; w >= 0; w--) {
    const col = [];
    for (let d = 0; d < 6; d++) { // Mon..Sat
      const dt = new Date(thisMon.getTime() - w * 7 * DAY_MS + d * DAY_MS);
      col.push(dt > today ? null : dt);
    }
    weeks.push(col);
  }
  const cell = (dt) => {
    if (!dt) return { bg: "transparent", title: "" };
    const row = byDay.get(dayKey(dt));
    const inWindow = firstLogged && dt >= firstLogged;
    if (!row) {
      return inWindow
        ? { bg: "#241A08", title: shortDate(dt) + ": not logged", miss: true }
        : { bg: "#141414", title: shortDate(dt) };
    }
    const ratio = capacity > 0 ? Math.min(row.initials / capacity, 1) : 0;
    const a = 0.16 + 0.84 * ratio;
    return { bg: "rgba(225,20,20," + a.toFixed(2) + ")",
      title: shortDate(dt) + ": " + fmtInt(row.initials) + " initials, " + fmtInt(row.followUps) + " follow ups" };
  };
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
        <h2 className="sec" style={{ margin: 0 }}>Consistency, 16 weeks</h2>
        <span className="label">color = initials vs {fmtInt(capacity)}</span>
      </div>
      <div className="hmap" style={{ marginTop: 12 }}>
        {weeks.map((col, i) => (
          <div className="hmap-col" key={i}>
            {col.map((dt, j) => {
              const c = cell(dt);
              return <span key={j} className={"hmap-cell" + (c.miss ? " miss" : "")} style={{ background: c.bg }} title={c.title} />;
            })}
          </div>
        ))}
      </div>
      <div className="note">Mondays on top, Saturdays on the bottom, Sundays off. Amber cells are working days inside the tracking window with no EOD row.</div>
    </div>
  );
}

function DayScore({ daily, capacity }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const byDay = new Map(daily.map((r) => [dayKey(r.date), r]));
  const todayRow = byDay.get(dayKey(today));
  const yRow = byDay.get(dayKey(new Date(today.getTime() - DAY_MS)));
  const row = todayRow || yRow;
  const label = todayRow ? "Today" : "Latest logged day";
  if (!row) return null;
  const checks = [
    { name: "Initials at target", ok: row.initials >= capacity * 0.9, detail: fmtInt(row.initials) + " of " + fmtInt(capacity) },
    { name: "Comments matched to initials", ok: row.comments >= row.initials * 0.85, detail: fmtInt(row.comments) + " comments" },
    { name: "Ladder worked", ok: row.followUps > 0, detail: fmtInt(row.followUps) + " follow ups" },
    { name: "EOD logged", ok: true, detail: "form in" },
  ];
  const score = checks.filter((c) => c.ok).length;
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h2 className="sec" style={{ margin: 0 }}>Day Score, {label.toLowerCase()}</h2>
        <span className="display" style={{ fontSize: 22, color: score === checks.length ? C.red : "#F4F2ED" }}>{score}/{checks.length}</span>
      </div>
      <div style={{ marginTop: 12 }}>
        {checks.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "baseline", padding: "7px 0", borderBottom: "1px solid #191919" }}>
            <span className="mono" style={{ fontSize: 11, color: c.ok ? "#3EC1BB" : "#C9A227", width: 40 }}>{c.ok ? "[OK]" : "[..]"}</span>
            <span style={{ fontSize: 13 }}>{c.name}</span>
            <span className="mono" style={{ marginLeft: "auto", fontSize: 10, color: "#7A7A7A" }}>{c.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Setter({ daily, replies, calc }) {
  const s = computeStreaks(daily, calc.capacity);
  const events = computeMilestones(daily, replies);
  const ws = weeklySums(daily, replies);
  const series = [
    { key: "initials", color: C.red, area: true, data: daily.map((r) => ({ x: r.date, y: r.initials })) },
    { key: "comments", color: C.teal, data: daily.map((r) => ({ x: r.date, y: r.comments })) },
    { key: "follow ups", color: C.steel, data: daily.map((r) => ({ x: r.date, y: r.followUps })) },
  ];
  return (
    <div className="grid">
      <div className="two-col">
        <div className="grid">
          <Reveal className="card">
            <h2 className="sec">Daily Output</h2>
            <LineChart series={series} height={240} />
            <div className="legend">
              <span className="leg"><i style={{ background: C.red }} />initials</span>
              <span className="leg"><i style={{ background: C.teal }} />comments</span>
              <span className="leg"><i style={{ background: C.steel }} />follow ups</span>
            </div>
          </Reveal>
          <Reveal delay={40}><Heatmap daily={daily} capacity={calc.capacity} /></Reveal>
        </div>
        <div className="grid">
          <Reveal delay={60}><DayScore daily={daily} capacity={calc.capacity} /></Reveal>
          <Reveal delay={120}>
            <div className="card">
              <h2 className="sec">Streaks</h2>
              <div className="streaks">
                <div>
                  <div className="label">Log streak</div>
                  <div className="display sv" style={s.cur >= 6 ? { color: C.red } : null}>{s.cur}d</div>
                  <div className="hdetail">best ever {s.best}d</div>
                </div>
                <div>
                  <div className="label">Days at target volume</div>
                  <div className="display sv" style={s.vol >= 3 ? { color: C.red } : null}>{s.vol}d</div>
                  <div className="hdetail">at 90% of {fmtInt(calc.capacity)}</div>
                </div>
                <div>
                  <div className="label">This week</div>
                  <div className="display sv">{fmtInt(ws.initials.cur)}</div>
                  <div className="hdetail">initials, vs {fmtInt(ws.initials.prev)} last wk</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="two-col">
        <Reveal><FieldLog daily={daily} replies={replies} capacity={calc.capacity} /></Reveal>
        <Reveal delay={60}>
          <div className="card">
            <h2 className="sec">Milestones</h2>
            {events.length === 0 && <div className="note">Milestones land here as they happen.</div>}
            {events.map((e, i) => (
              <div className="ev" key={i}>
                <span className="ev-date">{shortDate(e.date)}</span>
                <span className="ev-label">{e.label}</span>
                {e.who && <span className="ev-who">{e.who}</span>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
