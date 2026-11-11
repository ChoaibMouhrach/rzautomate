import { Author } from "@/components/site/author";
import { Link } from "@/components/ui/link";
import { authors } from "@/lib/authors";
import { formatPostDate, isoDate, postPath, type Post } from "@/lib/blog";

export const PostMeta = ({ post }: { post: Post }) => (
  <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
    <time dateTime={isoDate(post.data.date)}>
      {formatPostDate(post.data.date)}
    </time>
    <span aria-hidden>·</span>
    <span>{post.data.readingMinutes} min read</span>
  </p>
);

export const PostCard = ({ post }: { post: Post }) => (
  <article className="group relative flex w-full flex-col">
    <div className="relative aspect-[1200/630] overflow-hidden rounded-3xl bg-muted">
      <img
        src={post.data.image}
        alt={post.data.imageAlt}
        decoding="async"
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-5">
      <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
        {post.data.category}
      </span>
      <h2 className="text-2xl font-semibold leading-tight tracking-tighter text-balance">
        <Link
          href={postPath(post)}
          className="text-foreground no-underline hover:no-underline after:absolute after:inset-0"
        >
          {post.data.title}
        </Link>
      </h2>
      <p className="line-clamp-3 text-muted-foreground">{post.data.excerpt}</p>
      <div className="mt-auto flex flex-col gap-3 pt-2">
        <Author author={authors[post.data.author]} size="sm" />
        <PostMeta post={post} />
      </div>
    </div>
  </article>
);
