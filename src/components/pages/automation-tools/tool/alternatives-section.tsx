import { Section } from "../section";
import { DataTable } from "@/components/site/data-table";
import { Link, LinkButton } from "@/components/ui/link";
import { publishedComparePages } from "@/lib/compare-pages";
import { toolHref } from "@/lib/automation-tools";
import type { ToolPage } from "@/lib/tool-pages/types";
import { ToolLogo } from "../tool-logo";

const columns = ["Tool", "Starts at", "You pay for", "Free plan", "Self-hosting", "Why switch"];

export const AlternativesSection = ({ page }: { page: ToolPage }) => (
  <Section id="alternatives" label="Alternatives" title={page.alternatives.heading} intro={page.alternatives.intro}>
    <DataTable
      caption={page.alternatives.heading}
      headers={columns}
      hrefs={page.alternatives.rows.map((row) => toolHref(row))}
      rows={page.alternatives.rows.map((row) => [
        <span key="tool" className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted"><ToolLogo tool={row} className="size-6" /></span>
          {row.name}
        </span>,
        <span key="starts" className="text-lg font-semibold tracking-tight">{row.startsAt}</span>,
        <span key="pay" className="font-sans text-muted-foreground group-hover:text-paper/70">{row.payFor}</span>,
        <span key="free" className="font-sans">{row.freePlan}</span>,
        <span key="host" className="font-sans text-muted-foreground group-hover:text-paper/70">{row.selfHosting}</span>,
        <span key="why" className="font-sans text-muted-foreground group-hover:text-paper/70">{row.whySwitch}</span>,
      ])}
    />
    {page.alternatives.compareLinks?.some((link) => publishedComparePages.includes(link.slug)) && (
      <ul className="flex flex-wrap gap-x-6 gap-y-2">
        {page.alternatives.compareLinks.filter((link) => publishedComparePages.includes(link.slug)).map((link) => <li key={link.slug}><Link href={`/compare/${link.slug}`} className="font-medium">{link.label}</Link></li>)}
      </ul>
    )}
    <div><LinkButton href="/automation-tools" variant="ghost">See all automation tools →</LinkButton></div>
  </Section>
);
