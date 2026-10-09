const fs = require('fs');
const parsed = JSON.parse(fs.readFileSync('blueprint_parsed.json', 'utf8'));

console.log('MAIN SITE PAGES (' + parsed.mainPages.length + '):');
parsed.mainPages.forEach(p => {
  console.log('[' + p.id + '] ' + p.page + ' -> ' + p.canonical + ' | ' + p.indexing);
  console.log('   Title (' + (p.newTitle ? p.newTitle.length : 0) + '): ' + p.newTitle);
  console.log('   Desc (' + (p.newDesc ? p.newDesc.length : 0) + '): ' + p.newDesc);
});

console.log('\nLEARNING PAGES (' + parsed.learningPages.length + '):');
parsed.learningPages.forEach(p => {
  console.log('[' + p.id + '] ' + p.page + ' -> ' + p.canonical + ' | ' + p.indexing);
  console.log('   Title (' + (p.newTitle ? p.newTitle.length : 0) + '): ' + p.newTitle);
  console.log('   Desc (' + (p.newDesc ? p.newDesc.length : 0) + '): ' + p.newDesc);
});
