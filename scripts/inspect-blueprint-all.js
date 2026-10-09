const fs = require('fs');
const data = JSON.parse(fs.readFileSync('blueprint_data.json', 'utf8'));

fs.writeFileSync('blueprint_fix_list.json', JSON.stringify(data['Fix List'], null, 2));
fs.writeFileSync('blueprint_meta_main.json', JSON.stringify(data['Meta - Main Site'], null, 2));
fs.writeFileSync('blueprint_meta_learning.json', JSON.stringify(data['Meta - Learning'], null, 2));
fs.writeFileSync('blueprint_aeo_geo.json', JSON.stringify(data['AEO-GEO Playbook'], null, 2));
fs.writeFileSync('blueprint_readme.json', JSON.stringify(data['Read Me'], null, 2));

console.log('Saved individual JSON files.');
console.log('Fix List rows:', data['Fix List'].length);
console.log('Meta Main Site rows:', data['Meta - Main Site'].length);
console.log('Meta Learning rows:', data['Meta - Learning'].length);
console.log('AEO-GEO rows:', data['AEO-GEO Playbook'].length);
console.log('Read Me rows:', data['Read Me'].length);
