/**
 * Content Tracker — Google Sheet backend (Apps Script Web App)
 * ------------------------------------------------------------
 * 1. Open your Google Sheet → Extensions → Apps Script.
 * 2. Delete anything there, paste this whole file, Save.
 * 3. Deploy → New deployment → type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Copy the Web app URL it gives you (ends in /exec).
 * 4. In the tracker, click "Connect Sheet" and paste that URL.
 *
 * The script creates/uses a tab called "Content" and writes the header row
 * automatically. You never touch the columns by hand.
 */

var SHEET_NAME = 'Content';
var SECRET = ''; // OPTIONAL. Set a password here, then paste the same value in the Connect dialog.

var HEADERS = [
  'id', 'date', 'platform', 'format', 'account', 'hook', 'angle', 'cta', 'keyword',
  'views', 'likes', 'comments', 'shares', 'saves', 'leads', 'postUrl', 'notes',
  'books', 'callsScheduled', 'showUps', 'closes', 'revenue', 'cashCollected'
];

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  return sh;
}

function getIds(sh) {
  var last = sh.getLastRow();
  if (last < 2) return [];
  return sh.getRange(2, 1, last - 1, 1).getValues().map(function (r) { return String(r[0]); });
}

function doGet(e) {
  var sh = getSheet();
  var values = sh.getDataRange().getValues();
  var headers = values.shift() || HEADERS;
  var rows = [];
  values.forEach(function (r) {
    if (r[0] === '') return;
    var o = {};
    headers.forEach(function (h, i) { o[h] = r[i]; });
    rows.push(o);
  });
  return json({ ok: true, rows: rows });
}

function doPost(e) {
  var body = {};
  try { body = JSON.parse(e.postData.contents); } catch (err) {}
  if (SECRET && body.secret !== SECRET) return json({ ok: false, error: 'unauthorized' });

  var sh = getSheet();

  if (body.action === 'upsert') {
    var rec = body.record || {};
    var ids = getIds(sh);
    var rowData = HEADERS.map(function (h) { return rec[h] !== undefined && rec[h] !== null ? rec[h] : ''; });
    var idx = ids.indexOf(String(rec.id));
    if (idx >= 0) sh.getRange(idx + 2, 1, 1, HEADERS.length).setValues([rowData]);
    else sh.appendRow(rowData);
    return json({ ok: true });
  }

  if (body.action === 'delete') {
    var ids2 = getIds(sh);
    var i2 = ids2.indexOf(String(body.id));
    if (i2 >= 0) sh.deleteRow(i2 + 2);
    return json({ ok: true });
  }

  if (body.action === 'bulk') {
    (body.records || []).forEach(function (rec) {
      sh.appendRow(HEADERS.map(function (h) { return rec[h] !== undefined && rec[h] !== null ? rec[h] : ''; }));
    });
    return json({ ok: true });
  }

  return json({ ok: false, error: 'unknown action' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
