import { Avatar, type AvatarProps } from "@/components/ui/avatar";
import type { Author as AuthorData } from "@/lib/blog";

export function Author({
  author,
  size,
}: {
  author: AuthorData;
  size?: AvatarProps["size"];
}) {
  return (
    <div className="flex items-center gap-3">
      <Avatar src={author.image} size={size} />
      <div className="flex flex-col text-sm leading-tight">
        <span className="font-medium text-foreground">{author.name}</span>
        <span className="text-muted-foreground">{author.title}</span>
      </div>
    </div>
  );
}

export function PostByline({
  author,
  readingMinutes,
}: {
  author: AuthorData;
  readingMinutes: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <Avatar src={author.image} size="lg" />
      <div className="flex flex-col gap-0.5">
        <span className="font-semibold text-foreground">{author.name}</span>
        <p className="flex items-center gap-2 text-muted-foreground">
          <span>{author.title}</span>
          <span aria-hidden>·</span>
          <span>{readingMinutes} min read</span>
        </p>
      </div>
    </div>
  );
}
