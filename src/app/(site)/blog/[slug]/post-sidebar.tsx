import { getPostHeadings, type Post } from "@/lib/blog";
import { TableOfContents } from "./table-of-contents";

export function PostSidebar({ post }: { post: Post }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-8">
        <TableOfContents items={getPostHeadings(post)} />
      </div>
    </aside>
  );
}
