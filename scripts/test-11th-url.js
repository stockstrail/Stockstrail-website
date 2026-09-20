const https = require('https');

const candidates = [
  'https://www.stockstrail.in/learning',
  'https://www.stockstrail.in/about/',
  'https://stockstrail.in/about',
  'https://stockstrail.in/calculators',
  'https://stockstrail.in/lets-talk',
  'https://www.stockstrail.in/learning/courses/fundamental-analysis-beginners'
];

candidates.forEach(u => {
  https.get(u, res => {
    console.log(`[${res.statusCode}] ${u} -> ${res.headers['location'] || '(No redirect)'}`);
  }).on('error', e => console.log(`[ERROR] ${u}: ${e.message}`));
});
