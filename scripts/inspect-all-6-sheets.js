const xlsx = require('xlsx');
const workbook = xlsx.readFile('Stockstrail_SEO_Meta_Blueprint.xlsx');

console.log('=== WORKBOOK SUMMARY ===');
console.log('File: Stockstrail_SEO_Meta_Blueprint.xlsx');
console.log('Sheets (' + workbook.SheetNames.length + '): ' + workbook.SheetNames.join(', '));

// Sheet 1: Read Me
console.log('\n--- SHEET 1: Read Me ---');
const readMe = xlsx.utils.sheet_to_json(workbook.Sheets['Read Me'], { header: 1 });
readMe.forEach((r, i) => {
  if (r.length > 0) console.log(r[0] + (r[1] ? ' : ' + r[1] : ''));
});

// Sheet 4: Keyword Map
console.log('\n--- SHEET 4: Keyword Map ---');
const kwMap = xlsx.utils.sheet_to_json(workbook.Sheets['Keyword Map'], { header: 1 });
kwMap.slice(3).forEach((r, i) => {
  if (r && r[0]) {
    console.log('[' + (i + 1) + '] Cluster: ' + r[0] + ' | Keyword: ' + r[1] + ' | Intent: ' + r[2] + ' | Demand: ' + r[3] + ' | Comp: ' + r[4] + ' | Win: ' + r[5] + ' | Target: ' + r[6]);
    console.log('    Action: ' + r[7]);
  }
});
