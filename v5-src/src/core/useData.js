import { useState, useEffect, useCallback } from "react";
import { sheetCsvUrl, leadsCsvUrls, AUTO_REFRESH_MS, DAILY_LOG_TAB, REPLIES_TAB, PAYMENTS_TAB } from "./config.js";
import { parseDailyLog, parseReplies, parseLeads, parsePayments, buildSampleCsvs, sampleLeadsCsv } from "./parse.js";

async function fetchText(url) {
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.text();
}

export function useData() {
  const [state, setState] = useState({ daily: null, replies: null, leads: [], payments: [], sample: false, error: null, loadedAt: null });
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    let daily = null, replies = null, leads = [], payments = [], sample = false, error = null;
    try {
      const [dTxt, rTxt] = await Promise.all([
        fetchText(sheetCsvUrl(DAILY_LOG_TAB)),
        fetchText(sheetCsvUrl(REPLIES_TAB)),
      ]);
      daily = parseDailyLog(dTxt);
      replies = parseReplies(rTxt);
      // Payments tab is optional until it carries rows.
      try { payments = parsePayments(await fetchText(sheetCsvUrl(PAYMENTS_TAB))); } catch { payments = []; }
    } catch (e) {
      // Live feed unreachable: run on sample data, clearly badged.
      const s = buildSampleCsvs();
      daily = parseDailyLog(s.daily);
      replies = parseReplies(s.replies);
      payments = parsePayments(s.payments);
      sample = true;
      error = String(e.message || e);
    }
    // Leads feed is optional; probe tab candidates, fall back silently.
    try {
      if (!sample) {
        for (const url of leadsCsvUrls()) {
          try {
            const t = await fetchText(url);
            const parsed = parseLeads(t);
            if (parsed.length) { leads = parsed; break; }
          } catch { /* next candidate */ }
        }
      } else {
        leads = parseLeads(sampleLeadsCsv());
      }
    } catch { /* cohort model fallback downstream */ }
    setState({ daily, replies, leads, payments, sample, error, loadedAt: new Date() });
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, AUTO_REFRESH_MS);
    return () => clearInterval(id);
  }, [load]);

  return { ...state, loading, reload: load };
}

// Published intelligence artifacts (weekly memo, Palantir brief, daily brief)
// live beside the v4 tracker and are shared by both versions.
export function usePublished(name) {
  const [doc, setDoc] = useState(null);
  useEffect(() => {
    fetch("/dm-tracker/" + name + ".json?cb=" + Date.now())
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d && d.headline) setDoc(d); })
      .catch(() => {});
  }, [name]);
  return doc;
}
