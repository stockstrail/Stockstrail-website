/**
 * Ping and Submit Sitemaps to Google & Bing
 * Run: node scripts/submit-sitemap.js
 */

const https = require('https');
const http = require('http');

const SITEMAP_URL = 'https://www.stockstrail.in/sitemap.xml';
const LEARNING_SITEMAP_URL = 'https://learning.stockstrail.in/sitemap.xml';

const targets = [
  {
    name: 'Google (Sitemap Ping)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
  {
    name: 'Google (Learning Subdomain Sitemap Ping)',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(LEARNING_SITEMAP_URL)}`,
  },
  {
    name: 'Bing (Sitemap Ping)',
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
];

console.log('🚀 Pinging search engines with Stockstrail sitemaps...\n');

targets.forEach((target) => {
  const client = target.url.startsWith('https') ? https : http;
  
  client
    .get(target.url, (res) => {
      console.log(`✅ [${target.name}]: HTTP Status ${res.statusCode}`);
    })
    .on('error', (err) => {
      console.warn(`⚠️ [${target.name}]: ${err.message}`);
    });
});
