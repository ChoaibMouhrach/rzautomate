"use client";

import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { CopyButton } from "@/components/ui/copy-button";

export const SpecsSection = ({ name, rows }: { name: string; rows: [string, string][] }) => (
  <LandingSection>
    <LandingHeading>{name} context window and specs</LandingHeading>
    <dl className="mt-10 divide-y divide-border/60 rounded-3xl bg-muted px-6 md:px-10">
      {rows.map(([label, value]) => (
        <div key={label} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
          <dt className="text-sm text-muted-foreground">{label}</dt>
          <dd className="flex items-center gap-2 font-medium">
            {label === "API model ID" ? <code className="font-sans">{value}</code> : value}
            {label === "API model ID" && <CopyButton text={value} label={`Copy ${value}`} />}
          </dd>
        </div>
      ))}
    </dl>
  </LandingSection>
);
