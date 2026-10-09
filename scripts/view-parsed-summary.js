const fs = require('fs');
const data = JSON.parse(fs.readFileSync('blueprint_parsed.json', 'utf8'));

console.log('=== MAIN SITE PAGES (' + data.mainPages.length + ') ===');
data.mainPages.forEach((p, idx) => {
  console.log(`[${idx+1}] [${p.group}] ${p.page}`);
  console.log('  URL:   ' + p.canonical);
  console.log('  Title: ' + p.newTitle);
  console.log('  Desc:  ' + p.newDesc);
  console.log('  Index: ' + p.indexing);
  if (p.notes) console.log('  Notes: ' + p.notes);
});

console.log('\n=== LEARNING PAGES (' + data.learningPages.length + ') ===');
data.learningPages.forEach((p, idx) => {
  console.log(`[${idx+1}] [${p.group}] ${p.page}`);
  console.log('  URL:   ' + p.canonical);
  console.log('  Title: ' + p.newTitle);
  console.log('  Desc:  ' + p.newDesc);
  console.log('  Index: ' + p.indexing);
  if (p.notes) console.log('  Notes: ' + p.notes);
});

console.log('\n=== FIXES (' + data.fixes.length + ') ===');
data.fixes.forEach(f => {
  console.log(`[${f.id}] [${f.priority}] [${f.area}] ${f.issue}`);
  console.log('  Evidence: ' + f.evidence);
  console.log('  Fix:      ' + f.recommendedFix);
});
