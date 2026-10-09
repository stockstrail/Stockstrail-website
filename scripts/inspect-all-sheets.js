const xlsx = require('xlsx');
const workbook = xlsx.readFile('Stockstrail_SEO_Meta_Blueprint.xlsx');

workbook.SheetNames.forEach((sheetName, i) => {
  console.log(`\n============================================================`);
  console.log(`SHEET ${i + 1}: "${sheetName}"`);
  console.log(`============================================================`);
  const sheet = workbook.Sheets[sheetName];
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  console.log(`Dimensions: ${sheet['!ref']} | Total rows: ${rows.length}`);
  
  // Print header and first 10 rows
  console.log('--- Headers & Sample Rows ---');
  rows.slice(0, 10).forEach((r, idx) => {
    const preview = r.map(c => typeof c === 'string' ? (c.length > 50 ? c.slice(0, 47) + '...' : c) : c);
    console.log(`Row ${idx}:`, JSON.stringify(preview));
  });
});
