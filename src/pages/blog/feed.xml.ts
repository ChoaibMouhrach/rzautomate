import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getPosts, lastModified, postPath } from "@/lib/blog";
import { absoluteUrl, site } from "@/lib/site";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  const lastBuildDate = new Date(
    `${posts[0] ? lastModified(posts[0]) : "1970-01-01"}T00:00:00Z`,
  ).toUTCString();

  return rss({
    title: `${site.name} Blog`,
    description: site.description,
    site: context.site!,
    trailingSlash: false,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData: [
      "<language>en</language>",
      `<lastBuildDate>${lastBuildDate}</lastBuildDate>`,
      `<atom:link href="${absoluteUrl("/blog/feed.xml")}" rel="self" type="application/rss+xml"/>`,
    ].join(""),
    items: posts.map((post) => ({
      title: post.data.title,
      link: postPath(post),
      description: post.data.excerpt,
      pubDate: post.data.date,
      categories: [post.data.category],
    })),
  });
};
