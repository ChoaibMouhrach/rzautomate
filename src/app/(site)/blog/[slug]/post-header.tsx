import { PostByline } from "@/components/site/author";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import type { Post } from "@/lib/blog";

export function PostHeader({ post }: { post: Post }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />
      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6">
          <PostByline
            author={post.author}
            readingMinutes={post.readingMinutes}
          />
        </div>
      </header>
    </>
  );
}
