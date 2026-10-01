# Daisies Nails & Beauty

Production-ready bilingual landing page for Daisies Nails & Beauty in Mannheim.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The static production output is written to `dist/`.

## Content updates

- Business details and links: `src/data/business.ts`
- Services: `src/data/services.ts` and `src/i18n/`
- Reviews: `src/data/reviews.ts` and `src/i18n/`
- Gallery: `src/data/gallery.ts`
- German and English copy: `src/i18n/de.ts`, `src/i18n/en.ts`
- Design tokens and responsive styles: `src/styles/global.css`

## Cloudflare Workers (Import a repository)

This project is configured for Workers Static Assets through `wrangler.jsonc`.
In **Workers & Pages → Create application → Import a repository**, select this
repository and use:

- Framework preset: None / no preset
- Build command: `pnpm run build`
- Deploy command: `pnpm exec wrangler deploy`
- Build output directory (configured in Wrangler): `dist`
- Root directory: `/`
- Node.js: `22`

Wrangler reads `dist/` from `wrangler.jsonc`; the Workers import form therefore
does not need a separate build output directory. No environment variables or
server runtime are required.
