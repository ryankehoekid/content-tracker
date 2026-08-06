// One-tap logging relay. The dashboard (Setter cockpit quick log) posts here;
// this forwards to the sheet's Apps Script web app, which appends the row.
// The Apps Script URL and pin live in Vercel env vars so the public repo and
// the public page never carry them.
//
// Required Vercel environment variables:
//   SHEET_WEBHOOK_URL - the Apps Script /exec URL (see dm-sheet-webhook.gs)
//   LOG_PIN           - shared pin; must equal SECRET inside the Apps Script

const ACTIONS = new Set(["reply", "status", "booking", "payment", "eod"]);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!process.env.SHEET_WEBHOOK_URL || !process.env.LOG_PIN) {
    return res.status(503).json({ error: "not_configured" });
  }
  const body = req.body || {};
  if (String(body.pin || "") !== process.env.LOG_PIN) {
    return res.status(401).json({ error: "bad_pin" });
  }
  if (!ACTIONS.has(body.action)) return res.status(400).json({ error: "bad_action" });

  const payload = {
    secret: process.env.LOG_PIN,
    action: body.action,
    handle: String(body.handle || "").slice(0, 80),
    account: String(body.account || "").slice(0, 40),
    status: String(body.status || "").slice(0, 20),
    deadReason: String(body.deadReason || "").slice(0, 60),
    callDate: String(body.callDate || "").slice(0, 20),
    amount: Number(body.amount) || 0,
    initials: Number(body.initials) || 0,
    followUps: Number(body.followUps) || 0,
    comments: Number(body.comments) || 0,
    notes: String(body.notes || "").slice(0, 200),
  };
  try {
    const r = await fetch(process.env.SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow", // Apps Script answers through a 302
    });
    const data = await r.json().catch(() => ({}));
    if (!data.ok) return res.status(502).json({ error: data.error || "sheet" });
    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: "sheet_unreachable" });
  }
}
