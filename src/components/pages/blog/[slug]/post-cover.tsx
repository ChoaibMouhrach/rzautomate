import type { Post } from "@/lib/blog";

export const PostCover = ({ post }: { post: Post }) => <div className="relative mt-10 aspect-[1200/630] overflow-hidden rounded-ui border border-border">
      <img
        src={post.data.image}
        alt={post.data.imageAlt}
        decoding="async"
        loading="eager"
        className="absolute inset-0 size-full object-cover"
      />
    </div>;
