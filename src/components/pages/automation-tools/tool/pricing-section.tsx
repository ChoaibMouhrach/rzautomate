import { useState } from "react";
import { DirectorySection, DirectoryTableShell, FilterChip, rowClass, tableHeadClass } from "@/components/site/directory";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getToolPage } from "@/lib/tool-pages";

export const PricingSection = ({ slug }: { slug: string }) => {
  const { pricing } = getToolPage(slug);
  const [yearly, setYearly] = useState(true);
  const price = (row: (typeof pricing.rows)[number]) => (yearly ? row.yearly : row.monthly);

  return (
    <DirectorySection id="pricing" title={pricing.heading} intro={pricing.intro}>
      {pricing.hasBillingToggle && (
        <div className="flex gap-2" role="group" aria-label="Billing period">
          <FilterChip pressed={!yearly} onPress={() => setYearly(false)}>Monthly</FilterChip>
          <FilterChip pressed={yearly} onPress={() => setYearly(true)}>Yearly</FilterChip>
        </div>
      )}
      <ul className="space-y-3 md:hidden">
        {pricing.rows.map((row) => (
          <li key={row.plan} className="rounded-3xl bg-muted p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold">{row.plan}</h3>
              <p className="text-xl font-semibold tabular-nums">{price(row)}</p>
            </div>
            <p className="mt-3 text-sm">{row.includes}</p>
            <p className="mt-1 text-sm text-muted-foreground">{row.users}</p>
            <p className="mt-3 text-sm text-muted-foreground">{row.goodToKnow}</p>
          </li>
        ))}
      </ul>
      <DirectoryTableShell className="hidden md:block">
        <ScrollArea orientation="horizontal" contentClassName="pb-3">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">{pricing.heading}</caption>
            <thead><tr>{pricing.columns.map((label) => <th key={label} scope="col" className={tableHeadClass}>{label}</th>)}</tr></thead>
            <tbody className="divide-y divide-border/60">
              {pricing.rows.map((row) => (
                <tr key={row.plan} className={rowClass.replace("cursor-pointer ", "")}>
                  <th scope="row" className="whitespace-nowrap px-5 py-5 text-base font-semibold">{row.plan}</th>
                  <td className="whitespace-nowrap px-5 py-5 font-semibold tabular-nums">{price(row)}</td>
                  <td className="px-5 py-5">{row.includes}</td>
                  <td className="px-5 py-5 text-muted-foreground">{row.users}</td>
                  <td className="min-w-52 px-5 py-5 text-muted-foreground">{row.goodToKnow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      </DirectoryTableShell>
      {pricing.overLimitLine && <p className="max-w-3xl text-muted-foreground">{pricing.overLimitLine}</p>}
      <p className="text-sm text-muted-foreground">{pricing.sourceLine}</p>
    </DirectorySection>
  );
};
