import { ArrowUpRight } from "lucide-react";
import { LogoChip, Section } from "../section";
import { toolHref } from "@/lib/automation-tools";
import type { ToolPage } from "@/lib/tool-pages/types";
import { ToolLogo } from "../tool-logo";

const tones = ["bg-muted", "bg-tint", "bg-ink text-paper"];
const mutedTones = ["text-muted-foreground", "text-muted-foreground", "text-paper/70"];

export const RelatedSection = ({ page }: { page: ToolPage }) => (
  <Section label="Keep looking" title={page.related.heading}>
    <ul className="grid gap-4 md:grid-cols-3">
      {page.related.tiles.map((tile, index) => (
        <li key={tile.slug} className="flex">
          <a href={toolHref(tile)} className={`group flex min-h-64 w-full flex-col justify-between gap-10 rounded-3xl p-8 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${tones[index % tones.length]}`}>
            <span className="flex items-start justify-between">
              <LogoChip className="size-14"><ToolLogo tool={tile} className="size-9" /></LogoChip>
              <ArrowUpRight aria-hidden className="size-6 opacity-60 transition-opacity group-hover:opacity-100" />
            </span>
            <span>
              <span className="block text-3xl font-semibold leading-tight tracking-tighter">{tile.name}</span>
              <span className={`mt-2 block ${mutedTones[index % tones.length]}`}>{tile.line}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);
