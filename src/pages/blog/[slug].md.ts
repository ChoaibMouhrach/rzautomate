import type { APIRoute, GetStaticPaths } from "astro";
import { getPosts, postPath, type Post } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

const markdownBody = (post: Post) =>
  (post.body ?? "")
    .replace(/^import .+\n/gm, "")
    .replace(
      /^<PostFaq\b.*\/>$/m,
      post.data.faq
        .map((item) => `### ${item.question}\n\n${item.answer}`)
        .join("\n\n"),
    )
    .replace(/^<[A-Z]\w*\s*\/>\n?/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

export const getStaticPaths = (async () =>
  (await getPosts()).map((post) => ({
    params: { slug: post.id },
    props: { post },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) => {
  const { post } = props;
  const { title, metaTitle, excerpt, date } = post.data;
  const frontmatter = [
    `title: ${JSON.stringify(metaTitle ?? title)}`,
    `description: ${JSON.stringify(excerpt)}`,
    `date: ${date.toISOString().slice(0, 10)}`,
    `url: ${absoluteUrl(postPath(post))}`,
  ].join("\n");

  return new Response(`---\n${frontmatter}\n---\n\n# ${title}\n\n${markdownBody(post)}\n`, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
