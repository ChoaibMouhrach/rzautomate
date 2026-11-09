import { getPosts, lastModified, postPath } from "@/lib/blog";
import { modelsCheckedAt } from "@/lib/models";
import { pagePaths } from "@/lib/pages";
import { absoluteUrl } from "@/lib/site";

export const GET = async () => {
  const posts = await getPosts();
  const postDates = new Map<string, string | undefined>([
    ...posts.map((post) => [postPath(post), lastModified(post)] as const),
    ["/blog", posts.map(lastModified).sort().at(-1)] as const,
  ]);
  const entries = pagePaths(posts.map((post) => post.id))
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
};
