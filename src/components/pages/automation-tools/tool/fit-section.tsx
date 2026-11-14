import { ChecklistCard } from "./checklist-card";
import { LineParts } from "./line-parts";
import { fitLineFor } from "./service-links";
import { Section } from "../section";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FitSection = ({ page }: { page: ToolPage }) => {
  const { fit } = page;
  const fitLine = fitLineFor(page.slug, page.name);
  return (
    <Section label="Is it right for you?" title={fit.heading}>
      <div className="grid gap-4 md:grid-cols-2">
        <ChecklistCard title={fit.goodTitle} items={fit.good} positive badge={`${fit.good.length} signs`} />
        <ChecklistCard title={fit.notTitle} items={fit.not} positive={false} badge={`${fit.not.length} signs`} />
      </div>
      <div className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
        <p className="text-sm font-medium text-primary-foreground/85">Our take</p>
        <p className="mt-4 max-w-3xl text-balance text-2xl leading-snug tracking-tight md:text-3xl">{fit.ourTake}</p>
        {fitLine && <p className="mt-6 max-w-3xl text-primary-foreground/85 [&_a]:text-primary-foreground"><LineParts parts={fitLine} /></p>}
      </div>
    </Section>
  );
};
