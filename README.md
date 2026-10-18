# ScrapMF — Documentation site

[Docusaurus](https://docusaurus.io/) website documenting the
[ScrapMF CLI](https://github.com/Scrap-MF/ScrapMF-CLI): a safe, interactive
archiver for social media galleries.

**Languages:** English (source, `docs/`) · Español (`i18n/es/`)

## Requirements

- Node.js ≥ 20
- **pnpm 11** (the project pins its version via the `packageManager` field).
  Install it with `npm install -g pnpm` or the official installer:
  `curl -fsSL https://get.pnpm.io/install.sh | sh -`

## Local development

```bash
pnpm install
pnpm start            # dev server at http://localhost:3000 (English)
pnpm run start -- --locale es   # Spanish dev server
```

Content and CSS changes hot-reload. Changes to `docusaurus.config.ts`
require a server restart.

## Production build

```bash
pnpm run build        # generates build/ (EN) and build/es/ (ES)
pnpm run serve        # preview the production build locally
```

## Project layout

```
docs/                     # English source content
├── intro.md
├── getting-started/      # installation · quickstart
├── cli-reference/        # scrape · config · doctor & setup
├── configuration/        # config.toml · sites/ · profiles/
├── cookies/              # named cookie profiles
├── interactive-mode/
├── backend/              # pinned gallery-dl
├── troubleshooting/
└── faq.md

i18n/es/docusaurus-plugin-content-docs/current/
                          # Spanish translation (mirrors docs/)
static/img/               # ScrapMF icon + favicon
```

## Deployment

GitHub Pages via GitHub Actions on push to `main`
(`.github/workflows/deploy.yml`). The site is served from a **custom
domain**: before going live, set the real domain in:

1. `docusaurus.config.ts` → `SITE_URL`
2. `static/CNAME`
3. The domain's DNS records pointing to GitHub Pages

## Contributing translations

Edit the English source under `docs/`, then mirror changes into the
matching file under `i18n/es/docusaurus-plugin-content-docs/current/`.
Never edit generated `build/` files.
