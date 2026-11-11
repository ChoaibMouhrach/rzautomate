import { Author } from "@/components/site/author";
import {
  Card,
  CardDescription,
  CardEyebrow,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { authors } from "@/lib/authors";
import { formatPostDate, isoDate, postPath, type Post } from "@/lib/blog";

export const PostCard = ({ post }: { post: Post }) => <Card interactive className="group gap-0 overflow-hidden p-0">
      <div className="relative aspect-[1200/630] overflow-hidden">
        <img
          src={post.data.image}
          alt={post.data.imageAlt}
          decoding="async"
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-8">
        <CardEyebrow>{post.data.category}</CardEyebrow>
        <CardTitle>
          <Link
            href={postPath(post)}
            className="no-underline hover:no-underline after:absolute after:inset-0"
          >
            {post.data.title}
          </Link>
        </CardTitle>
        <CardDescription>{post.data.excerpt}</CardDescription>
        <CardFooter className="flex-col items-start gap-3">
          <Author author={authors[post.data.author]} size="sm" />
          <p className="flex items-center gap-2">
            <time dateTime={isoDate(post.data.date)}>
              {formatPostDate(post.data.date)}
            </time>
            <span aria-hidden>·</span>
            <span>{post.data.readingMinutes} min read</span>
          </p>
        </CardFooter>
      </div>
    </Card>;
