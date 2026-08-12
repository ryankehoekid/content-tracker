// Wire to the live Google Sheets. Same feeds as the v4 tracker.
export const SHEET_URL = "https://docs.google.com/spreadsheets/d/1HL4DISJ2mdz8BYm8qH0s385mV2eD4kkwMo9LGi45MDU/edit?usp=sharing";
export const DAILY_LOG_TAB = "Daily Log";
export const REPLIES_TAB = "Replies";
export const PAYMENTS_TAB = "Payments";

export const LEADS_SHEET_URL = "https://docs.google.com/spreadsheets/d/10xh4gB9vHChLIzf67lUto6Bvnp44_wc2uYbJOsBzUYo/edit?usp=sharing";
export const LEADS_TABS = ["Lead Tracker", "Leads", "LEAD TRACKER", "Sheet1", ""];

// A link-shared sheet exposes each tab as CSV through Google's gviz endpoint.
// No headers=0: the default export keeps typed column header text intact.
export function sheetCsvUrl(tab) {
  const m = String(SHEET_URL).match(/\/d\/([\w-]+)/);
  if (!m) return "";
  return "https://docs.google.com/spreadsheets/d/" + m[1]
    + "/gviz/tq?tqx=out:csv&sheet=" + encodeURIComponent(tab);
}
export function leadsCsvUrls() {
  const m = String(LEADS_SHEET_URL).match(/\/d\/([\w-]+)/);
  if (!m) return [];
  return LEADS_TABS.map((t) => "https://docs.google.com/spreadsheets/d/" + m[1]
    + "/gviz/tq?tqx=out:csv" + (t ? "&sheet=" + encodeURIComponent(t) : ""));
}

export const DATE_FORMAT = "auto"; // DMY Irish default, auto-detected
export const FALLBACK_REPLY_RATE = 0.04;
export const FALLBACK_BOOKING_RATE = 0.35;
export const AUTO_REFRESH_MS = 5 * 60 * 1000;
export const COMMISSION_RATE = 0.075; // setter rev share on collected cash

// KPI bands: [floor, strong]. Seeded with cold IG DM norms; booking baseline
// set by Ryan at 35% (2026-08-06, supersedes the 12.5% floor set earlier the
// same day). Strong end seeded at 50%.
export const KPI = {
  replyRate: [0.03, 0.06],
  bookingRate: [0.35, 0.5],
  showRate: [0.60, 0.80],
  closeRate: [0.15, 0.30],
};

export const DAY_MS = 86400000;

export const DEFAULT_CALC = {
  goal: 30000, deal: 10000, aov: 5000,
  showRate: 0.7, closeRate: 0.175, capacity: 105, sendDays: 26,
  // null = follow the live measured rate; a number = manual scenario override.
  replyRate: null, bookingRate: null,
};

export const REDUCED_MOTION = typeof matchMedia !== "undefined"
  && matchMedia("(prefers-reduced-motion: reduce)").matches;
