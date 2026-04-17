const KEY = 'a7f3c2e8d4b91f60e5c8d3f2a1b94e7d';
const HOST = 'www.getusallc.com';
const LANGS = ['bg', 'en'];

// Само на production deploy във Vercel
if (process.env.VERCEL_ENV !== 'production' && !process.env.INDEXNOW_FORCE) {
  console.log('IndexNow: skipping (not production)');
  process.exit(0);
}

import fs from 'node:fs';
import path from 'node:path';

const staticPaths = ['', '/contact', '/blog', '/tools/calculator', '/tools/tax-test', '/tools/state-comparison', '/privacy', '/terms', '/disclaimer'];

const postsDir = path.join(process.cwd(), 'src/lib/blog/posts');
const slugs = fs.readdirSync(postsDir)
  .filter(f => f.endsWith('.ts'))
  .map(f => f.replace(/\.ts$/, ''));

const urls = [];
for (const lang of LANGS) {
  for (const p of staticPaths) urls.push(`https://${HOST}/${lang}${p}`);
  for (const s of slugs) urls.push(`https://${HOST}/${lang}/blog/${s}`);
}

try {
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls,
    }),
  });
  console.log(`IndexNow: HTTP ${res.status} — ${urls.length} URLs submitted`);
  if (res.status >= 400) console.log('Body:', await res.text());
} catch (e) {
  console.log('IndexNow failed:', e.message);
}