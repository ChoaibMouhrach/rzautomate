import { Section } from "../section";
import type { ToolPage } from "@/lib/tool-pages/types";

const tones = ["bg-muted", "bg-tint"];

export const FeaturesSection = ({ page }: { page: ToolPage }) => (
  <Section label="At a glance" title={page.features.heading}>
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {page.features.rows.map((row, index) => (
        <div key={row.label} className={`flex min-h-44 flex-col justify-between gap-8 rounded-3xl p-8 ${tones[(index + Math.floor(index / 2)) % 2]}`}>
          <dt className="text-sm font-medium text-muted-foreground">{row.label}</dt>
          <dd className="text-xl font-semibold leading-snug tracking-tight">{row.value}</dd>
        </div>
      ))}
    </dl>
  </Section>
);
