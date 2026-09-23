# Verification — September 23, 2026

## Completed locally

- `npm ci`: passed. No runtime dependencies added.
- `npm run lint`: passed.
- `npm run build`: passed (network access needed for existing Google Fonts).
- `PAGES_BASE_PATH='' npm run build:pages`: passed, including root export audit.
- `PAGES_BASE_PATH=/hangugo-site npm run build:pages`: passed, including legacy export audit.
- All nine required/optional routes exported; internal links/assets, canonicals,
  GMetronome namespacing and correct store availability checked.
- Headless Chromium on all nine routes at 320, 375, 390, 430, 768, 1024, 1440 px:
  63 cases, zero horizontal overflow, one H1 each, zero page errors and failed resources.
- Hangugo, GMetronome and Classroom privacy screenshots visually inspected at
  mobile/desktop sizes. Keyboard first focus reaches Skip to content on Hangugo.
- Custom-root artifact's prefixed privacy/support/terms fallback pages resolve to
  matching root pages in Chromium.
- Pattern scan of source and static output found no secret matches. Reference
  repository secret files were not read/copied. This is not a guarantee against
  every possible secret format.
- `git diff --check`: passed. Existing Hangugo legal body content unchanged.

Local runtime: Node 24.19.0; workflow explicitly validates with Node 22.
Browser tooling was installed in a temporary directory, not added to dependencies.

## Existing production checked before migration

HTTP 200 with normal certificate verification:

- https://glebkanmon.github.io/hangugo-site/
- https://glebkanmon.github.io/hangugo-site/support/
- https://glebkanmon.github.io/hangugo-site/privacy/
- https://glebkanmon.github.io/hangugo-site/terms/
- https://gmetronome.dawongang74.chatgpt.site/
- https://gmetronome.dawongang74.chatgpt.site/support/ (normalizes trailing slash)
- https://gmetronome.dawongang74.chatgpt.site/privacy/ (normalizes trailing slash)
- https://apps.apple.com/kz/app/hangugo-korean-practice/id6799656298
- GMetronome ID 1566795992 via https://apps.apple.com/us/app/id1566795992,
  resolving to its GMetronome listing. The generic App Store URL timed out on the
  first check; the original source URL is preserved.

Pages API confirmed `build_type=workflow`, no custom domain, HTTPS enforced.
Both read-only reference repositories' local HEADs match remote main.

## Not yet completed

- Reviewed PR merge and deployment of the new code via the main Pages workflow.
- Production checks of the newly deployed pages on the existing host.
- Spaceship DNS configuration / GitHub Pages custom-domain activation.
- Valid hangugo.app TLS and production legacy HTTP redirect/path verification.
- Manual store URL changes (deliberately outside this implementation).
- Google OAuth submission/verification and external provider policy validation.

See README for the custom-domain availability gate: local tests cannot prove
zero-outage DNS/TLS transition. Do not mark the migration complete until all
production checks succeed.
