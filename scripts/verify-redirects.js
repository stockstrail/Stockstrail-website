const https = require('https');
const http = require('http');

function trace(urlStr) {
  return new Promise((resolve) => {
    let currentUrl = urlStr;
    const history = [];

    function step(targetUrl) {
      const isHttps = targetUrl.startsWith('https:');
      const client = isHttps ? https : http;

      const req = client.request(targetUrl, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
        const code = res.statusCode;
        const loc = res.headers['location'] || null;

        history.push({ url: targetUrl, statusCode: code, location: loc });

        if (code >= 300 && code < 400 && loc) {
          const next = loc.startsWith('http') ? loc : new URL(loc, targetUrl).toString();
          step(next);
        } else {
          resolve({ initialUrl: urlStr, finalUrl: targetUrl, finalStatusCode: code, hops: history });
        }
      });

      req.on('error', (err) => {
        history.push({ url: targetUrl, error: err.message });
        resolve({ initialUrl: urlStr, finalUrl: targetUrl, finalStatusCode: null, hops: history });
      });

      req.end();
    }

    step(currentUrl);
  });
}

async function run() {
  const list = [
    'http://stockstrail.in',
    'https://stockstrail.in',
    'http://www.stockstrail.in',
    'https://www.stockstrail.in'
  ];

  for (const item of list) {
    const res = await trace(item);
    console.log(`\n==============================================`);
    console.log(`Initial URL : ${res.initialUrl}`);
    console.log(`Final URL   : ${res.finalUrl}`);
    console.log(`Status Code : ${res.finalStatusCode}`);
    console.log(`Total Hops  : ${res.hops.length}`);
    console.log(`Chain Breakdown:`);
    res.hops.forEach((h, idx) => {
      console.log(`  Hop ${idx + 1}: [HTTP ${h.statusCode}] ${h.url} -> Location: ${h.location || '(Reached Final 200 OK)'}`);
    });
  }
}

run().catch(console.error);
