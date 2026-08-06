/**
 * KEHOEGROUP sales sheet — write endpoint (Google Apps Script Web App)
 * -------------------------------------------------------------------
 * This is the missing half of auto-logging: a URL that can APPEND to the
 * sales sheet. The dashboard relays (/api/log, /api/hooks/calendly) post
 * here; the sheet stays the single source of truth.
 *
 * Install (one time, ~2 minutes):
 *   1. Open the SALES sheet (Daily Log / Replies / Payments) →
 *      Extensions → Apps Script.
 *   2. Delete anything there, paste this whole file, Save.
 *   3. Set SECRET below to a password of your choosing.
 *   4. Deploy → New deployment → type "Web app"
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the Web app URL (ends in /exec).
 *   5. In Vercel → project → Settings → Environment Variables, add:
 *        SHEET_WEBHOOK_URL = that URL
 *        LOG_PIN           = the same password you set in SECRET
 *
 * The script never creates or renames columns; it finds your existing
 * headers the same way the dashboard does (scan the first rows, fuzzy
 * match), so the sheet layout stays yours.
 */

var SECRET = ''; // REQUIRED: set a password, and use the same value as LOG_PIN in Vercel.

// ---------------------------------------------------------------- helpers

function findHeader(sh, tokens) {
  var rows = sh.getRange(1, 1, Math.min(12, sh.getLastRow() || 1), sh.getLastColumn() || 1).getValues();
  for (var i = 0; i < rows.length; i++) {
    var low = rows[i].map(function (c) { return String(c).toLowerCase().trim(); });
    var hit = tokens.every(function (t) {
      return low.some(function (c) { return c.indexOf(t) !== -1; });
    });
    if (hit) return { row: i + 1, headers: low };
  }
  return null;
}

// exact → endsWith → includes, mirroring the dashboard's column matcher
function colIndex(headers, name, alt) {
  var names = alt ? [name, alt] : [name];
  for (var pass = 0; pass < 3; pass++) {
    for (var n = 0; n < names.length; n++) {
      for (var i = 0; i < headers.length; i++) {
        var h = headers[i];
        if (pass === 0 && h === names[n]) return i;
        if (pass === 1 && h && h.slice(-names[n].length) === names[n]) return i;
        if (pass === 2 && h && h.indexOf(names[n]) !== -1) return i;
      }
    }
  }
  return -1;
}

function todayStr() {
  return Utilities.formatDate(new Date(), 'Europe/Dublin', 'dd/MM/yyyy');
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function appendMapped(sh, head, values) {
  var row = [];
  for (var i = 0; i < sh.getLastColumn(); i++) row.push('');
  for (var key in values) {
    if (values[key].col >= 0 && values[key].val !== '') row[values[key].col] = values[key].val;
  }
  sh.appendRow(row);
}

// Find the LAST Replies row whose handle matches (with or without the @).
function findReplyRow(sh, head, handle) {
  var hCol = colIndex(head.headers, 'handle', 'user');
  if (hCol < 0) return -1;
  var last = sh.getLastRow();
  if (last <= head.row) return -1;
  var vals = sh.getRange(head.row + 1, hCol + 1, last - head.row, 1).getValues();
  var want = String(handle).toLowerCase().replace(/^@/, '').trim();
  var found = -1;
  for (var i = 0; i < vals.length; i++) {
    var got = String(vals[i][0]).toLowerCase().replace(/^@/, '').trim();
    if (got && got === want) found = head.row + 1 + i;
  }
  return found;
}

// ---------------------------------------------------------------- actions

function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {}
  if (!SECRET || body.secret !== SECRET) return json({ ok: false, error: 'unauthorized' });

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var action = String(body.action || '');

  // ---- new reply row: {handle, account?, notes?}
  if (action === 'reply') {
    var sh = ss.getSheetByName('Replies');
    var head = findHeader(sh, ['handle']);
    if (!head) return json({ ok: false, error: 'no header' });
    var H = head.headers;
    appendMapped(sh, head, {
      date: { col: colIndex(H, 'date'), val: body.date || todayStr() },
      handle: { col: colIndex(H, 'handle', 'user'), val: String(body.handle || '') },
      account: { col: colIndex(H, 'account'), val: String(body.account || '') },
      notes: { col: colIndex(H, 'notes', 'note'), val: String(body.notes || '') },
    });
    return json({ ok: true });
  }

  // ---- status change on an existing reply: {handle, status, deadReason?, callDate?}
  // status one of: Talking / Waiting / Booked / Dead
  if (action === 'status' || action === 'booking') {
    var sh2 = ss.getSheetByName('Replies');
    var head2 = findHeader(sh2, ['handle']);
    if (!head2) return json({ ok: false, error: 'no header' });
    var H2 = head2.headers;
    var status = action === 'booking' ? 'Booked' : String(body.status || '');
    var row = findReplyRow(sh2, head2, body.handle || '');
    if (row < 0) {
      // Unknown handle: append a fresh row so nothing is ever dropped.
      appendMapped(sh2, head2, {
        date: { col: colIndex(H2, 'date'), val: todayStr() },
        handle: { col: colIndex(H2, 'handle', 'user'), val: String(body.handle || '') },
        notes: { col: colIndex(H2, 'notes', 'note'), val: String(body.notes || '') },
      });
      row = sh2.getLastRow();
    }
    var set = function (name, alt, val) {
      var c = colIndex(H2, name, alt);
      if (c >= 0 && val) sh2.getRange(row, c + 1).setValue(val);
    };
    set('status', null, status);
    if (status.toLowerCase() === 'booked') {
      set('date booked', null, body.dateBooked || todayStr());
      set('call date', null, body.callDate || '');
      set('booked', 'book', 'Y');
    }
    if (status.toLowerCase() === 'dead') set('dead reason', null, body.deadReason || '');
    if (body.notes) set('notes', 'note', body.notes);
    return json({ ok: true, row: row });
  }

  // ---- payment: {handle, amount, notes?}
  if (action === 'payment') {
    var sh3 = ss.getSheetByName('Payments');
    if (!sh3) return json({ ok: false, error: 'no Payments tab' });
    var head3 = findHeader(sh3, ['amount']) || { row: 1, headers: ['date', 'handle', 'amount', 'notes'] };
    var H3 = head3.headers;
    appendMapped(sh3, head3, {
      date: { col: colIndex(H3, 'date'), val: body.date || todayStr() },
      handle: { col: colIndex(H3, 'handle', 'user'), val: String(body.handle || '') },
      amount: { col: colIndex(H3, 'amount'), val: Number(body.amount) || 0 },
      notes: { col: colIndex(H3, 'notes', 'note'), val: String(body.notes || '') },
    });
    return json({ ok: true });
  }

  // ---- EOD row: {initials, followUps, comments, notes?, date?}
  if (action === 'eod') {
    var sh4 = ss.getSheetByName('Daily Log');
    var head4 = findHeader(sh4, ['initial']);
    if (!head4) return json({ ok: false, error: 'no header' });
    var H4 = head4.headers;
    appendMapped(sh4, head4, {
      date: { col: colIndex(H4, 'date'), val: body.date || todayStr() },
      initials: { col: colIndex(H4, 'initial'), val: Number(body.initials) || 0 },
      followUps: { col: colIndex(H4, 'follow'), val: Number(body.followUps) || 0 },
      comments: { col: colIndex(H4, 'comment'), val: Number(body.comments) || 0 },
      notes: { col: colIndex(H4, 'notes', 'note'), val: String(body.notes || '') },
    });
    return json({ ok: true });
  }

  return json({ ok: false, error: 'unknown action' });
}
