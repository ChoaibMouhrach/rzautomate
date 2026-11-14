import { Link } from "@/components/ui/link";
import { ToolLogo } from "./tool-logo";
import { Pill, directoryHeadingClass, directorySectionClass } from "@/components/site/directory";
import { automationTools } from "@/lib/automation-tools";
import { choose } from "./content";

const n8n = automationTools.find((tool) => tool.slug === "n8n")!;

export const Choose = () => (
  <section className={directorySectionClass}>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <h2 className={directoryHeadingClass}>{choose.title}</h2>
        <p className="mt-4 text-muted-foreground">{choose.intro}</p>
      </div>
      <ol className="divide-y divide-border/60">
        {choose.rows.map((row) => (
          <li key={row.n} className="flex gap-6 py-6 first:pt-0">
            <span className="w-8 shrink-0 text-lg font-semibold tabular-nums text-primary">{row.n}</span>
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{row.title}</h3>
              <p className="mt-2 text-muted-foreground">{row.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div className="mt-12 grid gap-3 lg:grid-cols-[3fr_2fr]">
      <div className="rounded-3xl bg-muted p-8 sm:p-10">
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">{choose.take.title}</span>
        <p className="mt-6 text-balance text-xl leading-relaxed tracking-tight sm:text-2xl">{choose.take.body}</p>
        <p className="mt-4 text-muted-foreground">We also look after n8n, Make and Zapier workflows. See <Link href="/services/automation-maintenance">Automation maintenance</Link>.</p>
      </div>
      <a href={choose.take.href} className="group flex flex-col justify-between gap-8 rounded-3xl bg-muted p-8 transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-10">
        <div>
          <p className="text-sm font-medium text-muted-foreground">The tool we use most</p>
          <p className="mt-4 flex items-center gap-3 text-4xl font-semibold tracking-tighter"><ToolLogo tool={n8n} className="size-10" />{n8n.name}</p>
          <p className="mt-1 text-muted-foreground">From {n8n.startsAtLabel}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Source-available", "Self-hosting", `Pay per ${n8n.youPayFor.toLowerCase().replace(/s$/, "")}`].map((fact) => <li key={fact}><Pill>{fact}</Pill></li>)}
          </ul>
        </div>
        <span className="font-medium">{choose.take.label}</span>
      </a>
    </div>
  </section>
);
