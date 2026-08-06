// Calendly webhook -> sheet. When a lead books through Calendly, this marks
// their Replies row Booked (or appends one) with the call date filled in.
// No more hand-logging bookings: the calendar writes the sheet.
//
// Calendly setup (one time):
//   1. Calendly -> Integrations -> Webhooks -> create subscription for
//      invitee.created (and invitee.canceled if wanted) pointing at
//      https://<your-vercel-domain>/api/hooks/calendly?key=<CALENDLY_KEY>
//   2. On the booking form, add a required question:
//      "Your Instagram handle" - that answer is how the row is matched.
//
// Required Vercel environment variables:
//   SHEET_WEBHOOK_URL - the Apps Script /exec URL (see dm-sheet-webhook.gs)
//   LOG_PIN           - shared pin; must equal SECRET inside the Apps Script
//   CALENDLY_KEY      - any random string; the same one goes in the webhook URL

function fmtDMY(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "";
  // Calendly sends UTC; render in Irish time so the sheet reads naturally.
  const p = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Dublin", day: "2-digit", month: "2-digit", year: "numeric",
  }).format(d);
  return p;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!process.env.SHEET_WEBHOOK_URL || !process.env.LOG_PIN) {
    return res.status(503).json({ error: "not_configured" });
  }
  if (!process.env.CALENDLY_KEY || req.query.key !== process.env.CALENDLY_KEY) {
    return res.status(401).json({ error: "bad_key" });
  }

  const body = req.body || {};
  const event = String(body.event || "");
  const p = body.payload || {};
  if (event !== "invitee.created" && event !== "invitee.canceled") {
    return res.status(200).json({ ok: true, ignored: event });
  }

  // The IG handle comes from the custom booking question; fall back to name.
  const qa = Array.isArray(p.questions_and_answers) ? p.questions_and_answers : [];
  const igAnswer = qa.find((x) => /instagram|handle|ig/i.test(String(x.question || "")));
  const handle = String((igAnswer && igAnswer.answer) || p.name || "").trim().slice(0, 80);
  if (!handle) return res.status(200).json({ ok: true, ignored: "no_handle" });

  const start = p.scheduled_event && p.scheduled_event.start_time;
  const cancelled = event === "invitee.canceled";
  const payload = {
    secret: process.env.LOG_PIN,
    action: cancelled ? "status" : "booking",
    handle,
    status: cancelled ? "Talking" : "",
    callDate: cancelled ? "" : fmtDMY(start),
    notes: cancelled ? "Calendly: call cancelled, back to talking"
      : "Booked via Calendly" + (p.name && p.name !== handle ? " (" + String(p.name).slice(0, 40) + ")" : ""),
  };
  try {
    const r = await fetch(process.env.SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    const data = await r.json().catch(() => ({}));
    return res.status(200).json({ ok: !!data.ok });
  } catch {
    // Answer 200 anyway so Calendly does not disable the webhook; the
    // booking still exists in Calendly and the sheet catches up by hand.
    return res.status(200).json({ ok: false, error: "sheet_unreachable" });
  }
}
