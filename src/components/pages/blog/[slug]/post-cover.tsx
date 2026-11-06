import type { Post } from "@/lib/blog";

export function PostCover({ post }: { post: Post }) {
  return (
    <div className="relative mt-10 aspect-[1200/630] overflow-hidden rounded-ui border border-border">
      <img
        src={post.image}
        alt={post.imageAlt}
        decoding="async"
        loading="eager"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}
