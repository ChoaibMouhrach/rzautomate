# SEO Audit: rzautomate.com

Audited: November 14, 2026. Live site (https://rzautomate.com) plus the local production build (52 pages).
Business type: B2B service agency (AI automation) with programmatic comparison content (AI models, automation tools) and a free calculator.

## SEO Health Score: 84 / 100

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 86 |
| Content Quality | 23% | 68 |
| On-Page SEO | 20% | 90 |
| Schema / Structured Data | 10% | 88 |
| Performance (CWV) | 10% | 98 |
| AI Search Readiness | 10% | 88 |
| Images | 5% | 82 |

The technical foundation is excellent. What holds the score back is content and trust: placeholder homepage proof, no real case studies or About page, and a blog that is off-topic for the positioning.

## Top 5 issues

1. **High: `www.` and plain `http://` both return 200 with no redirect.** Four hostnames serve the same site. Canonical tags point to the apex, which limits the damage, but redirects are the correct fix.
2. **High: homepage proof is placeholder.** `src/components/pages/home/content.ts` marks the stats, results and testimonials as placeholders to replace before launch. They are live.
3. **Medium: white text on the coral brand colour fails WCAG AA** (3.47:1, needs 4.5:1). Hits the primary buttons and pills on every page.
4. **Medium: model pages and tool pages have two crawlability and accessibility bugs.** An `<a>` with no `href` (the last breadcrumb crumb) fails "links are not crawlable" and takes both page types from 100 to 92 on Lighthouse SEO. The model hero `<dl>` is also invalid markup.
5. **Medium: thin trust and authority signals.** No About page, no case studies, an empty `sameAs` on the Organization, and only four blog posts, mostly about LMS and e-learning.

## Top 5 quick wins

1. Add 301 redirects: `www` to apex and `http` to `https` (Cloudflare Redirect Rules or "Always Use HTTPS").
2. Give the last breadcrumb crumb no `<a>` (use a `<span aria-current="page">`).
3. Fix the model hero markup so each `<dt>`/`<dd>` pair sits directly inside the `<dl>`.
4. Darken the primary coral to about `#E03227` (4.5:1 with white) or use dark text on coral.
5. Add the LinkedIn and GitHub profiles (already used on the founder's Person entity) to the Organization `sameAs`.

---

## Technical SEO (86)

**Working well**
- `robots.txt` allows everything, disallows `/design`, and lists the sitemap. AI crawlers are not blocked.
- `sitemap.xml`: 50 URLs, every one resolves, `lastmod` present, no orphans. No indexable page is missing. `/design` is correctly excluded and noindexed.
- Every page has a self-referencing canonical on the apex. 404s return a real 404 status with `noindex`.
- HTTPS with HSTS (2 years, preload), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. Brotli compression. Cloudflare edge caching.
- No broken internal links in the built site.

**Issues**
| Severity | Finding | Fix |
|---|---|---|
| High | `https://www.rzautomate.com` returns 200 (no redirect). | 301 to `https://rzautomate.com`. |
| High | `http://rzautomate.com` returns 200 (no redirect to HTTPS). HSTS only applies after a first HTTPS visit. | Enable "Always Use HTTPS" or a redirect rule. |
| Low | No `Content-Security-Policy` header. | Add a report-only CSP, then enforce. Cal.com embed needs allowing. |
| Low | `/design` is deployed publicly (noindexed, disallowed). | Exclude from production builds. |
| Info | HTML is large before compression (250 to 350 KB; about 85 KB of inline SVG on `/models`) but about 40 KB over the wire. | No action needed. |

## Content Quality (68)

**Working well**
- Median 1,200 words per page. Model pages and tool pages are original, structured and genuinely useful: pricing tables, calculators, specs, comparisons, FAQs.
- The ROI calculator, AI model and automation tool hubs target real comparison intent with tools, not just text.

**Issues**
| Severity | Finding | Fix |
|---|---|---|
| High | Homepage stats, results and testimonials are placeholders (flagged in code). | Replace with measured client results, or remove the sections. |
| Medium | No About page; the founder appears only through structured data and the author component. | Add an About page with the founder, experience and how the team works. |
| Medium | No case studies. The footer link was removed because the page never existed. | Publish at least one real, measured case study. |
| Medium | Four blog posts, three about LMS, courses and Moodle (the previous business). They dilute the AI-automation topic. | Add posts on AI automation topics and the services; consider noindexing or merging the off-topic ones. |
| Medium | "Prices checked November 14, 2026" appears across all model pages. It is only trustworthy if each price was verified. | Verify prices and keep a visible changelog and update schedule. |
| Low | Thin listing pages: `/services` (206 words), `/blog` (239), `/contact` (291). | Add a short intro to `/services` explaining how to choose. |
| Low | Terms and privacy pages are drafts pending legal review. | Finish review before relying on them as trust signals. |

## On-Page SEO (90)

- Every page: exactly one H1, unique title and unique description, `lang`, viewport, Open Graph and Twitter tags, a share image.
- 16 titles run 66 to 70 characters, mostly the model pages and blog posts; Google may truncate them. Two descriptions (home and AI agent development) are 174 characters. Trim to about 60 and about 155.
- The default share image is used on every page. Model and tool pages could have their own.
- Internal linking is strong: hubs link to every detail page, details link to related models and tools, services link to the calculator. After removing the dead links, none are broken.

## Schema / Structured Data (88)

- Valid JSON-LD on all 52 pages. Types in use: Organization, Person, WebSite (every page), BreadcrumbList (46), FAQPage (46), Service (5), BlogPosting (4), Blog, ContactPage, CollectionPage and ItemList (hubs), Dataset (models), WebApplication (ROI calculator), WebPage (model pages).
- `Organization.sameAs` is empty. Add LinkedIn and GitHub (the founder already has them).
- FAQPage markup is on 46 pages. Google limits FAQ rich results to a few site types, so expect no rich result, but it is harmless and helps AI answer engines.
- The Dataset on `/models` has no `license` or `distribution`; add them if you publish a CSV or JSON download.

## Performance (98)

Lighthouse (mobile emulation, run against the live site):

| Page | Perf | A11y | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| Home | 99 | 96 | 100 | 100 | 2.0 s | 60 ms | 0 |
| /models | 100 | 97 | 100 | 100 | 1.3 s | 30 ms | 0 |
| /models/claude-opus-5-5 | 100 | 91 | 100 | 92 | 1.1 s | 60 ms | 0 |
| /automation-tools/n8n | 100 | 94 | 100 | 92 | 1.7 s | 60 ms | 0 |
| /tools/automation-roi-calculator | 100 | 97 | 100 | 100 | 1.6 s | 0 ms | 0 |

- Total homepage weight is 328 KiB. About 57 KiB of unused JavaScript. Field data (CrUX) is not available yet.
- PageSpeed Insights API was over quota, so these are lab results from a local Lighthouse run.

## Accessibility (affects SEO scoring)

| Severity | Finding |
|---|---|
| Medium | White on `#ff4133` is 3.47:1. Also `primary-foreground/80` and `/85` text on coral is 2.66 to 2.84:1. |
| Medium | Last breadcrumb item is an `<a>` with no `href` (fails "crawlable anchors"). Present on model and tool pages. |
| Medium | Model hero: `<dl>` contains a wrapper `<div>` around the `<dd>`, which breaks the definition list structure. |
| Low | Tool pages: some inline links are distinguished only by colour (`link-in-text-block`). |

## Images (82)

- All images have alt text. Formats are modern (WebP, SVG, PNG logos).
- The five service thumbnails are 94 to 136 KB at 1672 px wide but display at about 360 px wide on the services page. Serve a 640 px variant with `srcset`.
- No page needed lazy-loading changes (CLS is 0).

## AI Search Readiness (88)

**Working well**
- `llms.txt` lists every model, tool, service and blog page; `llms-full.txt` and a `.md` mirror exist for every page; the Cloudflare worker serves Markdown to AI user agents and to `Accept: text/markdown`.
- No AI crawler is blocked in `robots.txt`.
- Pricing and spec tables are structured, quotable and dated, which suits citation.

**Gaps**
- Few third-party mentions or profiles to corroborate the brand (empty `sameAs`, no case studies, no About page).
- Citation value depends on price accuracy. Wrong numbers get quoted.

## Not covered

- Backlink profile, Google Search Console, GA4 and CrUX data (no credentials configured).
- Desktop and mobile screenshots (headless Chrome here cannot render below about 500 px wide).
- Live SERP and keyword data (DataForSEO not queried).
