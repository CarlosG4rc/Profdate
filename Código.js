function doGet() {
    var template =  HtmlService.createTemplateFromFile('index'); // Método para la creación del  template
    return template.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1.0'); // se evalua la metadata de la cabecera
}
function include (filename) {
    return HtmlService.createTemplateFromFile(filename).getRawContent();
}
    
function autoCompletar(){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/16PoeOrXVkD46N3tOzxNbtBHSOdHuw6cB9oW12AO8gHY/edit#gid=2146330587');
    var sheet = ss.getSheetByName('Prepa');
    var data = sheet.getRange(1,1).getDataRegion().getValues();
    var nombreProf = {};
    data.forEach(function(n){
        nombreProf[n[1]] = null;
        });
    return nombreProf;
}
function getEmail (nombre){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/16PoeOrXVkD46N3tOzxNbtBHSOdHuw6cB9oW12AO8gHY/edit#gid=2146330587');
    var sheet = ss.getSheetByName('Prepa');
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var email = value[i] && value[i][3];
        i = lastrowbd + 1;
      }
    }
    return email;
}
function getlink (nombre){
    var ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/16PoeOrXVkD46N3tOzxNbtBHSOdHuw6cB9oW12AO8gHY/edit#gid=2146330587');
    var sheet = ss.getSheetByName('Prepa');
    var lastrowbd = sheet.getDataRange().getNumRows();
    var column = sheet.getDataRange();
    var value = column.getValues();
    for(var i = 0; i < lastrowbd; i++)
    {
      if(value[i][1] == nombre)
      {
        var link = value[i] && value[i][4];
        i = lastrowbd + 1;
      }
    }
    return link;
}


