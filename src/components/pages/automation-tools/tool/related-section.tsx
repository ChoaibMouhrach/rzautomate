import { ArrowUpRight } from "lucide-react";
import { DirectorySection } from "@/components/site/directory";
import { toolHref } from "@/lib/automation-tools";
import type { ToolPage } from "@/lib/tool-pages/types";
import { ToolLogo } from "../tool-logo";

export const RelatedSection = ({ page }: { page: ToolPage }) => (
  <DirectorySection title={page.related.heading}>
    <div className="grid gap-3 md:grid-cols-3">
      {page.related.tiles.map((tile) => (
        <a key={tile.slug} href={toolHref(tile)} className="group flex flex-col rounded-3xl bg-muted p-8 transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
          <span className="flex items-center justify-between">
            <ToolLogo tool={tile} className="size-10" />
            <ArrowUpRight aria-hidden className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
          </span>
          <span className="mt-6 text-xl font-semibold tracking-tight">{tile.name}</span>
          <span className="mt-2 text-muted-foreground">{tile.line}</span>
        </a>
      ))}
    </div>
  </DirectorySection>
);
