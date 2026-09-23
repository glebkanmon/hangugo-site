import assert from 'node:assert/strict';
const custom = process.argv.includes('--custom');
const hangugoPaths = ['', 'privacy/', 'support/', 'terms/'];
const checks = hangugoPaths.map(path => ({ url: `https://glebkanmon.github.io/hangugo-site/${path}`, target: custom ? `https://hangugo.app/${path}` : null }));
for (const path of ['', 'support/', 'privacy/']) checks.push({ url: `https://gmetronome.dawongang74.chatgpt.site/${path}`, target: null });
if (custom) for (const path of ['', 'support/', 'privacy/', 'terms/', 'gmetronome/', 'gmetronome/support/', 'gmetronome/privacy/', 'classroom-bot/', 'classroom-bot/privacy/']) checks.push({ url: `https://hangugo.app/${path}`, target: `https://hangugo.app/${path}` });
for (const { url, target } of checks) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${url}: HTTP ${response.status}`);
  if (target) assert.equal(response.url, target, `${url}: unexpected final path`);
  assert.match(response.headers.get('content-type') ?? '', /text\/html/);
  console.log(`PASS ${url} → ${response.url}`);
}
