import { DirectorySection } from "@/components/site/directory";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FeaturesSection = ({ page }: { page: ToolPage }) => (
  <DirectorySection title={page.features.heading}>
    <dl className="divide-y divide-border/60">
      {page.features.rows.map((row) => (
        <div key={row.label} className="grid gap-1 py-5 sm:grid-cols-[1fr_2fr] sm:gap-8">
          <dt className="font-semibold">{row.label}</dt>
          <dd className="text-muted-foreground">{row.value}</dd>
        </div>
      ))}
    </dl>
  </DirectorySection>
);
