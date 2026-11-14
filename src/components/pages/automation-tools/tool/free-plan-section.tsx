import { Check } from "lucide-react";
import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FreePlanSection = ({ page }: { page: ToolPage }) => (
  <LandingSection>
    <div className="grid gap-8 rounded-3xl bg-ink p-8 text-paper sm:p-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <SectionLabel className="text-paper/60">Free plan</SectionLabel>
        <LandingHeading className="mt-4">{page.freePlan.heading}</LandingHeading>
        <p className="mt-5 text-lg text-paper/70">{page.freePlan.answer}</p>
      </div>
      <ul className="space-y-3 self-center">
        {page.freePlan.rows.map((row) => (
          <li key={row} className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4">
            <Check aria-hidden className="size-5 shrink-0 text-primary" />{row}
          </li>
        ))}
      </ul>
    </div>
  </LandingSection>
);
