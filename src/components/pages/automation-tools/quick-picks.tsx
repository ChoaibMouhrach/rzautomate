import { ArrowUpRight } from "lucide-react";
import { LogoChip, Section } from "./section";
import { ToolLogo } from "./tool-logo";
import { bestFree, bestSelfHosted, cheapestPaid, mostIntegrations, toolHref, type AutomationTool } from "@/lib/automation-tools";

const picks: { label: string; tool: AutomationTool; line: string }[] = [
  { label: "Cheapest paid plan", tool: cheapestPaid, line: `From ${cheapestPaid.startsAtLabel}` },
  { label: "Best free plan", tool: bestFree, line: bestFree.freePlan ?? "" },
  { label: "Best for self-hosting", tool: bestSelfHosted, line: "Free to run on your server" },
  { label: "Most integrations", tool: mostIntegrations, line: `${mostIntegrations.integrations!.toLocaleString("en-US")} apps` },
];

const tones = ["bg-ink text-paper", "bg-muted", "bg-tint", "bg-primary text-primary-foreground"];
const mutedTones = ["text-paper/70", "text-muted-foreground", "text-muted-foreground", "text-primary-foreground/85"];

export const QuickPicks = () => (
  <Section label="Short on time?" title="Quick picks" intro="Picked automatically from the table.">
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {picks.map((pick, index) => (
        <li key={pick.label} className="flex">
          <a href={toolHref(pick.tool)} className={`group flex min-h-72 w-full min-w-0 flex-col justify-between gap-10 rounded-3xl p-8 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${tones[index]}`}>
            <div className="flex items-start justify-between gap-4">
              <LogoChip><ToolLogo tool={pick.tool} className="size-7" /></LogoChip>
              <ArrowUpRight aria-hidden className="size-6 opacity-60 transition-opacity group-hover:opacity-100" />
            </div>
            <div>
              <p className={`text-sm font-medium ${mutedTones[index]}`}>{pick.label}</p>
              <p className="mt-2 text-3xl font-semibold leading-tight tracking-tighter [overflow-wrap:anywhere]">{pick.tool.name}</p>
              <p className={`mt-2 ${mutedTones[index]}`}>{pick.line}</p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  </Section>
);
