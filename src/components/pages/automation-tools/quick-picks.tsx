import { ToolLogo } from "./tool-logo";
import { DirectorySection } from "@/components/site/directory";
import { bestFree, bestSelfHosted, cheapestPaid, mostIntegrations, toolHref, type AutomationTool } from "@/lib/automation-tools";

const picks: { label: string; tool: AutomationTool; line: string }[] = [
  { label: "Cheapest paid plan", tool: cheapestPaid, line: `From ${cheapestPaid.startsAtLabel}` },
  { label: "Best free plan", tool: bestFree, line: bestFree.freePlan ?? "" },
  { label: "Best for self-hosting", tool: bestSelfHosted, line: "Free to run on your server" },
  { label: "Most integrations", tool: mostIntegrations, line: `${mostIntegrations.integrations!.toLocaleString("en-US")} apps` },
];

export const QuickPicks = () => (
  <DirectorySection title="Quick picks">
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {picks.map((pick) => (
        <a key={pick.label} href={toolHref(pick.tool)} className="flex min-w-0 flex-col rounded-3xl bg-muted p-6 transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:p-7">
          <span className="text-sm font-medium text-muted-foreground">{pick.label}</span>
          <span className="mt-4 flex min-w-0 items-center gap-3 text-xl font-semibold tracking-tight sm:text-2xl"><ToolLogo tool={pick.tool} className="size-8" /><span className="min-w-0 [overflow-wrap:anywhere]">{pick.tool.name}</span></span>
          <span className="mt-3 text-sm text-muted-foreground">{pick.line}</span>
        </a>
      ))}
    </div>
    <p className="text-sm text-muted-foreground">Picked automatically from the table.</p>
  </DirectorySection>
);
