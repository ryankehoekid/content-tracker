import React, { useState, useEffect, useMemo, useCallback } from "react";
import { DEFAULT_CALC, REDUCED_MOTION, SHEET_URL, LEADS_SHEET_URL } from "./core/config.js";
import { computeMetrics, computeAnomalies } from "./core/metrics.js";
import { useData } from "./core/useData.js";
import { Wordmark } from "./ui/atoms.jsx";
import Command from "./views/Command.jsx";
import Pipeline from "./views/Pipeline.jsx";
import Cash from "./views/Cash.jsx";
import Setter from "./views/Setter.jsx";

const VIEWS = [
  { id: "command", label: "Command", el: Command },
  { id: "pipeline", label: "Pipeline", el: Pipeline },
  { id: "cash", label: "Cash", el: Cash },
  { id: "setter", label: "Setter", el: Setter },
];

function useHashRoute() {
  const read = () => {
    const h = (location.hash || "").replace(/^#\/?/, "");
    return VIEWS.some((v) => v.id === h) ? h : "command";
  };
  const [route, setRoute] = useState(read);
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

/* Boot: the terminal powers on. Once per browser session. */
function Boot({ done }) {
  const LINES = [
    "feeds .......... daily log / replies / lead scheduler",
    "engine ......... levers priced, diagnosis armed",
    "palantir ....... seeing-stone online",
  ];
  const [n, setN] = useState(0);
  useEffect(() => {
    if (REDUCED_MOTION) return;
    const id = setInterval(() => setN((x) => x + 1), 330);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={"boot" + (done ? " done" : "")}>
      <div className="boot-in">
        <Wordmark sub="Ops Terminal v5" />
        <div className="boot-lines">
          {LINES.slice(0, n + 1).map((l, i) => (
            <div key={i}><span className="ok">&gt;</span> {l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Palette({ open, close, go, actions }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const items = useMemo(() => {
    const all = [
      ...VIEWS.map((v) => ({ label: "Go to " + v.label, k: "view", run: () => go(v.id) })),
      ...actions,
    ];
    const needle = q.trim().toLowerCase();
    return needle ? all.filter((a) => a.label.toLowerCase().includes(needle)) : all;
  }, [q, actions, go]);
  useEffect(() => { setSel(0); }, [q, open]);
  useEffect(() => { if (!open) setQ(""); }, [open]);
  if (!open) return null;
  const onKey = (e) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, items.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
    else if (e.key === "Enter" && items[sel]) { items[sel].run(); close(); }
  };
  return (
    <div className="pal-overlay" onClick={close}>
      <div className="palette" onClick={(e) => e.stopPropagation()}>
        <input autoFocus placeholder="Type a command" value={q}
          onChange={(e) => setQ(e.target.value)} onKeyDown={onKey} />
        {items.map((a, i) => (
          <div key={i} className={"pal-item" + (i === sel ? " sel" : "")}
            onMouseEnter={() => setSel(i)} onClick={() => { a.run(); close(); }}>
            <span>{a.label}</span>
            <span className="k">{a.k}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const { daily, replies, leads, payments, sample, loading, loadedAt, reload } = useData();
  const route = useHashRoute();
  const [calc, setCalc] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("kg_calc") || "null");
      return saved ? { ...DEFAULT_CALC, ...saved } : DEFAULT_CALC;
    } catch { return DEFAULT_CALC; }
  });
  useEffect(() => {
    try { localStorage.setItem("kg_calc", JSON.stringify(calc)); } catch { /* private mode */ }
  }, [calc]);

  const [booted, setBooted] = useState(() => REDUCED_MOTION || sessionStorage.getItem("kg_booted") === "1");
  useEffect(() => {
    if (booted) return;
    const t = setTimeout(() => {
      setBooted(true);
      try { sessionStorage.setItem("kg_booted", "1"); } catch { /* fine */ }
    }, 1500);
    return () => clearTimeout(t);
  }, [booted]);

  const [palOpen, setPalOpen] = useState(false);
  const [tv, setTv] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("tv", tv);
  }, [tv]);
  const go = useCallback((id) => { location.hash = "/" + id; }, []);
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalOpen((o) => !o); return; }
      if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
      if (e.key === "Escape" && tv) setTv(false);
      const map = { 1: "command", 2: "pipeline", 3: "cash", 4: "setter" };
      if (map[e.key]) go(map[e.key]);
      if (e.key.toLowerCase() === "t") setTv((v) => !v);
      if (e.key.toLowerCase() === "r") reload();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, reload, tv]);

  const m = useMemo(() => (daily && replies ? computeMetrics(daily, replies) : null), [daily, replies]);
  const anomalies = useMemo(
    () => (daily && replies ? computeAnomalies(daily, replies, leads, calc.capacity) : []),
    [daily, replies, leads, calc.capacity]
  );

  if (!daily || !replies) {
    return (
      <div className="center">
        <Wordmark sub="Ops Terminal v5" />
        <div className="label" style={{ marginTop: 10 }}>Pulling the numbers</div>
      </div>
    );
  }

  const View = (VIEWS.find((v) => v.id === route) || VIEWS[0]).el;
  const actions = [
    { label: "Refresh data", k: "R", run: reload },
    { label: (tv ? "Exit" : "Enter") + " TV mode", k: "T", run: () => setTv((v) => !v) },
    { label: "Open sales sheet", k: "link", run: () => window.open(SHEET_URL, "_blank") },
    { label: "Open lead scheduler", k: "link", run: () => window.open(LEADS_SHEET_URL, "_blank") },
    { label: "Open v4 tracker", k: "link", run: () => window.open("/dm-tracker/", "_blank") },
  ];

  return (
    <div>
      {!booted && <Boot done={false} />}
      <span className="hud-corner hud-tl" /><span className="hud-corner hud-tr" />
      <span className="hud-corner hud-bl" /><span className="hud-corner hud-br" />
      <div className="shell">
        <div className="topbar">
          <a href="#/command" style={{ textDecoration: "none" }}><Wordmark sub="Ops Terminal v5" /></a>
          <nav className="nav">
            {VIEWS.map((v) => (
              <a key={v.id} href={"#/" + v.id} className={route === v.id ? "on" : ""}>{v.label}</a>
            ))}
          </nav>
          <div className="top-right">
            <span className="feed">
              <span className={sample ? "dead" : "lit"} />
              {sample ? "sample data" : "live feed"}
              {loadedAt && !sample && <span style={{ color: "#4A4A4A" }}>
                {" "}· {loadedAt.toLocaleTimeString("en-IE", { hour: "2-digit", minute: "2-digit" })}
              </span>}
            </span>
            <button className="kbd-hint" onClick={() => setPalOpen(true)}>⌘K</button>
          </div>
        </div>
        {sample && (
          <div className="notice">Live sheet unreachable from this network; running on sample data so the layout stays honest. It reconnects automatically.</div>
        )}
        {anomalies.length > 0 && (
          <div className="ticker">
            {anomalies.map((a, i) => <span key={i} className={"sig " + a.sev}>{a.text}</span>)}
          </div>
        )}
        <View daily={daily} replies={replies} leads={leads} payments={payments} m={m} calc={calc} setCalc={setCalc} />
        <div className="footer">
          <span>KEHOEGROUP · Blood &amp; Ink</span>
          <span>keys: 1-4 views · T tv · R refresh · ⌘K palette</span>
        </div>
      </div>
      <Palette open={palOpen} close={() => setPalOpen(false)} go={go} actions={actions} />
    </div>
  );
}
