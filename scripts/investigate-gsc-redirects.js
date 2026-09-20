const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function trace(urlStr) {
  return new Promise((resolve) => {
    let current = urlStr;
    const chain = [];

    function step(target) {
      const isHttps = target.startsWith('https:');
      const client = isHttps ? https : http;

      const req = client.request(target, { method: 'HEAD', headers: { 'User-Agent': 'Googlebot' } }, (res) => {
        const code = res.statusCode;
        const loc = res.headers['location'] || null;
        chain.push({ url: target, statusCode: code, location: loc });

        if (code >= 300 && code < 400 && loc) {
          const next = loc.startsWith('http') ? loc : new URL(loc, target).toString();
          if (chain.length > 8) {
            resolve({ initialUrl: urlStr, finalUrl: next, finalStatus: code, hops: chain });
          } else {
            step(next);
          }
        } else {
          resolve({ initialUrl: urlStr, finalUrl: target, finalStatus: code, hops: chain });
        }
      });

      req.on('error', (err) => {
        chain.push({ url: target, error: err.message });
        resolve({ initialUrl: urlStr, finalUrl: target, finalStatus: null, error: err.message, hops: chain });
      });

      req.end();
    }

    step(current);
  });
}

function searchCodebaseForLink(pattern) {
  const allFiles = [];
  function scan(dir) {
    fs.readdirSync(dir).forEach(f => {
      const p = path.join(dir, f);
      if (fs.statSync(p).isDirectory()) {
        if (!f.startsWith('.') && f !== 'node_modules' && f !== '.next') scan(p);
      } else if (/\.(tsx|ts|js|jsx)$/.test(f)) {
        allFiles.push(p);
      }
    });
  }
  scan(path.join(process.cwd(), 'src'));

  const matches = [];
  allFiles.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    if (content.includes(pattern)) {
      matches.push(path.relative(process.cwd(), f));
    }
  });
  return matches;
}

async function run() {
  const urls = [
    'https://www.stockstrail.in/calculators?tab=SIP',
    'https://www.stockstrail.in/calculators?tab=LUMPSUM',
    'https://stockstrail.in/services',
    'https://www.stockstrail.in/contact',
    'http://stockstrail.in/',
    'https://stockstrail.in/',
    'http://www.stockstrail.in/',
    'https://learning.stockstrail.in/courses/indian-income-tax-basics',
    'https://learning.stockstrail.in/',
    'https://stockstrail.in/blog/term-insurance-vs-life-insurance-india-2026-which-one-truly-protects-your-family-stockstrail',
    'https://www.stockstrail.in/learning',
    'https://www.stockstrail.in/about/'
  ];

  console.log('=== INVESTIGATING GSC REDIRECT URLS ===\n');

  for (const u of urls) {
    const res = await trace(u);
    console.log(`URL: ${u}`);
    console.log(`Initial Status: ${res.hops[0] ? res.hops[0].statusCode : 'N/A'}`);
    console.log(`Location: ${res.hops[0] ? res.hops[0].location : 'None'}`);
    console.log(`Final Destination: ${res.finalUrl} (HTTP ${res.finalStatus})`);
    console.log(`Total Hops: ${res.hops.length}`);
    res.hops.forEach((h, i) => console.log(`  Hop ${i + 1}: [${h.statusCode}] ${h.url} -> ${h.location || '(End)'}`));
    console.log('------------------------------------------------');
  }
}

run().catch(console.error);
