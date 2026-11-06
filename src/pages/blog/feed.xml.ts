import { posts } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";

const escape = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export function GET() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const lastBuildDate = new Date(
    `${sorted[0]?.updated ?? sorted[0]?.date}T00:00:00Z`,
  ).toUTCString();

  const items = sorted
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return `<item>
<title>${escape(post.title)}</title>
<link>${url}</link>
<guid isPermaLink="true">${url}</guid>
<pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
<category>${escape(post.category)}</category>
<description>${escape(post.excerpt)}</description>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escape(site.name)} Blog</title>
<link>${absoluteUrl("/blog")}</link>
<description>${escape(site.description)}</description>
<language>en</language>
<lastBuildDate>${lastBuildDate}</lastBuildDate>
<atom:link href="${absoluteUrl("/blog/feed.xml")}" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
