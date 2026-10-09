const xlsx = require('xlsx');
const workbook = xlsx.readFile('Stockstrail_SEO_Meta_Blueprint.xlsx');

console.log('Total Sheets:', workbook.SheetNames.length);
console.log('Sheet Names List:');
workbook.SheetNames.forEach((sheetName, i) => {
  const sheet = workbook.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  console.log(`[${i + 1}] "${sheetName}" | Range: ${sheet['!ref']} | Total rows: ${rows.length}`);
});
