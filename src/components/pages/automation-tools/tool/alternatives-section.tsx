import { DirectorySection, DirectoryTableShell, rowClass, stickyCellClass, tableHeadClass } from "@/components/site/directory";
import { Link, LinkButton } from "@/components/ui/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { publishedComparePages } from "@/lib/compare-pages";
import { toolHref } from "@/lib/automation-tools";
import type { ToolPage } from "@/lib/tool-pages/types";
import { ToolLogo } from "../tool-logo";

const cellLinkClass = "flex h-full items-center gap-3 px-5 py-5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring";

const columns = ["Tool", "Starts at", "You pay for", "Free plan", "Self-hosting", "Why switch"];

export const AlternativesSection = ({ page }: { page: ToolPage }) => (
  <DirectorySection id="alternatives" title={page.alternatives.heading} intro={page.alternatives.intro}>
    <DirectoryTableShell>
      <ScrollArea orientation="horizontal" contentClassName="pb-3">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{page.alternatives.heading}</caption>
          <thead><tr>{columns.map((label) => <th key={label} scope="col" className={`${tableHeadClass} ${label === "Tool" ? "sticky left-0 z-10 bg-muted" : ""}`}>{label}</th>)}</tr></thead>
          <tbody className="divide-y divide-border/60">
            {page.alternatives.rows.map((row) => (
              <tr key={row.slug} className={rowClass.replace("cursor-pointer ", "")}>
                <th scope="row" className={`${stickyCellClass} h-px whitespace-nowrap text-base font-semibold`}><a href={toolHref(row)} className={cellLinkClass}><ToolLogo tool={row} className="size-7" />{row.name}</a></th>
                <td className="h-px whitespace-nowrap font-semibold tabular-nums"><a href={toolHref(row)} tabIndex={-1} className={cellLinkClass}>{row.startsAt}</a></td>
                <td className="h-px text-muted-foreground"><a href={toolHref(row)} tabIndex={-1} className={cellLinkClass}>{row.payFor}</a></td>
                <td className="h-px"><a href={toolHref(row)} tabIndex={-1} className={cellLinkClass}>{row.freePlan}</a></td>
                <td className="h-px text-muted-foreground"><a href={toolHref(row)} tabIndex={-1} className={cellLinkClass}>{row.selfHosting}</a></td>
                <td className="h-px min-w-52 text-muted-foreground"><a href={toolHref(row)} tabIndex={-1} className={cellLinkClass}>{row.whySwitch}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </DirectoryTableShell>
    {page.alternatives.compareLinks?.some((link) => publishedComparePages.includes(link.slug)) && (
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {page.alternatives.compareLinks.filter((link) => publishedComparePages.includes(link.slug)).map((link) => <li key={link.slug}><Link href={`/compare/${link.slug}`} className="font-medium">{link.label}</Link></li>)}
      </ul>
    )}
    <div><LinkButton href="/automation-tools" variant="ghost">See all automation tools →</LinkButton></div>
  </DirectorySection>
);
