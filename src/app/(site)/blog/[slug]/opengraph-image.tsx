import { notFound } from "next/navigation";
import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";
import { getPost, posts } from "@/lib/blog";

export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();
  return ogCard({ eyebrow: post.category, title: post.title });
}
