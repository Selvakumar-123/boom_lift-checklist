function doPost(e) {
  if (!e || !e.parameter) {
      return ContentService.createTextOutput(JSON.stringify({status: 'error', message: 'No parameters received'}))
                           .setMimeType(ContentService.MimeType.JSON);
  }

  const sheet = SpreadsheetApp.openById('1hqYXCcUFfPyRLg2U4kx1MkTYsCCSgvTGRuVTzF_AQL0').getSheetByName('Sheet1');
  const data = e.parameter;

  const row = [
      new Date(),
      data.name,
      data.company,
      data.lift_number,
      data.operating_controls,
      data.emergency_lowering,
      data.override_controls,
      data.protected_controls,
      data.control_panel,
      data.switch_guards,
      data.indicator_lights,

      data.battery_charged,
      data.ppe_in_use,
      data.traffic_watch,
      data.signature
  ];

  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
}