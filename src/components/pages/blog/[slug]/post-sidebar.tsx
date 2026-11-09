import type { MarkdownHeading } from "astro";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableOfContents } from "./table-of-contents";

export const PostSidebar = ({
  headings,
}: {
  headings: readonly MarkdownHeading[];
}) => {
  const items = headings.map((heading) => ({
    id: heading.slug,
    label: heading.text.replace(/^#\s*/, ""),
    level: Math.min(Math.max(heading.depth, 2), 4) as 2 | 3 | 4,
  }));

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <ScrollArea
          className="max-h-[calc(100dvh-7rem)]"
          contentClassName="group-data-[has-overflow-y]/scroll:pr-4"
        >
          <TableOfContents items={items} />
        </ScrollArea>
      </div>
    </aside>
  );
};
