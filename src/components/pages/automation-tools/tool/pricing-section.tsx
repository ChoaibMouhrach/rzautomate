import { useState } from "react";
import { Section } from "../section";
import { FilterChip } from "@/components/site/directory";
import { DataTable } from "@/components/site/data-table";
import { getToolPage } from "@/lib/tool-pages";

export const PricingSection = ({ slug }: { slug: string }) => {
  const { pricing } = getToolPage(slug);
  const [yearly, setYearly] = useState(true);
  const price = (row: (typeof pricing.rows)[number]) => (yearly ? row.yearly : row.monthly);

  return (
    <Section id="pricing" label="Plans" title={pricing.heading} intro={pricing.intro}>
      {pricing.hasBillingToggle && (
        <div className="flex gap-2" role="group" aria-label="Billing period">
          <FilterChip pressed={!yearly} onPress={() => setYearly(false)}>Monthly</FilterChip>
          <FilterChip pressed={yearly} onPress={() => setYearly(true)}>Yearly</FilterChip>
        </div>
      )}
      <div className="rounded-3xl bg-muted p-2 md:hidden">
        <ul className="space-y-2">
          {pricing.rows.map((row) => (
            <li key={row.plan} className="rounded-2xl bg-background p-5">
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
      </div>
      <div className="hidden md:block">
        <DataTable
          caption={pricing.heading}
          headers={pricing.columns}
          rows={pricing.rows.map((row) => [
            row.plan,
            <span key="price" className="text-lg font-semibold tracking-tight">{price(row)}</span>,
            <span key="includes" className="font-sans">{row.includes}</span>,
            <span key="users" className="font-sans text-muted-foreground">{row.users}</span>,
            <span key="know" className="font-sans text-muted-foreground">{row.goodToKnow}</span>,
          ])}
        />
      </div>
      {pricing.overLimitLine && <p className="max-w-3xl text-muted-foreground">{pricing.overLimitLine}</p>}
      <p className="text-sm text-muted-foreground">{pricing.sourceLine}</p>
    </Section>
  );
};
