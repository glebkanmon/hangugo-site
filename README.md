# Hangugo website

Hangugo remains the product at the root. GMetronome has a separate product section;
Korean Classroom Bot has only a technical homepage and privacy policy. Next.js static
export is published by GitHub Actions to GitHub Pages in `glebkanmon/hangugo-site`.
The existing GMetronome deployment is independent and must remain online.

## Development and build

Use Node 22.13+ (CI uses Node 22).

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run check:export
```

`npm run dev` serves the root at localhost:3000. `out/` is the static export; serve it
with a static HTTP server, not `next start`. Existing `next/font` integration downloads
Manrope and Noto Sans KR during the build and serves the fonts locally afterwards.
Network access to Google Fonts is required during build, not when browsing the site.
No backend, database, authentication or new analytics are added to the website.

## Route map and Store URL mapping

| Product | Purpose | Final URL (use only after production verification) |
| --- | --- | --- |
| Hangugo | Marketing | https://hangugo.app/ |
| Hangugo | Support | https://hangugo.app/support/ |
| Hangugo | Privacy | https://hangugo.app/privacy/ |
| Hangugo | Terms | https://hangugo.app/terms/ |
| GMetronome | Marketing | https://hangugo.app/gmetronome/ |
| GMetronome | Support | https://hangugo.app/gmetronome/support/ |
| GMetronome | Privacy | https://hangugo.app/gmetronome/privacy/ |
| Classroom Bot | OAuth homepage | https://hangugo.app/classroom-bot/ |
| Classroom Bot | OAuth privacy | https://hangugo.app/classroom-bot/privacy/ |

There is no `/apps/` catalog and no GMetronome Terms page. Classroom Bot is excluded
from public app configuration and product navigation. Hangugo iOS uses the published
App Store URL; Android stays noninteractive until `apps.hangugo.googlePlay` is set.
Store listings are changed manually only after the new domain passes all checks.

## Architecture and adding another app

`lib/site.ts` holds typed public app configuration and metadata helpers.
`app/site-components.tsx` shares navigation, footer, legal-page layout and Other apps.
The Korean word card remains on Hangugo; GMetronome retains its original dial, meter,
feature copy, support and privacy content, with its own scoped theme.
To add another app, add its config and `app/<slug>/page.tsx`, `support/page.tsx`, and
`privacy/page.tsx`; use shared components with that product and register routes in
`lib/site.ts` and `scripts/routes.json`. Keep product links namespaced. Add a directory
only when more than three other apps make the compact section insufficient.

## GitHub Pages deployment and custom domain architecture

`.github/workflows/pages.yml` verifies pull requests without deploying. Only `main`
can deploy, after lint and both path modes are checked. Merge is a manual review step.
After merge, Actions uses `actions/configure-pages@v5` to read the actual Pages
`base_path` before building; no manual hardcoded production switch is needed.

- No custom domain: `/hangugo-site` base path and github.io canonical URLs.
- Custom domain `hangugo.app`: root base path and hangugo.app canonical URLs.
- Plain `npm run build`: root preview with hangugo.app metadata.
- Override `NEXT_PUBLIC_BASE_PATH` and `SITE_URL` together for a standalone build.
- `assetPrefix` is unnecessary: Next applies `basePath` to generated assets and Links.
- Favicons explicitly use that same base path; sitemap, robots and per-page metadata
  use the active site URL.

`npm run build:pages` defaults safely to the legacy mode. Set `PAGES_BASE_PATH=''`
for the custom-domain artifact or `/hangugo-site` for the existing deployment.
It includes a complete prefixed export at `out/hangugo-site/`. Before the cutover,
the normal project URL works with the artifact root. If the domain setting changes
before a rebuild, the nested copy keeps the old prefixed links/assets reachable on
the new host. After a root rebuild, explicit HTML redirect pages at the prefixed
paths lead to corresponding root routes; legacy assets remain available there.
These fallback redirects are HTML redirects, not claimed HTTP redirects. GitHub
controls the HTTP redirect from github.io and its exact path behavior must be
verified in production after configuration.

GitHub Actions publishing ignores CNAME files; none is added. The custom domain is
set through Settings → Pages. See [GitHub's domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Legacy compatibility and deployment gate

**DO NOT REMOVE LEGACY URL COMPATIBILITY WITHOUT FIRST UPDATING ALL STORE LISTINGS.**

Never disable the old GMetronome site or change its repository/deployment. Never
change App Store Connect or Google Play Console automatically. Keep the current
Pages deployment until the reviewed implementation is merged and its deployment
has passed checks on the existing host.

The artifact handles paths, not DNS or certificate issuance. GitHub may redirect
the old host as soon as the custom domain is saved. Because `.app` requires HTTPS,
a not-yet-issued certificate can make BOTH the new host and redirected legacy URLs
unreachable. GitHub Pages alone does not provide a proven atomic, zero-downtime
DNS/TLS cutover here. **Do not switch the custom-domain setting while this strict
availability requirement remains unverified.** Domain verification alone does not
pre-issue a certificate. If a zero-outage guarantee is mandatory, a separately
approved staged hosting/edge arrangement is needed; it is outside this change.
Do not interpret the checklist below as evidence that this risk has been resolved.

## Manual Spaceship / GitHub cutover checklist

1. Merge the reviewed PR when ready. Wait for Pages Actions success. Verify all
   legacy routes below and the added product pages on the existing github.io host.
2. In the GitHub account's Settings → Pages, verify ownership of `hangugo.app` using
   GitHub's exact TXT challenge. Create that TXT record in Spaceship and retain it.
   Do not invent the challenge value. See [domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).
3. Resolve the availability gate above before activating the following steps.
   GitHub recommends saving the custom domain before pointing DNS at Pages.
4. In `hangugo-site` Settings → Pages, retain **GitHub Actions** as the source and
   set **Custom domain** to `hangugo.app` (no scheme/path). Do not disable Pages.
5. In Spaceship DNS, remove conflicting parking/forwarding records for `@`/`www`
   only; retain unrelated MX/TXT records. Add these current official GitHub values:

   | Type | Host | Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | glebkanmon.github.io |

   Optional IPv6: add all four AAAA records at `@`: `2606:50c0:8000::153`,
   `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
   Remove conflicting old AAAA records rather than leaving them pointing elsewhere.
   Use the normal/default TTL. Do not use wildcard records or include a repo path
   in CNAME. Values checked against the linked official GitHub documentation on
   September 23, 2026; recheck them if executing this much later.
6. Wait for DNS propagation and Pages DNS check/certificate issuance. Check
   `dig hangugo.app A`, `dig hangugo.app AAAA`, `dig www.hangugo.app CNAME`.
   GitHub says DNS and HTTPS availability may take up to 24 hours. Do not bypass
   certificate errors. Select **Enforce HTTPS** when available. See
   [GitHub HTTPS troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).
7. Run the Pages workflow on `main` after the domain setting changes so the root
   export and canonical URLs take effect. Verify valid TLS, all routes, CSS/JS,
   fonts, favicon, mobile layouts and absence of mixed content.
8. Run `node scripts/check-production.mjs --custom`. Every legacy URL must finish
   successfully at the corresponding hangugo.app route, with no 404 or TLS errors.
   Also open them in a browser; curl cannot follow an HTML fallback redirect.
9. Only after ALL production checks pass, manually update store URLs using the
   mapping above and configure OAuth homepage/privacy URLs. Keep compatibility.

### Rollback

Preserve previous workflow artifacts/commit. If paths regress, redeploy the last
known-good compatible artifact. Removing the custom-domain setting returns Pages
to project-host mode, but DNS and cached redirects are not atomic: rebuild in legacy
mode and verify the old host immediately. Do not change stores until stability is
confirmed; do not promise instant rollback of cached DNS or redirects.

## Classroom privacy source and OAuth readiness

Policy was checked against `korean-classroom-bot` commit
`75aed98164549ee4e46ef312b46c24d8c0e508a6`: README, Classroom client, sync,
Supabase repository/migrations, delivery and DeepSeek prompt. It describes the
three actual scopes, no separate submission retrieval, stored material metadata,
optional text enrichment, and manual retention/deletion. No secret files are read
or copied. Public contact: `support@hangugo.app` (operator-provided).

Before OAuth submission, configure the developer/contact email in Google Cloud,
verify the authorized domain, confirm private Telegram membership and explicit
consent for provider transfers, and verify DeepSeek's actual account data-handling
terms/settings against Google's no-generalized-training restriction. Source code
alone cannot certify a provider's retention/training practices. The policy states
the operator's Limited Use obligations; it does not claim Google verification.
See [Google API data policy](https://developers.google.com/terms/api-services-user-data-policy)
and [Workspace data policy](https://developers.google.com/workspace/workspace-api-user-data-developer-policy).

GMetronome content reference: `GMetronome_site` commit
`7a3cf9198e735b8c344d245ba401789436f48174`; original support issue destination,
App Store ID, legal meaning and effective date are preserved.

© 2026 Gleb Monetchikov.
