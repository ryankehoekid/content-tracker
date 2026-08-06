// Ask Palantir: a Vercel serverless function that answers operator questions
// from the live sheets plus the doctrine, via the Anthropic API.
//
// Required Vercel environment variables:
//   ANTHROPIC_API_KEY   - console.anthropic.com API key (the function is off without it)
//   PALANTIR_DOCTRINE   - the Operator Playbook text, pasted verbatim
//   ASK_KEY             - optional shared secret; when set, the page must send it
const SHEET_ID = "1HL4DISJ2mdz8BYm8qH0s385mV2eD4kkwMo9LGi45MDU";
const LEADS_ID = "10xh4gB9vHChLIzf67lUto6Bvnp44_wc2uYbJOsBzUYo";

async function csv(sheetId, tab, cap) {
  try {
    const r = await fetch(
      "https://docs.google.com/spreadsheets/d/" + sheetId +
      "/gviz/tq?tqx=out:csv&sheet=" + encodeURIComponent(tab),
      { cache: "no-store" }
    );
    if (!r.ok) return "";
    return (await r.text()).slice(0, cap);
  } catch {
    return "";
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: "not_configured" });

  const { question, key } = req.body || {};
  if (process.env.ASK_KEY && key !== process.env.ASK_KEY) {
    return res.status(401).json({ error: "bad_key" });
  }
  const q = String(question || "").trim();
  if (!q || q.length > 600) return res.status(400).json({ error: "bad_question" });

  const [daily, replies, payments, leads] = await Promise.all([
    csv(SHEET_ID, "Daily Log", 12000),
    csv(SHEET_ID, "Replies", 12000),
    csv(SHEET_ID, "Payments", 6000),
    csv(LEADS_ID, "Lead Tracker", 8000),
  ]);
  if (!daily && !replies) return res.status(502).json({ error: "sheets_unreachable" });

  const doctrine = process.env.PALANTIR_DOCTRINE
    || "No doctrine document is loaded. Answer only from the live numbers, and say plainly when a question needs doctrine you do not have.";

  const system = [
    "You are Palantir, the operator brain for KEHOEGROUP, an Irish performance marketing agency run by Ryan. One setter (Rhys Vorster) runs Instagram cold DM outreach to high-ticket info-product creators. Deals are EUR 10-15k with roughly EUR 5k upfront on payment plans; the rev-share backend is the profit center; the monthly cash goal is EUR 30,000.",
    "Rules that are never broken: every claim cites a number from the live data. Label figures MEASURED, ASSUMED, or HYPOTHESIS. Sample gates: reply verdict needs 150 sends, booking needs 10 replies, show needs 5 booked, close needs 5 shows; below a gate say the sample cannot carry a verdict. Never answer the doctrine's OPEN QUESTIONS by assumption. Thin data makes 'hold the course, sample too small' a valid answer. Disagreeing records get surfaced, never averaged.",
    "Style: plain text only, no markdown syntax, no em-dashes, write EUR not the euro symbol. Under 220 words. Direct, specific, Hormozi-level operator thinking. End with the single next action when one exists.",
    "THE DOCTRINE (outranks everything else):\n" + doctrine,
  ].join("\n\n");

  const user = [
    "Live Daily Log CSV (EOD form; header block rows precede the real header):\n" + daily,
    "Live Replies CSV:\n" + replies,
    payments ? "Live Payments CSV:\n" + payments : "Payments tab empty or unreachable.",
    leads ? "Lead scheduler CSV (currently parked until accounts 2 and 3 land; frozen dates are standby, not neglect):\n" + leads : "Lead scheduler unreachable.",
    "Ryan asks: " + q,
  ].join("\n\n");

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-opus-5",
      max_tokens: 1200,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });
  if (!r.ok) {
    return res.status(502).json({ error: "upstream", detail: (await r.text()).slice(0, 200) });
  }
  const data = await r.json();
  if (data.stop_reason === "refusal") {
    return res.status(200).json({ answer: "The stone declines that question." });
  }
  const answer = (data.content || [])
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();
  if (!answer) return res.status(502).json({ error: "empty" });
  return res.status(200).json({ answer });
}
