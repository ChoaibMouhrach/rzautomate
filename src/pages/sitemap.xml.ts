import { posts } from "@/lib/blog";
import { modelsCheckedAt } from "@/lib/models";
import { pagePaths } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site";

const postDates = new Map<string, string | undefined>([
  ...posts.map(
    (post) => [`/blog/${post.slug}`, post.updated ?? post.date] as const,
  ),
  [
    "/blog",
    posts
      .map((post) => post.updated ?? post.date)
      .sort()
      .at(-1),
  ] as const,
]);

export function GET() {
  const entries = pagePaths()
    .map((path) => {
      const lastModified =
        path === "/models" || path.startsWith("/models/")
          ? modelsCheckedAt
          : postDates.get(path);
      return `<url><loc>${absoluteUrl(path)}</loc>${lastModified ? `<lastmod>${lastModified}</lastmod>` : ""}</url>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
}
