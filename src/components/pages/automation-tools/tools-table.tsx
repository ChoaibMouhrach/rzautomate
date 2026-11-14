import { ArrowRight } from "lucide-react";
import { FilterChip } from "@/components/site/directory";
import { EmptyBanner, FilterSelect, SearchField, SelectItem, SortButton } from "@/components/site/directory-controls";
import { automationTools, toolHref, toolTypes, toolsCheckedAt, toolsCheckedLabel, type AutomationTool } from "@/lib/automation-tools";
import { ToolLogo } from "./tool-logo";
import { useToolsTableState, type SortKey } from "./tools-table-state";

const columns: { key: SortKey; label: string }[] = [
  { key: "name", label: "Tool" },
  { key: "startsAt", label: "Starts at" },
  { key: "youPayFor", label: "You pay for" },
  { key: "freePlan", label: "Free plan" },
  { key: "bestFor", label: "Best for" },
];

const cellClass = "h-px bg-background p-0 transition-colors group-hover:bg-ink group-hover:text-paper";
const linkClass = "flex h-full items-center gap-3 px-5 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring";

const PriceLabel = ({ label, size }: { label: string; size: string }) => {
  const slash = label.indexOf("/");
  const price = slash === -1 ? label : label.slice(0, slash);
  const unit = slash === -1 ? "" : label.slice(slash);
  return (
    <span className="block min-w-0">
      <span className={`block font-semibold tracking-tight tabular-nums [overflow-wrap:anywhere] ${size}`}>{price}</span>
      {unit && <span className="block text-sm text-muted-foreground [overflow-wrap:anywhere] group-hover:text-paper/70">{unit}</span>}
    </span>
  );
};

const sortValue = (tool: AutomationTool, key: SortKey) => {
  if (key === "startsAt") return tool.startsAt ?? Infinity;
  if (key === "freePlan") return tool.freeAllowance ?? -1;
  return tool[key];
};

export const ToolsTable = () => {
  const { query, type, free, selfHosted, openSource, sort, updateParams } = useToolsTableState();
  const needle = query.trim().toLowerCase();
  const rows = automationTools
    .filter((tool) => `${tool.name} ${tool.type} ${tool.youPayFor} ${tool.ai} ${tool.bestFor}`.toLowerCase().includes(needle) && (!type || tool.type === type) && (!free || tool.freePlan !== null) && (!selfHosted || tool.selfHosting) && (!openSource || tool.openSource))
    .sort((a, b) => {
      const left = sortValue(a, sort.key);
      const right = sortValue(b, sort.key);
      const comparison = typeof left === "number" && typeof right === "number" ? (left === right ? 0 : left < right ? -1 : 1) : String(left).localeCompare(String(right));
      return (sort.ascending ? comparison : -comparison) || a.name.localeCompare(b.name);
    });

  const hasFilters = Boolean(query || type || free || selfHosted || openSource);
  const clearFilters = () => updateParams({ q: "", type: "", free: "", selfhosted: "", opensource: "" });
  const sortBy = (key: SortKey) => updateParams({ sort: key === "startsAt" ? "" : key, order: sort.key === key && sort.ascending ? "desc" : "" });

  return (
    <div className="space-y-4">
      <div className="space-y-4 rounded-3xl bg-muted p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <SearchField value={query} onChange={(value) => updateParams({ q: value })} placeholder="Search a tool, like Zapier or self-hosted" />
          <div className="flex flex-col gap-3 sm:flex-row">
            <FilterSelect label="Type" selectedKey={type || "all"} onChange={(key) => updateParams({ type: key === "all" ? "" : key })}>
              <SelectItem id="all" textValue="All types">All types</SelectItem>
              {toolTypes.map((name) => <SelectItem key={name} id={name} textValue={name}>{name}</SelectItem>)}
            </FilterSelect>
          </div>
        </div>
        <div role="group" aria-label="Filter tools" className="flex flex-wrap items-center gap-2">
          <FilterChip inset pressed={free} onPress={() => updateParams({ free: free ? "" : "1" })}>Free plan</FilterChip>
          <FilterChip inset pressed={selfHosted} onPress={() => updateParams({ selfhosted: selfHosted ? "" : "1" })}>Self-hosted</FilterChip>
          <FilterChip inset pressed={openSource} onPress={() => updateParams({ opensource: openSource ? "" : "1" })}>Open source</FilterChip>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="ml-auto cursor-pointer rounded-sm px-2 text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring">
              Clear filters
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{rows.length ? "Results updated" : "No tools match"}</p>

      {rows.length > 0 && (
        <>
          <div className="rounded-3xl bg-muted p-2 md:hidden">
            <div className="flex flex-wrap gap-x-5 gap-y-1 px-3 pb-3 pt-2">
              {columns.filter(({ key }) => key === "startsAt" || key === "youPayFor" || key === "freePlan").map(({ key, label }) => <SortButton key={key} label={label} active={sort.key === key} ascending={sort.ascending} onPress={() => sortBy(key)} />)}
            </div>
            <ul className="space-y-2">
              {rows.map((tool) => (
                <li key={tool.slug}>
                  <a href={toolHref(tool)} className="block rounded-2xl bg-background p-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
                    <span className="flex items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted"><ToolLogo tool={tool} className="size-6" /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold"><span className="sr-only">See </span>{tool.name}<span className="sr-only"> pricing</span></span>
                        <span className="block truncate text-sm text-muted-foreground">{tool.type}</span>
                      </span>
                      <ArrowRight aria-hidden className="size-5 shrink-0 text-muted-foreground" />
                    </span>
                    <span className="mt-4 grid grid-cols-3 items-start gap-3">
                      <span className="block"><span className="block text-xs text-muted-foreground">Starts at</span><PriceLabel label={tool.startsAtLabel} size="text-xl" /></span>
                      <span className="block"><span className="block text-xs text-muted-foreground">You pay for</span><span className="block text-base text-muted-foreground">{tool.youPayFor}</span></span>
                      <span className="block"><span className="block text-xs text-muted-foreground">Free plan</span><span className="block text-base font-medium">{tool.freePlan ?? "—"}</span></span>
                    </span>
                    <span className="mt-3 block text-sm text-muted-foreground">{tool.bestFor}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden rounded-3xl bg-muted px-2 md:block">
            <table className="w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-2 text-left">
              <caption className="sr-only">Workflow automation tools by starting price. Use the column buttons to sort.</caption>
              <colgroup>
                <col className="w-[24%]" />
                <col className="w-[13%]" />
                <col className="w-[14%]" />
                <col className="w-[22%]" />
                <col className="w-[22%]" />
                <col className="w-14" />
              </colgroup>
              <thead>
                <tr>
                  {columns.map(({ key, label }) => (
                    <th key={key} scope="col" aria-sort={sort.key === key ? (sort.ascending ? "ascending" : "descending") : "none"} className="px-5 pb-1 pt-3 text-left font-normal">
                      <SortButton label={label} active={sort.key === key} ascending={sort.ascending} onPress={() => sortBy(key)} />
                    </th>
                  ))}
                  <th scope="col"><span className="sr-only">Open</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((tool) => {
                  const href = toolHref(tool);
                  return (
                    <tr key={tool.slug} className="group">
                      <th scope="row" className={`${cellClass} rounded-l-2xl font-normal`}>
                        <a href={href} className={linkClass}>
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-muted"><ToolLogo tool={tool} className="size-6" /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-semibold"><span className="sr-only">See </span>{tool.name}<span className="sr-only"> pricing</span></span>
                            <span className="block truncate text-sm font-normal text-muted-foreground group-hover:text-paper/70">{tool.type}</span>
                          </span>
                        </a>
                      </th>
                      <td className={cellClass}><a href={href} tabIndex={-1} className={linkClass}><PriceLabel label={tool.startsAtLabel} size="text-xl" /></a></td>
                      <td className={cellClass}><a href={href} tabIndex={-1} className={linkClass}><span className="min-w-0 text-muted-foreground [overflow-wrap:anywhere] group-hover:text-paper/80">{tool.youPayFor}</span></a></td>
                      <td className={cellClass}>
                        <a href={href} tabIndex={-1} className={linkClass}>
                          <span className="block">
                            <span className="block font-medium">{tool.freePlan ?? "—"}</span>
                            {(tool.selfHosting || tool.openSource) && (
                              <span className="mt-1.5 flex flex-wrap gap-1.5">
                                {tool.selfHosting && <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground group-hover:bg-paper/10 group-hover:text-paper">Self-hosting</span>}
                                {tool.openSource && <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-foreground group-hover:bg-paper/10 group-hover:text-paper">Open source</span>}
                              </span>
                            )}
                          </span>
                        </a>
                      </td>
                      <td className={cellClass}><a href={href} tabIndex={-1} className={linkClass}><span className="text-muted-foreground group-hover:text-paper/70">{tool.bestFor}</span></a></td>
                      <td className={`${cellClass} rounded-r-2xl`}><a href={href} tabIndex={-1} aria-hidden className={`${linkClass} justify-center px-0`}><ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-paper" /></a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {rows.length === 0 && <EmptyBanner title="No tool matches that search." hint="Clear a filter and try again." onClear={clearFilters} />}

      <p className="text-sm text-muted-foreground">Prices checked <time dateTime={toolsCheckedAt}>{toolsCheckedLabel}</time> on each tool&apos;s pricing page.</p>
    </div>
  );
};
