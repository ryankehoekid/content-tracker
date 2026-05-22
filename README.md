# Content Tracker

A single-file content tracker for the Revive Yourself info-business model. Tracks every
reel and lead-magnet post across Instagram + Facebook, and judges them on the metric
the blueprint says matters most: **opt-in rate (leads ÷ views)**, not vanity views.

Built as one static `index.html` (Tailwind via CDN, no build step). Data persists to a
Google Sheet you own via a tiny Apps Script web app. Works offline on local demo data
until you connect a Sheet.

## What it tracks

Per post: date, platform, format (Reel / Carousel), account, hook, **angle**
(Authority, Credibility, Belief-break, Objection-crush, Desire/LARP, Little win,
$10k framing, $100k flex), CTA type + keyword, views, likes/comments/shares/saves,
**leads**, post URL, notes.

Dashboard: blended KPIs, Reels vs Carousels, Instagram vs Facebook, an angle
leaderboard (does $10k / little-win framing beat the big flex?), a 14-day leads
trend, and top posts ranked by leads.

The data model is **funnel-ready** — each row also carries optional booking,
show-up, close, revenue and cash-collected columns so the DM-funnel scorecard from
the blueprint can bolt on later without a rebuild.

## 1. Set up the Google Sheet backend

1. Create a Google Sheet (any name).
2. **Extensions → Apps Script**. Delete the stub, paste the contents of
   [`apps-script.gs`](apps-script.gs), and **Save**.
3. **Deploy → New deployment → Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the **Web app URL** (ends in `/exec`).
5. Open the tracker → **Connect Sheet** → paste the URL → **Save & sync**.

The script auto-creates a `Content` tab with the right header row. The tracker reads
with `GET` and writes with `POST` (using `text/plain` to dodge CORS preflight, which
Apps Script web apps don't answer).

Optional: set a `SECRET` value in the script and paste the same value in the Connect
dialog to lock down writes.

## 2. Deploy to Vercel via GitHub

This folder is a git repo already. To publish:

```bash
# from this folder
git remote add origin https://github.com/<you>/content-tracker.git
git push -u origin main
```

Then in Vercel: **Add New → Project → import the repo**. No framework, no build
command, output is the root. Vercel serves `index.html` directly. Same flow as the
webinar dashboard.

## Notes

- Local-only mode (no Sheet connected) stores posts in the browser and shows seeded
  demo data so the dashboard looks alive. Connect a Sheet to make it real and
  shareable across your team's devices.
- Export / Import CSV covers all columns — handy for migrating existing sheets in.
