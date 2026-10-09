const XLSX = require('xlsx');
const fs = require('fs');

const workbook = XLSX.readFile('Stockstrail_SEO_Meta_Blueprint.xlsx');
console.log('Sheet Names:', workbook.SheetNames);

const allData = {};
workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  const json = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  allData[sheetName] = json;
  console.log(`Sheet "${sheetName}": ${json.length} rows`);
});

fs.writeFileSync('blueprint_data.json', JSON.stringify(allData, null, 2), 'utf8');
console.log('Saved to blueprint_data.json');
