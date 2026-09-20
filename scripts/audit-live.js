const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function audit() {
  console.log('=== AUDITING LIVE PRODUCTION: https://www.stockstrail.in/ ===\n');
  const res = await get('https://www.stockstrail.in/');
  const html = res.body;

  // 1. Status & Headers
  console.log('1. Status Code:', res.statusCode);
  console.log('2. X-Robots-Tag:', res.headers['x-robots-tag'] || 'None (Good - not blocking)');
  console.log('3. Content-Type:', res.headers['content-type']);
  console.log('4. Server:', res.headers['server']);

  // 2. Title
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  console.log('\n--- TITLE TAG ---');
  console.log(titleMatch ? titleMatch[1] : 'NOT FOUND');

  // 3. Meta Description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
  console.log('\n--- META DESCRIPTION ---');
  console.log(descMatch ? descMatch[1] : 'NOT FOUND');

  // 4. Canonical Tag
  const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["'](.*?)["']/i);
  console.log('\n--- CANONICAL TAG ---');
  console.log(canonicalMatch ? canonicalMatch[1] : 'NOT FOUND');

  // 5. Meta Robots
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["'](.*?)["']/i);
  console.log('\n--- META ROBOTS TAG ---');
  console.log(robotsMatch ? robotsMatch[1] : 'NOT FOUND');

  // 6. H1 Tags
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  console.log('\n--- H1 TAGS (Count: ' + h1Matches.length + ') ---');
  h1Matches.forEach((m, idx) => {
    const cleanText = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`H1 #${idx + 1}: ${cleanText}`);
  });

  // 7. Open Graph
  const ogMatches = [...html.matchAll(/<meta[^>]*property=["']og:(.*?)["'][^>]*content=["'](.*?)["']/gi)];
  console.log('\n--- OPEN GRAPH METADATA ---');
  ogMatches.forEach(m => console.log(`og:${m[1]} = ${m[2]}`));

  // 8. JSON-LD Schemas
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log('\n--- JSON-LD STRUCTURED DATA (Count: ' + jsonLdMatches.length + ') ---');
  jsonLdMatches.forEach((m, idx) => {
    console.log(`\n[JSON-LD Block #${idx + 1}]:`);
    try {
      const parsed = JSON.parse(m[1]);
      console.log(JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.log(m[1]);
    }
  });

  // 9. SSR Content Check
  console.log('\n--- SSR CONTENT VALIDATION ---');
  console.log('Contains "Stockstrail":', html.includes('Stockstrail'));
  console.log('Contains "Mutual Funds":', html.includes('Mutual Funds'));
  console.log('Contains "ARN-284122":', html.includes('ARN-284122'));
  console.log('HTML Byte Length:', html.length);
}

audit().catch(console.error);
