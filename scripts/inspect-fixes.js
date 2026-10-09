const fs = require('fs');
const parsed = JSON.parse(fs.readFileSync('blueprint_parsed.json', 'utf8'));
parsed.fixes.forEach(f => {
  console.log(`[${f.id}] (${f.priority}) ${f.area}: ${f.issue}`);
  console.log(`   Fix: ${f.recommendedFix}`);
  console.log(`   Owner: ${f.owner}\n`);
});
