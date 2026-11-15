# Performance findings

Lighthouse run locally against the live site (mobile emulation, headless Chrome). PageSpeed Insights API was over quota.

| Page | Perf | A11y | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| / | 99 | 96 | 100 | 100 | 2.0 s | 60 ms | 0 |
| /models | 100 | 97 | 100 | 100 | 1.3 s | 30 ms | 0 |
| /models/claude-opus-5-5 | 100 | 91 | 100 | 92 | 1.1 s | 60 ms | 0 |
| /automation-tools/n8n | 100 | 94 | 100 | 92 | 1.7 s | 60 ms | 0 |
| /tools/automation-roi-calculator | 100 | 97 | 100 | 100 | 1.6 s | 0 ms | 0 |

Failing audits across pages: color-contrast, crawlable-anchors (model and tool pages), definition-list and dlitem (model pages), link-in-text-block (tool pages), unused-javascript (home, about 57 KiB), network-dependency-tree-insight.

Transfer sizes (live): home 252 KB raw / 40 KB gzip; /models 353 KB raw / 40 KB gzip; model page 192 KB raw / 33 KB gzip. Brotli is served to browsers.
