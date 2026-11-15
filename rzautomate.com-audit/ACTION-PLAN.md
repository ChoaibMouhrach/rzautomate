# Action Plan: rzautomate.com

Current score 84/100. Doing everything in phases 1 and 2 should lift it to about 92.

## Phase 1: Critical fixes (week 1)

| # | Action | Effort | Where |
|---|---|---|---|
| 1 | Redirect `www.rzautomate.com` to the apex with a 301 | 10 min | Cloudflare Redirect Rules |
| 2 | Redirect `http://` to `https://` (Always Use HTTPS) | 5 min | Cloudflare SSL/TLS settings |
| 3 | Replace or remove the placeholder homepage stats, results and testimonials | needs real data | `src/components/pages/home/content.ts` |
| 4 | Finish the legal review of the terms and privacy drafts | needs a lawyer | `src/components/pages/terms`, `privacy` |

## Phase 2: High-impact improvements (weeks 2 to 3)

| # | Action | Effort | Where |
|---|---|---|---|
| 5 | Render the last breadcrumb crumb without an `<a>` (use `<span aria-current="page">`); fixes Lighthouse SEO 92 to 100 on model and tool pages | 15 min | `src/components/ui/breadcrumbs.tsx` |
| 6 | Fix the model hero definition list structure | 15 min | `src/components/pages/models/[slug]/sections.tsx` |
| 7 | Darken the primary coral to about `#E03227` (4.5:1 with white) or switch to dark text on coral; stop using `/80` and `/85` white text on coral | 30 min | design tokens in `src/styles/globals.css` |
| 8 | Add `sameAs` (LinkedIn, GitHub) to the Organization | 10 min | `src/lib/site.ts` |
| 9 | Verify every model price against the provider and add a visible update schedule | 2 to 4 hours | `src/lib/models.ts` |
| 10 | Trim the 16 titles over 65 characters and the two 174-character descriptions | 30 min | page data files |

## Phase 3: Content and authority (month 2)

| # | Action | Effort |
|---|---|---|
| 11 | Publish an About page (founder, experience, how engagements work) | 1 day |
| 12 | Publish one to three real case studies with measured results, then restore the footer link | 1 to 2 days each |
| 13 | Add blog posts on AI automation topics tied to each service; review the three LMS and e-learning posts | ongoing |
| 14 | Add a short intro and decision guide to `/services` | 1 hour |
| 15 | Give model and tool pages their own share images | 1 day |
| 16 | Serve smaller service thumbnails (`srcset`, about 640 px) | 1 hour |

## Phase 4: Monitoring and iteration (ongoing)

| # | Action |
|---|---|
| 17 | Connect Google Search Console and submit the sitemap; add GA4 or Cloudflare analytics (update the privacy policy if you do) |
| 18 | Re-run Lighthouse on key pages after each deploy |
| 19 | Add a report-only Content-Security-Policy header, then enforce it |
| 20 | Keep the price-checked date current; review `llms.txt` whenever pages are added |
