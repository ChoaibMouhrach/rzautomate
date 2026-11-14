import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/ui/link";
import { LogoChip } from "./section";
import { ToolLogo } from "./tool-logo";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { automationTools } from "@/lib/automation-tools";
import { choose } from "./content";

const n8n = automationTools.find((tool) => tool.slug === "n8n")!;

export const Choose = () => (
  <LandingSection>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionLabel>Before you pick</SectionLabel>
        <LandingHeading className="mt-4">{choose.title}</LandingHeading>
        <p className="mt-4 text-lg text-muted-foreground">{choose.intro}</p>
      </div>
      <ol className="space-y-4">
        {choose.rows.map((row, index) => (
          <li key={row.n} className={`flex gap-6 rounded-3xl p-8 ${index % 2 ? "bg-tint" : "bg-muted"}`}>
            <span className="w-16 shrink-0 text-5xl font-semibold leading-none tracking-tighter text-primary">{row.n}</span>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{row.title}</h3>
              <p className="mt-2 text-muted-foreground">{row.line}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div className="mt-4 grid gap-4 lg:grid-cols-[3fr_2fr]">
      <div className="flex flex-col justify-between gap-10 rounded-3xl bg-ink p-8 text-paper md:p-12">
        <span className="inline-flex w-fit rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground">{choose.take.title}</span>
        <div>
          <p className="text-balance text-2xl leading-snug tracking-tight md:text-3xl">{choose.take.body}</p>
          <p className="mt-6 text-paper/70">We also look after n8n, Make and Zapier workflows. See <Link href="/services/automation-maintenance" className="text-paper">Automation maintenance</Link>.</p>
        </div>
      </div>
      <a href={choose.take.href} className="group flex flex-col justify-between gap-10 rounded-3xl bg-primary p-8 text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:p-10">
        <div className="flex items-start justify-between">
          <LogoChip className="size-14"><ToolLogo tool={n8n} className="size-9" /></LogoChip>
          <span className="flex size-10 items-center justify-center rounded-full bg-white/15"><ArrowUpRight aria-hidden className="size-5" /></span>
        </div>
        <div>
          <p className="text-sm font-medium text-primary-foreground/85">The tool we use most</p>
          <p className="mt-2 text-5xl font-semibold tracking-tighter">{n8n.name}</p>
          <p className="mt-2 text-primary-foreground/85">From {n8n.startsAtLabel}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Source-available", "Self-hosting", `Pay per ${n8n.youPayFor.toLowerCase().replace(/s$/, "")}`].map((fact) => <li key={fact} className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium">{fact}</li>)}
          </ul>
          <p className="mt-6 font-medium">{choose.take.label}</p>
        </div>
      </a>
    </div>
  </LandingSection>
);
