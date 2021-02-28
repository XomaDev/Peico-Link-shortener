function doGet(e){
  var tag = e.parameter.tag;

  var data = SpreadsheetApp.openById("GOOGLE SHEETS ID HERE").getDataRange().getValues();
  var rowData = 'FAILED';

  for(var i = 0; i < data.length; i++) {
    if(data[i][1] == tag){
      rowData = data[i][0];
    }
  }
  
   return ContentService.createTextOutput(rowData);
};
