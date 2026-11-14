import { ArrowUpRight, Building2, Sparkles, Workflow } from "lucide-react";
import { automationTools, toolHref } from "@/lib/automation-tools";
import { LogoChip, Section } from "./section";
import { ToolLogo } from "./tool-logo";
import { types } from "./content";

const icons = { workflow: Workflow, sparkles: Sparkles, building: Building2 } as const;

const tones = ["bg-muted", "bg-tint", "bg-ink text-paper"];
const mutedTones = ["text-muted-foreground", "text-muted-foreground", "text-paper/70"];
const iconTones = ["bg-background text-primary", "bg-background text-primary", "bg-primary text-primary-foreground"];
const rowTones = ["bg-background hover:bg-background/60", "bg-background hover:bg-background/60", "bg-white/10 hover:bg-white/15"];

export const Types = () => (
  <Section label="The landscape" title={types.title}>
    <ul className="grid gap-4 md:grid-cols-3">
      {types.columns.map((column, index) => {
        const Icon = icons[column.icon];
        return (
          <li key={column.title} className={`flex flex-col rounded-3xl p-8 md:p-10 ${tones[index]}`}>
            <span className={`flex size-14 items-center justify-center rounded-full ${iconTones[index]}`}>
              <Icon aria-hidden className="size-7" strokeWidth={1.75} />
            </span>
            <h3 className="mt-10 text-3xl font-semibold leading-tight tracking-tighter">{column.title}</h3>
            <p className={`mt-3 flex-1 text-lg ${mutedTones[index]}`}>{column.body}</p>
            <ul className="mt-8 space-y-2">
              {column.tools.map((slug) => {
                const tool = automationTools.find((item) => item.slug === slug)!;
                return (
                  <li key={slug}>
                    <a href={toolHref(tool)} className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${rowTones[index]}`}>
                      <LogoChip className="size-10"><ToolLogo tool={tool} className="size-6" /></LogoChip>
                      <span className="mr-auto">
                        <span className="block font-semibold">{tool.name}</span>
                        <span className={`block text-sm ${mutedTones[index]}`}>{tool.startsAt === null ? "Custom pricing" : `From ${tool.startsAtLabel}`}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  </Section>
);
