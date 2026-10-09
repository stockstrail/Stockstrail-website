const fs = require('fs');

const mainSiteRaw = JSON.parse(fs.readFileSync('blueprint_meta_main.json', 'utf8'));
const learningRaw = JSON.parse(fs.readFileSync('blueprint_meta_learning.json', 'utf8'));
const fixListRaw = JSON.parse(fs.readFileSync('blueprint_fix_list.json', 'utf8'));

function parseMetaSheet(rawRows) {
  // row 0 is note, row 1 is header
  const items = [];
  for (let i = 2; i < rawRows.length; i++) {
    const r = rawRows[i];
    const id = r["Stockstrail: Meta titles & descriptions: main site (stockstrail.in)"] || r["Stockstrail Learning: Meta titles & descriptions (learning.stockstrail.in)"];
    if (!id && !r["__EMPTY_2"]) continue;
    items.push({
      id,
      group: r["__EMPTY"],
      page: r["__EMPTY_1"],
      canonical: r["__EMPTY_2"],
      newTitle: r["__EMPTY_3"],
      newDesc: r["__EMPTY_5"],
      primaryKeyword: r["__EMPTY_7"],
      secondaryKeywords: r["__EMPTY_8"],
      priority: r["__EMPTY_10"],
      indexing: r["__EMPTY_11"],
      notes: r["__EMPTY_12"]
    });
  }
  return items;
}

function parseFixList(rawRows) {
  const items = [];
  for (let i = 2; i < rawRows.length; i++) {
    const r = rawRows[i];
    const id = r["Fix list: issues found on the live site, in priority order"];
    if (!id) continue;
    items.push({
      id,
      priority: r["__EMPTY"],
      area: r["__EMPTY_1"],
      issue: r["__EMPTY_2"],
      evidence: r["__EMPTY_3"],
      recommendedFix: r["__EMPTY_4"],
      owner: r["__EMPTY_5"]
    });
  }
  return items;
}

const mainPages = parseMetaSheet(mainSiteRaw);
const learningPages = parseMetaSheet(learningRaw);
const fixes = parseFixList(fixListRaw);

console.log('Main site pages parsed:', mainPages.length);
console.log('Learning pages parsed:', learningPages.length);
console.log('Fixes parsed:', fixes.length);

fs.writeFileSync('blueprint_parsed.json', JSON.stringify({
  mainPages,
  learningPages,
  fixes
}, null, 2));

console.log('Saved blueprint_parsed.json');
