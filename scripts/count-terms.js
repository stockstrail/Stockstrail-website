const fs = require('fs');
const path = require('path');

const terms = [
  'Stockstrail',
  'Stockstrail Financial',
  'Stockstrail.in',
  'Stockstrail – Smart Investing',
  'Stockstrail - Smart Investing',
  'Stockstrail – Official Website',
  'Stockstrail - Official Website',
  'Vikrant Bhardwaj',
  'ARN-284122',
  'ARN 284122'
];

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else if (/\.(tsx|ts|js|jsx|json|md)$/.test(file)) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllFiles(path.join(process.cwd(), 'src'));
console.log('Total source files scanned:', allFiles.length);

terms.forEach(term => {
  let count = 0;
  const filesWithTerm = [];
  allFiles.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    const regex = new RegExp(term.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'gi');
    const matches = content.match(regex);
    if (matches) {
      count += matches.length;
      filesWithTerm.push(path.relative(process.cwd(), f));
    }
  });
  console.log(`\n=== Term: "${term}" | Total Count: ${count} in ${filesWithTerm.length} files ===`);
  filesWithTerm.slice(0, 8).forEach(file => console.log('  - ' + file));
  if (filesWithTerm.length > 8) console.log(`  ... and ${filesWithTerm.length - 8} more files`);
});
