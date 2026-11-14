import { ChecklistCard } from "./checklist-card";
import { Section } from "../section";
import type { ToolPage } from "@/lib/tool-pages/types";

export const BillingSection = ({ page }: { page: ToolPage }) => {
  const { billing } = page;
  return (
    <Section label="How billing works" title={billing.heading} intro={billing.body}>
      <div className="grid gap-4 md:grid-cols-2">
        <ChecklistCard title="What counts" items={billing.counts} positive badge={`${billing.counts.length} things`} />
        <ChecklistCard title="What doesn't count" items={billing.doesntCount} positive={false} badge={`${billing.doesntCount.length} things`} />
      </div>
      <div className="rounded-3xl bg-tint p-8 md:p-10">
        <p className="text-xl font-medium tracking-tight">{billing.example.line}</p>
        <ol className="mt-8 flex flex-col items-stretch md:flex-row md:items-center">
          {billing.example.steps.flatMap((step, index) => [
            <li key={step} className="flex-1 rounded-2xl bg-background p-6 md:flex-none md:basis-1/4">
              <p className="text-sm text-muted-foreground">{step}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tighter">{billing.example.values[index]}</p>
            </li>,
            index < 2 && <span key={`${step}-beam`} aria-hidden className="beam-link relative mx-auto h-10 w-[3px] shrink-0 overflow-hidden rounded-full bg-border md:mx-0 md:h-[3px] md:w-auto md:flex-1" />,
          ])}
        </ol>
      </div>
    </Section>
  );
};
