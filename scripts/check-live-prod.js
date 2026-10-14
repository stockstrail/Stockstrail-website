const https = require('https');

function checkSite(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' } }, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(`\n=== Checking: ${url} ===`);
      console.log('HTTP Status:', res.statusCode);
      const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
      console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
      const canonicalMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
      console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'No canonical');
    });
  }).on('error', e => console.error(`${url} error:`, e.message));
}

checkSite('https://www.stockstrail.in');
checkSite('https://learning.stockstrail.in');
