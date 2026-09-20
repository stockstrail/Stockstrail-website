const https = require('https');
const http = require('http');

function check(urlStr) {
  return new Promise((resolve) => {
    let current = urlStr;
    const history = [];

    function step(target) {
      const isHttps = target.startsWith('https:');
      const client = isHttps ? https : http;

      const req = client.request(target, { method: 'HEAD', headers: { 'User-Agent': 'Googlebot' } }, (res) => {
        const code = res.statusCode;
        const loc = res.headers['location'] || null;

        history.push({ url: target, statusCode: code, location: loc });

        if (code >= 300 && code < 400 && loc) {
          const next = loc.startsWith('http') ? loc : new URL(loc, target).toString();
          if (history.length > 8) {
            resolve({ initialUrl: urlStr, finalUrl: next, finalStatus: code, hops: history });
          } else {
            step(next);
          }
        } else {
          resolve({ initialUrl: urlStr, finalUrl: target, finalStatus: code, hops: history });
        }
      });

      req.on('error', (err) => {
        history.push({ url: target, error: err.message });
        resolve({ initialUrl: urlStr, finalUrl: target, finalStatus: null, error: err.message, hops: history });
      });

      req.end();
    }

    step(current);
  });
}

async function run() {
  const urls = [
    'https://www.stockstrail.in/Home.html',
    'https://www.stockstrail.in/blog/why-2025-is-the-best-time-to-secure-your-family-s-health-thanks-to-new-government-benefits-6293880652213032005',
    'http://stockstrail.in/Home.html',
    'https://stockstrail.in/Home.html',
    'https://www.stockstrail.in/services/insurance',
    'https://stockstrail.in/services/insurance',
    'https://www.stockstrail.in/services/mutual-funds',
    'https://www.stockstrail.in/$'
  ];

  console.log('=== AUDITING 8 EXACT LIVE URLS ===\n');

  for (const u of urls) {
    const res = await check(u);
    console.log(`Initial URL : ${res.initialUrl}`);
    console.log(`Initial Code: ${res.hops[0] ? res.hops[0].statusCode : 'N/A'}`);
    console.log(`Final URL   : ${res.finalUrl}`);
    console.log(`Final Code  : ${res.finalStatus}`);
    console.log(`Total Hops  : ${res.hops.length - 1}`);
    console.log(`Chain Breakdown:`);
    res.hops.forEach((h, i) => {
      console.log(`  Hop ${i + 1}: [${h.statusCode}] ${h.url} -> ${h.location || '(End)'}`);
    });
    console.log('--------------------------------------------------\n');
  }
}

run().catch(console.error);
