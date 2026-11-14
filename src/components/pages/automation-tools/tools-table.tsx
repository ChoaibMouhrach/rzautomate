import { DirectoryTableShell, FilterChip, Yes, rowClass, searchFieldClass, stickyCellClass, tableHeadClass } from "@/components/site/directory";
import { ToolLogo } from "./tool-logo";
import { useToolsTableState } from "./tools-table-state";
import { ScrollArea } from "@/components/ui/scroll-area";
import { automationTools, sortedByPrice, toolHref, toolsCheckedAt, toolsCheckedLabel, type AutomationTool } from "@/lib/automation-tools";

const filters: { key: string; label: string; test: (tool: AutomationTool) => boolean }[] = [
  { key: "all", label: "All", test: () => true },
  { key: "workflow-platforms", label: "Workflow platforms", test: (tool) => tool.type === "Workflow platforms" },
  { key: "ai-agent-builders", label: "AI agent builders", test: (tool) => tool.type === "AI agent builders" },
  { key: "enterprise", label: "Enterprise", test: (tool) => tool.type === "Enterprise" },
  { key: "free-plan", label: "Free plan", test: (tool) => tool.freePlan !== null },
  { key: "self-hosted", label: "Self-hosted", test: (tool) => tool.selfHosting },
  { key: "open-source", label: "Open source", test: (tool) => tool.openSource },
];

const cellLinkClass = "flex h-full items-center gap-3 px-5 py-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring";

const columns = ["Tool", "Type", "Free plan", "Starts at", "You pay for", "Self-hosting", "AI features", "Best for"];

export const ToolsTable = () => {
  const { query, filter, updateParams } = useToolsTableState(filters.map(({ key }) => key));
  const test = filters.find(({ key }) => key === filter)!.test;
  const needle = query.trim().toLowerCase();
  const rows = sortedByPrice.filter((tool) => test(tool) && `${tool.name} ${tool.type} ${tool.youPayFor} ${tool.ai} ${tool.bestFor}`.toLowerCase().includes(needle));

  return (
    <>
      <label className="block">
        <span className="sr-only">Search tools</span>
        <input type="search" value={query} onChange={(event) => updateParams({ q: event.target.value })} placeholder="Search a tool, e.g. Zapier or self-hosted" className={searchFieldClass} />
      </label>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter tools">
        {filters.map(({ key, label }) => <FilterChip key={key} pressed={filter === key} onPress={() => updateParams({ filter: key === filters[0].key ? "" : key })}>{label}</FilterChip>)}
      </div>
      <p className="sr-only" aria-live="polite">{rows.length} of {automationTools.length} tools shown</p>
      <ul className="divide-y divide-border/60 rounded-3xl bg-muted px-2 md:hidden">
        {rows.map((tool) => (
          <li key={tool.slug}>
            <a href={toolHref(tool)} className="flex items-center gap-4 rounded-2xl px-4 py-5 transition-colors hover:bg-background/60 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
              <ToolLogo tool={tool} className="size-10 rounded-xl" />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{tool.name}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{tool.bestFor}</span>
              </span>
              <span className="shrink-0 text-right">
                <span className="block font-semibold tabular-nums">{tool.startsAtLabel}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{tool.freePlan ? "Free plan" : "No free plan"}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <DirectoryTableShell className="hidden md:block">
        <ScrollArea orientation="horizontal" contentClassName="pb-3">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Workflow automation tools by starting price. Select a tool to see its full pricing.</caption>
            <thead><tr>{columns.map((label) => <th key={label} scope="col" className={`${tableHeadClass} ${label === "Tool" ? "sticky left-0 z-10 bg-muted" : ""}`}>{label}</th>)}</tr></thead>
            <tbody className="divide-y divide-border/60">
              {rows.map((tool) => (
                <tr key={tool.slug} className={rowClass.replace("cursor-pointer ", "")}>
                  <th scope="row" className={`${stickyCellClass} h-px whitespace-nowrap text-base font-semibold`}><a href={toolHref(tool)} className={cellLinkClass}><ToolLogo tool={tool} className="size-7" />{tool.name}</a></th>
                  <td className="h-px whitespace-nowrap text-muted-foreground"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}>{tool.type}</a></td>
                  <td className="h-px"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}>{tool.freePlan ?? "—"}</a></td>
                  <td className="h-px whitespace-nowrap font-semibold tabular-nums"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}>{tool.startsAtLabel}</a></td>
                  <td className="h-px text-muted-foreground"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}>{tool.youPayFor}</a></td>
                  <td className="h-px"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}><Yes value={tool.selfHosting} label="Self-hosting" /></a></td>
                  <td className="h-px text-muted-foreground"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}>{tool.ai}</a></td>
                  <td className="h-px min-w-52 text-muted-foreground"><a href={toolHref(tool)} tabIndex={-1} className={cellLinkClass}>{tool.bestFor}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </DirectoryTableShell>
      {!rows.length && <p className="text-muted-foreground">No tool matches that search. Clear a filter and try again.</p>}
      <p className="text-sm text-muted-foreground">Prices checked <time dateTime={toolsCheckedAt}>{toolsCheckedLabel}</time> on each tool&apos;s pricing page.</p>
    </>
  );
};
