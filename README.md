# RZ Automate

Astro site with React islands, deployed to Cloudflare.

```bash
bun install
bun run dev       # local dev server
bun run build     # static pages plus the Cloudflare worker, into dist/
bun run preview   # serve the build with wrangler
bun run check     # type-check .astro and .ts files
bun run deploy    # build and wrangler deploy
```

Set `PUBLIC_SITE_URL` to override the production origin used for canonicals, the sitemap and Open Graph URLs.
