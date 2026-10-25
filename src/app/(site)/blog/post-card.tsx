import Image from "next/image";
import { Author } from "@/components/site/author";
import {
  Card,
  CardDescription,
  CardEyebrow,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { formatPostDate, type Post } from "@/lib/blog";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card interactive className="group gap-0 overflow-hidden p-0">
      <div className="relative aspect-[1200/630] overflow-hidden border-b border-border">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          unoptimized
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <CardEyebrow>{post.category}</CardEyebrow>
        <CardTitle>
          <Link
            href={`/blog/${post.slug}`}
            className="no-underline after:absolute after:inset-0"
          >
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription>{post.excerpt}</CardDescription>
        <CardFooter className="flex-col items-start gap-3">
          <Author author={post.author} size="sm" />
          <p className="flex items-center gap-2">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingMinutes} min read</span>
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
