const https = require('https');

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function auditSitemap() {
  console.log('Fetching live sitemap from https://www.stockstrail.in/sitemap.xml ...\n');
  const res = await fetch('https://www.stockstrail.in/sitemap.xml');
  const xml = res.body;

  const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1].trim());

  console.log(`1. Total <loc> tags found: ${locMatches.length}\n`);

  // Check for duplicates
  const seen = new Set();
  const duplicates = [];
  locMatches.forEach(url => {
    if (seen.has(url)) {
      duplicates.push(url);
    }
    seen.add(url);
  });

  console.log('2. Duplicates found:', duplicates.length > 0 ? duplicates : 'None (0 duplicates)\n');

  console.log('3. Full URL list:');
  locMatches.forEach((url, i) => {
    console.log(`[${i + 1}] ${url}`);
  });

  // Verify status of every URL
  console.log('\n4. Verifying HTTP status of each URL:');
  const statusResults = [];
  for (let i = 0; i < locMatches.length; i++) {
    const u = locMatches[i];
    try {
      const pageRes = await fetch(u);
      statusResults.push({ url: u, status: pageRes.statusCode });
      if (pageRes.statusCode !== 200) {
        console.log(`⚠️ Non-200: [${pageRes.statusCode}] ${u}`);
      }
    } catch (e) {
      statusResults.push({ url: u, status: 'ERROR: ' + e.message });
      console.log(`❌ Error: ${u} - ${e.message}`);
    }
  }

  const all200 = statusResults.every(r => r.status === 200);
  console.log(`\nAll ${statusResults.length} URLs returned HTTP 200 OK: ${all200}`);
}

auditSitemap().catch(console.error);
