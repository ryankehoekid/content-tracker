import React, { useState } from "react";
import { DAY_MS } from "../core/config.js";
import { fmtInt, fmtNum, fmtPct, safeDiv, dayKey, shortDate } from "../core/format.js";
import { computeStreaks, computeMilestones, weeklySums, upcomingCalls } from "../core/metrics.js";
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

/* The morning read: what has to happen today, in order. Computed straight
   from the sheets so it is never stale and never someone's opinion. */
function MarchingOrders({ daily, replies, capacity }) {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const byDay = new Map(daily.map((r) => [dayKey(r.date), r]));
  const todayRow = byDay.get(dayKey(today));
  const sentToday = todayRow ? todayRow.initials : 0;
  const remaining = Math.max(capacity - sentToday, 0);

  const calls = upcomingCalls(replies).filter((r) =>
    r.callDate && (r.callDate - today) / DAY_MS < 2);

  // Open conversations: replied, not booked, not dead. Oldest first; a lead
  // marked Talking is being worked, so untagged ones outrank it.
  const open = replies
    .filter((r) => !r.booked && !r.dead && !r.closed)
    .sort((a, b) => {
      const at = a.status.toLowerCase() === "talking", bt = b.status.toLowerCase() === "talking";
      if (at !== bt) return at ? 1 : -1;
      return a.date - b.date;
    });

  const orders = [];
  if (calls.length) {
    orders.push({
      title: "Calls " + (calls.some((r) => dayKey(r.callDate) === dayKey(today)) ? "today" : "tomorrow"),
      text: calls.map((r) => r.handle + " " + shortDate(r.callDate)).join(" · ") + ". Confirm each one this morning; a confirmed call shows.",
    });
  }
  if (open.length) {
    const names = open.slice(0, 5).map((r) => {
      const days = Math.round((today - r.date) / DAY_MS);
      return r.handle + (days > 0 ? " (" + days + "d)" : "");
    });
    orders.push({
      title: "Work the " + fmtInt(open.length) + " open conversation" + (open.length === 1 ? "" : "s"),
      text: names.join(" · ") + (open.length > 5 ? " and " + fmtInt(open.length - 5) + " more" : "") + ". Oldest first; every open thread is money already paid for.",
    });
  }
  orders.push({
    title: remaining > 0 ? fmtInt(remaining) + " initials to target" : "Volume target hit",
    text: remaining > 0
      ? (sentToday > 0 ? fmtInt(sentToday) + " logged so far today. " : "") + "Full ladder beside it: follow ups first, then fresh sends, comment before each initial."
      : "Target volume is in. Spend the extra minutes on the reply queue, not on more sends.",
  });

  return (
    <div className="card orders">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
        <h2 className="sec" style={{ margin: 0 }}>Marching Orders</h2>
        <span className="label">{shortDate(today)} · straight from the sheets</span>
      </div>
      <div style={{ marginTop: 10 }}>
        {orders.map((o, i) => (
          <div className="order" key={i}>
            <span className="order-n display">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="order-t">{o.title}</div>
              <div className="order-x">{o.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* One-tap logging: posts through /api/log to the sheet's Apps Script.
   The sheet stays the source of truth; this just removes the friction. */
const QL_MODES = [
  { id: "reply", label: "+ Reply" },
  { id: "booking", label: "Booked" },
  { id: "payment", label: "Cash in" },
  { id: "status", label: "Status" },
];

function QuickLog() {
  const [mode, setMode] = useState("reply");
  const [handle, setHandle] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("Talking");
  const [notes, setNotes] = useState("");
  const [pin, setPin] = useState(localStorage.getItem("logPin") || "");
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (busy) return;
    if (!handle.trim()) { setMsg({ bad: true, text: "Needs a handle." }); return; }
    if (mode === "payment" && !(Number(amount) > 0)) { setMsg({ bad: true, text: "Needs an amount." }); return; }
    if (!pin) { setMsg({ bad: true, text: "Set the pin first (same as the sheet secret)." }); return; }
    localStorage.setItem("logPin", pin);
    setBusy(true); setMsg(null);
    try {
      const r = await fetch("/api/log", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          pin, action: mode, handle: handle.trim(), notes: notes.trim(),
          amount: Number(amount) || 0,
          status: mode === "status" ? status : "",
        }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.status === 503) setMsg({ bad: true, text: "Not wired yet: set SHEET_WEBHOOK_URL and LOG_PIN in Vercel." });
      else if (r.status === 401) setMsg({ bad: true, text: "Wrong pin." });
      else if (!r.ok || !data.ok) setMsg({ bad: true, text: "Sheet said no (" + (data.error || r.status) + ")." });
      else {
        setMsg({ text: "Logged. The sheet has it." });
        setHandle(""); setAmount(""); setNotes("");
      }
    } catch {
      setMsg({ bad: true, text: "Could not reach the relay." });
    }
    setBusy(false);
  };

  return (
    <div className="card">
      <h2 className="sec">Quick Log</h2>
      <div className="ql-modes">
        {QL_MODES.map((m) => (
          <button key={m.id} className={"btn" + (mode === m.id ? " active" : "")} onClick={() => { setMode(m.id); setMsg(null); }}>{m.label}</button>
        ))}
      </div>
      <div className="ql-form">
        <input className="ask-input" placeholder="@handle" value={handle} maxLength={80}
          onChange={(e) => setHandle(e.target.value)} />
        {mode === "payment" && (
          <input className="ask-input" placeholder="amount EUR" inputMode="decimal" value={amount}
            onChange={(e) => setAmount(e.target.value)} />
        )}
        {mode === "status" && (
          <select className="ask-input" value={status} onChange={(e) => setStatus(e.target.value)}>
            {["Talking", "Waiting", "Dead"].map((s) => <option key={s}>{s}</option>)}
          </select>
        )}
        <input className="ask-input" placeholder="note (optional)" value={notes} maxLength={200}
          onChange={(e) => setNotes(e.target.value)} />
        <div className="ql-row">
          <input className="ask-input ql-pin" placeholder="pin" type="password" value={pin}
            onChange={(e) => setPin(e.target.value)} />
          <button className="btn ask-send" onClick={submit} disabled={busy}>{busy ? "…" : "LOG IT"}</button>
        </div>
      </div>
      {msg && <div className={"note" + (msg.bad ? " ql-bad" : "")}>{msg.text}</div>}
      <div className="note">Writes straight to the Replies and Payments tabs. Bookings made through Calendly log themselves.</div>
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
        <Reveal><MarchingOrders daily={daily} replies={replies} capacity={calc.capacity} /></Reveal>
        <Reveal delay={40}><QuickLog /></Reveal>
      </div>
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
