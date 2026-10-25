import Image from "next/image";
import type { Post } from "@/lib/blog";

export function PostCover({ post }: { post: Post }) {
  return (
    <div className="relative mt-10 aspect-[1200/630] overflow-hidden rounded-ui border border-border">
      <Image
        src={post.image}
        alt={post.imageAlt}
        fill
        unoptimized
        priority
        sizes="(min-width: 1152px) 1104px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
