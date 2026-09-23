import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
const routes = JSON.parse(readFileSync('scripts/routes.json', 'utf8'));
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
for (const route of routes) {
  const html = readFileSync(`out${route}index.html`, 'utf8');
  assert.match(html, /<h1[ >]/, `Heading: ${route}`);
  assert.match(html, /rel="canonical"/, `Canonical: ${route}`);
  for (const [, attr, url] of html.matchAll(/\b(href|src)="([^"#]+)"/g)) {
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    assert.ok(!base || url.startsWith(`${base}/`), `${route}: ${attr} missing base path: ${url}`);
    const path = url.slice(base.length).split(/[?#]/)[0];
    assert.ok(existsSync(`out${path.endsWith('/') ? `${path}index.html` : path}`), `${route}: broken ${attr} ${url}`);
  }
  assert.ok(!html.includes('http://'), `Mixed content in ${route}`);
  if (route.startsWith('/gmetronome/')) {
    assert.ok(!html.includes(`href="${base}/privacy/"`), 'GMetronome privacy namespace');
    assert.ok(!html.includes(`href="${base}/support/"`), 'GMetronome support namespace');
  }
}
const home = readFileSync('out/index.html', 'utf8');
assert.ok(home.includes('https://apps.apple.com/kz/app/hangugo-korean-practice/id6799656298'));
assert.ok(!home.includes('https://play.google.com'));
assert.ok(!home.includes('Coming soon to the App Store'));
assert.ok(!existsSync('out/gmetronome/terms/index.html'));
assert.ok(!existsSync('out/apps/index.html'));
console.log(`PASS: ${routes.length} exported routes, local links/assets, metadata, store links and GMetronome namespaces (base=${base || '/'}).`);
