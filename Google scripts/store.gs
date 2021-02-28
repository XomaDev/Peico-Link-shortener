function doGet(e) {

  var ss = SpreadsheetApp.openById("PUT GOOGLE SHEETS ID HERE");
  var sh = ss.getSheetByName("Sheet1");
  var rg = sh.getDataRange().getValues();
  
    var values = [[ e.parameter.URL, e.parameter.TAG ]];
    var lr = sh.getLastRow()+1;
    sh.getRange(lr,1,1,2).setValues(values);
    return ContentService.createTextOutput('200');
}
