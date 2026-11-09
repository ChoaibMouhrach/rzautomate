import type { APIRoute, GetStaticPaths } from "astro";
import { ogCard } from "@/components/site/og-card";
import { getPosts, type Post } from "@/lib/blog";

export const getStaticPaths = (async () =>
  (await getPosts()).map((post) => ({
    params: { slug: post.id },
    props: { post },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: Post }> = ({ props }) => {
  const { post } = props;
  return ogCard({ eyebrow: post.data.category, title: post.data.title });
};
