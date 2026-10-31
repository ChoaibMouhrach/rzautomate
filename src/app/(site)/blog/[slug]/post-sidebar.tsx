import { getPostHeadings, type Post } from "@/lib/blog";
import { TableOfContents } from "./table-of-contents";

export function PostSidebar({ post }: { post: Post }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto">
        <TableOfContents items={getPostHeadings(post)} />
      </div>
    </aside>
  );
}
