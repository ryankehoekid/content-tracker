import React, { useState, useEffect, useRef } from "react";
import { REDUCED_MOTION } from "../core/config.js";

export function Wordmark({ sub }) {
  return (
    <span>
      <span className="display wordmark">KEHOEGROUP<span className="dot">.</span></span>
      {sub && <span className="wm-sub">{sub}</span>}
    </span>
  );
}

export function Badge({ kind, children }) {
  return <span className={"badge " + kind}>{children}</span>;
}

// Animates a number toward its target on load and refresh.
export function CountUp({ value, format }) {
  const [disp, setDisp] = useState(REDUCED_MOTION ? value : 0);
  const prev = useRef(REDUCED_MOTION ? value : 0);
  useEffect(() => {
    const from = prev.current, to = value;
    prev.current = value;
    if (REDUCED_MOTION || from === to) { setDisp(to); return; }
    const t0 = performance.now(), dur = 700;
    let raf;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setDisp(from + (to - from) * e);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return format(disp);
}

// Terminal type-on for brief headlines.
export function TypeOn({ text }) {
  const [n, setN] = useState(REDUCED_MOTION ? (text || "").length : 0);
  useEffect(() => {
    if (REDUCED_MOTION) { setN((text || "").length); return; }
    setN(0);
    const id = setInterval(() => {
      setN((x) => {
        const next = x + 3;
        if (next >= (text || "").length) clearInterval(id);
        return next;
      });
    }, 22);
    return () => clearInterval(id);
  }, [text]);
  return <span>{(text || "").slice(0, n)}{n < (text || "").length && <span className="cursor">▎</span>}</span>;
}

// Scroll-reveal wrapper: cards rise in as they enter the viewport.
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(REDUCED_MOTION);
  useEffect(() => {
    if (REDUCED_MOTION) return;
    const el = ref.current;
    if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); ob.disconnect(); }
    }, { threshold: 0.08 });
    ob.observe(el);
    return () => ob.disconnect();
  }, []);
  return (
    <div ref={ref} className={"reveal " + (inView ? "in " : "") + className}
      style={delay ? { transitionDelay: delay + "ms" } : null}>
      {children}
    </div>
  );
}

// 14-day micro trendline.
export function Spark({ data, color = "#5A5A5A", dot = "#E11414" }) {
  if (!data || !data.some((v) => v > 0)) return null;
  const w = 96, h = 24, max = Math.max(...data, 1);
  const pts = data.map((v, i) =>
    (i / (data.length - 1)) * w + "," + (h - 2 - (v / max) * (h - 7)));
  const last = pts[pts.length - 1].split(",");
  return (
    <svg width={w} height={h} className="spark" aria-hidden="true">
      <polyline points={pts.join(" ")} fill="none" stroke={color}
        strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={last[0]} cy={last[1]} r="2.5" fill={dot} />
    </svg>
  );
}

export function Tile({ label, num, format, sub, red, delta, spark, tip }) {
  const cls = delta > 0.02 ? "up" : delta < -0.02 ? "down" : "flat";
  const arrow = delta > 0.02 ? "▲" : delta < -0.02 ? "▼" : "·";
  return (
    <div className="tile">
      <div className="label">{label}</div>
      <div className={"display val" + (red ? " red" : "")}>
        <CountUp value={num} format={format} />
      </div>
      <div className="sub">{sub || " "}</div>
      {delta !== null && delta !== undefined && (
        <div className={"wdelta " + cls}>
          {arrow} {Math.abs(delta) < 0.005 ? "flat" : Math.round(Math.abs(delta) * 100) + "%"} vs last wk
        </div>
      )}
      {spark && <Spark data={spark} />}
      {tip && (
        <div className="tip">
          {tip.map(([k, v]) => <div className="tip-row" key={k}><span>{k}</span><b>{v}</b></div>)}
        </div>
      )}
    </div>
  );
}

/* Bespoke line/area chart: hand-drawn SVG in the house style. series =
   [{key, color, data: [{x: Date, y}], area?}] over a shared date axis. */
export function LineChart({ series, height = 220, yFmt = (v) => String(Math.round(v)) }) {
  const all = series.flatMap((s) => s.data);
  if (!all.length) return <div className="note">No data in this window yet.</div>;
  const W = 720, H = height, padL = 44, padR = 10, padT = 12, padB = 26;
  const xs = all.map((d) => d.x.getTime());
  const x0 = Math.min(...xs), x1 = Math.max(...xs);
  const yMax = Math.max(...all.map((d) => d.y), 1) * 1.12;
  const X = (t) => padL + ((t - x0) / Math.max(x1 - x0, 1)) * (W - padL - padR);
  const Y = (v) => padT + (1 - v / yMax) * (H - padT - padB);
  const ticks = 4;
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const xLabels = [];
  for (let i = 0; i <= 3; i++) {
    const t = x0 + ((x1 - x0) * i) / 3;
    const d = new Date(t);
    xLabels.push({ x: X(t), label: d.getDate() + " " + months[d.getMonth()] });
  }
  return (
    <svg viewBox={"0 0 " + W + " " + H} className="chart-svg">
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const v = (yMax * i) / ticks;
        return (
          <g key={i}>
            <line x1={padL} x2={W - padR} y1={Y(v)} y2={Y(v)} stroke="#1B1B1B" strokeWidth="1" />
            <text x={padL - 7} y={Y(v) + 3} textAnchor="end" fontFamily="'Space Mono', monospace"
              fontSize="9" fill="#4A4A4A">{yFmt(v)}</text>
          </g>
        );
      })}
      {xLabels.map((l, i) => (
        <text key={i} x={l.x} y={H - 8} textAnchor="middle" fontFamily="'Space Mono', monospace"
          fontSize="9" fill="#4A4A4A">{l.label}</text>
      ))}
      {series.map((s) => {
        const pts = s.data.map((d) => X(d.x.getTime()).toFixed(1) + "," + Y(d.y).toFixed(1));
        return (
          <g key={s.key}>
            {s.area && (
              <polygon points={pts.join(" ") + " " + X(x1).toFixed(1) + "," + Y(0) + " " + X(x0).toFixed(1) + "," + Y(0)}
                fill={s.color} opacity="0.08" />
            )}
            <polyline points={pts.join(" ")} fill="none" stroke={s.color} strokeWidth="1.8"
              strokeLinejoin="round" strokeLinecap="round" />
          </g>
        );
      })}
    </svg>
  );
}
