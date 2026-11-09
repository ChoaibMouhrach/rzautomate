import { PostByline } from "@/components/site/author";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { authors } from "@/lib/authors";
import type { Post } from "@/lib/blog";

export const PostHeader = ({ post }: { post: Post }) => <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.data.title },
        ]}
      />
      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          {post.data.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.data.excerpt}</p>
        <div className="mt-6">
          <PostByline
            author={authors[post.data.author]}
            readingMinutes={post.data.readingMinutes}
          />
        </div>
      </header>
    </>;
