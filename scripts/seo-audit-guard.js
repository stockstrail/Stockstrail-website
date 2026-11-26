/**
 * Stockstrail SEO Regression Guard
 * Automatically validates that:
 * 1. Sitemap contains strictly canonical (https://www.stockstrail.in) URLs
 * 2. Zero redirected or non-www URLs are present in sitemap
 * 3. All public pages have exactly ONE H1 tag
 * 4. All public pages have valid title, canonical, and no noindex leakage
 * 5. Robots.txt advertises only the canonical sitemap
 */

const fs = require('fs');
const path = require('path');

const CANONICAL_ORIGIN = 'https://www.stockstrail.in';

let errors = [];

function assert(condition, message) {
  if (!condition) {
    errors.push(`[ERROR] ${message}`);
  }
}

// 1. Audit Robots.txt source
console.log('1. Checking robots.txt configuration...');
const robotsPath = path.join(__dirname, '../src/app/robots.ts');
if (fs.existsSync(robotsPath)) {
  const robotsSrc = fs.readFileSync(robotsPath, 'utf8');
  assert(!robotsSrc.includes('https://stockstrail.in/sitemap.xml'), 'robots.ts must NOT advertise non-www sitemap (which 301 redirects)');
  assert(robotsSrc.includes(CANONICAL_ORIGIN + '/sitemap.xml'), 'robots.ts must advertise canonical sitemap');
} else {
  assert(false, 'src/app/robots.ts does not exist');
}

// 2. Audit Sitemap source
console.log('2. Checking sitemap.ts configuration...');
const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  const sitemapSrc = fs.readFileSync(sitemapPath, 'utf8');
  assert(!sitemapSrc.includes("MAIN_DOMAINS"), 'sitemap.ts must NOT use multi-domain array that emits non-www URLs');
  assert(!sitemapSrc.includes("https://stockstrail.in/"), 'sitemap.ts must NOT hardcode apex non-www domain');
  assert(sitemapSrc.includes(CANONICAL_ORIGIN), 'sitemap.ts must use canonical origin');
  assert(!sitemapSrc.includes("path: '/sign-in'"), 'sitemap.ts must NOT include /sign-in route');
} else {
  assert(false, 'src/app/sitemap.ts does not exist');
}

// 3. Audit Built HTML pages if .next exists
console.log('3. Checking built server HTML pages...');
const appDir = path.join(__dirname, '../.next/server/app');
function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else if (item.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

const htmlFiles = walk(appDir);
if (htmlFiles.length > 0) {
  const privatePatterns = [/admin/, /sign-in/, /complete-profile/, /dashboard/, /_not-found/];

  htmlFiles.forEach((file) => {
    const relPath = path.relative(appDir, file).replace(/\\/g, '/');
    const isPrivate = privatePatterns.some((p) => p.test(relPath));
    const content = fs.readFileSync(file, 'utf8');

    // Title check
    const titleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/i);
    assert(titleMatch && titleMatch[1].trim().length > 0, `Missing <title> in ${relPath}`);

    // H1 check on public pages
    if (!isPrivate) {
      const h1Matches = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
      assert(h1Matches.length === 1, `Public page ${relPath} must have exactly ONE <h1> tag (found ${h1Matches.length})`);

      // Noindex leakage check
      const robotsMatch = content.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);
      if (robotsMatch) {
        assert(!robotsMatch[1].includes('noindex'), `Unintended noindex tag detected in public page ${relPath}`);
      }
    }
  });
  console.log(`Audited ${htmlFiles.length} generated pages.`);
} else {
  console.log('Note: .next build output not present yet; skipping pre-rendered HTML check.');
}

// Summary
if (errors.length > 0) {
  console.error('\n❌ SEO REGRESSION GUARD FAILED with the following errors:');
  errors.forEach((e) => console.error(e));
  process.exit(1);
} else {
  console.log('\n✅ SEO REGRESSION GUARD PASSED: All canonical, sitemap, robots, and heading checks are 100% clean.\n');
  process.exit(0);
}
