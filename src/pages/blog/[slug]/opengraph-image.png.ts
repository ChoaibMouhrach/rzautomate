import type { APIRoute, GetStaticPaths } from "astro";
import { ogCard } from "@/components/site/og-card";
import { getPost, posts } from "@/lib/blog";

export const getStaticPaths = (() =>
  posts.map((post) => ({ params: { slug: post.slug } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const post = getPost(params.slug!)!;
  return ogCard({ eyebrow: post.category, title: post.title });
};
