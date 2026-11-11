import { ArrowRight } from "lucide-react";
import { PostMeta } from "@/components/site/post-card";
import { Link } from "@/components/ui/link";
import { postPath, type Post } from "@/lib/blog";

export const FeaturedPost = ({ post }: { post: Post }) => (
  <article className="group relative flex flex-col gap-2">
    <div className="relative aspect-[1200/630] overflow-hidden rounded-3xl bg-muted">
      <img
        src={post.data.image}
        alt={post.data.imageAlt}
        decoding="async"
        loading="eager"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:transition-none"
      />
    </div>
    <div className="grid items-end gap-8 rounded-3xl bg-muted p-8 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
      <div>
        <span className="w-fit rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          Latest · {post.data.category}
        </span>
        <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tighter text-balance md:text-4xl">
          <Link
            href={postPath(post)}
            className="text-foreground no-underline hover:no-underline after:absolute after:inset-0"
          >
            {post.data.title}
          </Link>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {post.data.excerpt}
        </p>
        <div className="mt-6">
          <PostMeta post={post} />
        </div>
      </div>
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none">
        <ArrowRight aria-hidden className="size-6" />
      </span>
    </div>
  </article>
);
