import { Check } from "lucide-react";
import { directoryHeadingClass, directorySectionClass } from "@/components/site/directory";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FreePlanSection = ({ page }: { page: ToolPage }) => (
  <section className={directorySectionClass}>
    <div className="grid gap-8 rounded-3xl bg-muted p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 className={directoryHeadingClass}>{page.freePlan.heading}</h2>
        <p className="mt-5 text-lg text-muted-foreground">{page.freePlan.answer}</p>
      </div>
      <ul className="space-y-3 self-center">
        {page.freePlan.rows.map((row) => (
          <li key={row} className="flex items-center gap-4 rounded-2xl bg-background px-5 py-4">
            <Check aria-hidden className="size-5 shrink-0 text-primary" />{row}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
