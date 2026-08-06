export function toNumber(v) {
  if (v === null || v === undefined) return 0;
  const n = parseFloat(String(v).replace(/[€$£,\s]/g, ""));
  return Number.isFinite(n) ? n : 0;
}
export function toBool(v) {
  return String(v || "").trim().toLowerCase().startsWith("y");
}
export function safeDiv(a, b) {
  return b > 0 ? a / b : 0;
}
export function fmtInt(n) {
  return Math.round(n).toLocaleString("en-IE");
}
export function fmtNum(n, dp = 1) {
  return n.toLocaleString("en-IE", { minimumFractionDigits: dp, maximumFractionDigits: dp });
}
export function fmtEuro(n, dp = 0) {
  return "€" + n.toLocaleString("en-IE", { minimumFractionDigits: dp, maximumFractionDigits: dp });
}
export function fmtEuroK(v) {
  return v >= 1000 ? "€" + (v / 1000).toFixed(1) + "k" : fmtEuro(v);
}
export function fmtPct(r, dp = 1) {
  return (r * 100).toLocaleString("en-IE", { minimumFractionDigits: 0, maximumFractionDigits: dp }) + "%";
}
export function dayKey(d) {
  const p = (x) => String(x).padStart(2, "0");
  return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate());
}
export function shortDate(d) {
  return d.toLocaleDateString("en-IE", { day: "numeric", month: "short" });
}
