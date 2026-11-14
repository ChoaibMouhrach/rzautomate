import { ArrowUpRight, Building2, Sparkles, Workflow } from "lucide-react";
import { directoryHeadingClass, directorySectionClass } from "@/components/site/directory";
import { automationTools, toolHref } from "@/lib/automation-tools";
import { ToolLogo } from "./tool-logo";
import { types } from "./content";

const icons = { workflow: Workflow, sparkles: Sparkles, building: Building2 } as const;

export const Types = () => (
  <section className={directorySectionClass}>
    <h2 className={`${directoryHeadingClass} max-w-2xl text-balance`}>{types.title}</h2>
    <div className="mt-10 grid gap-3 md:grid-cols-3">
      {types.columns.map((column) => {
        const Icon = icons[column.icon];
        return (
          <article key={column.title} className="flex flex-col rounded-3xl bg-muted p-8">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-background text-primary">
              <Icon aria-hidden className="size-7" strokeWidth={1.75} />
            </span>
            <h3 className="mt-8 text-2xl font-semibold tracking-tight">{column.title}</h3>
            <p className="mt-3 flex-1 text-muted-foreground">{column.body}</p>
            <ul className="mt-8 space-y-2">
              {column.tools.map((slug) => {
                const tool = automationTools.find((item) => item.slug === slug)!;
                return (
                  <li key={slug}>
                    <a href={toolHref(tool)} className="group flex items-center justify-between gap-4 rounded-2xl bg-background px-5 py-4 transition-colors hover:bg-background/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                      <ToolLogo tool={tool} className="size-9" />
                      <span className="mr-auto">
                        <span className="block font-semibold">{tool.name}</span>
                        <span className="block text-sm text-muted-foreground">{tool.startsAt === null ? "Custom pricing" : `From ${tool.startsAtLabel}`}</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  </section>
);
