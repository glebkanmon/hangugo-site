import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

// Keep a complete prefixed export available while Pages changes its domain routing.
const pagesBasePath = process.env.PAGES_BASE_PATH ?? '/hangugo-site';
if (!['', '/hangugo-site'].includes(pagesBasePath)) throw new Error('Unexpected Pages base path');
const custom = pagesBasePath === '';
const legacyBase = '/hangugo-site';
const build = (basePath, siteUrl) => execFileSync('npm', ['run', 'build'], {
  stdio: 'inherit', env: { ...process.env, NEXT_PUBLIC_BASE_PATH: basePath, SITE_URL: siteUrl },
});
rmSync('.pages-legacy', { recursive: true, force: true });
build(legacyBase, custom ? 'https://hangugo.app' : 'https://glebkanmon.github.io/hangugo-site');
cpSync('out', '.pages-legacy', { recursive: true });
if (custom) build('', 'https://hangugo.app');
mkdirSync('out/hangugo-site', { recursive: true });
cpSync('.pages-legacy', 'out/hangugo-site', { recursive: true });
if (custom) {
  // Explicit fallback if a client retains the old prefix on the custom host.
  const routes = JSON.parse(readFileSync('scripts/routes.json', 'utf8'));
  for (const route of routes) {
    writeFileSync(`out/hangugo-site${route}index.html`, `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${route}"><link rel="canonical" href="https://hangugo.app${route}"><title>Page moved</title></head><body><a href="${route}">Continue to this page</a></body></html>`);
  }
}
writeFileSync('out/.nojekyll', '');
rmSync('.pages-legacy', { recursive: true, force: true });
execFileSync('node', ['scripts/check-export.mjs'], { stdio: 'inherit', env: { ...process.env, NEXT_PUBLIC_BASE_PATH: custom ? '' : legacyBase } });
