var sheetName = "Profiles";
var scriptProp = PropertiesService.getScriptProperties();

function intialSetup() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty("key", activeSpreadsheet.getId());
}

function saveTable(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty("key"));
    var sheet = doc.getSheetByName(sheetName);

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;

    var newRow = headers.map(function (header) {
      return header === "timestamp" ? new Date() : e.parameter[header];
    });

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success", row: nextRow })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: e })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function botMessage(e) {
  var bot_token = "1875371250:AAGp-Mnt3DhSsijzYoYj1nizTC0lbsc1u88";
  var tg_method = "sendMessage";
  var chat_id = "-1001391831862";

  var data = {
    method: "post",
    muteHttpExceptions: true,
    payload: {
      chat_id: chat_id,
      text: e.parameter.fio + " " + e.parameter.phone,
    },
  };

  var res = UrlFetchApp.fetch(
    "https://api.telegram.org/bot" + bot_token + "/" + tg_method,
    data
  );
  return res.getContentText();
}

function doPost(e) {
  try {
    botMessage(e);
  } catch (ex) {}
  return saveTable(e);
}

function doGet(e) {
  try {
    botMessage(e);
  } catch (ex) {}
  return saveTable(e);
}
