import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/blog";
import { PostBody } from "./post-body";
import { PostCover } from "./post-cover";
import { PostCta } from "./post-cta";
import { PostHeader } from "./post-header";
import { PostJsonLd } from "./post-json-ld";
import { PostSidebar } from "./post-sidebar";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { images: [post.image] },
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="page-container pb-24 pt-10 sm:pt-16">
      <PostJsonLd post={post} />
      <PostHeader post={post} />
      <PostCover post={post} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
        <div>
          <PostBody post={post} />
          <PostCta />
        </div>
        <PostSidebar post={post} />
      </div>
    </article>
  );
}
