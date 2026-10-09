const fs = require('fs');
const data = JSON.parse(fs.readFileSync('blueprint_data.json', 'utf8'));

console.log('=== READ ME ===');
console.log(JSON.stringify(data['Read Me'], null, 2));

console.log('\n=== FIX LIST ===');
console.log(JSON.stringify(data['Fix List'], null, 2));
