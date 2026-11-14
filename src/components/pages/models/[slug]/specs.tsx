"use client";

import { LandingHeading, LandingSection, SectionLabel } from "@/components/site/landing-section";
import { CopyButton } from "@/components/ui/copy-button";
import { DataTable } from "@/components/site/data-table";

const featured = ["Context window", "Max output"];
const tones = ["bg-ink text-paper", "bg-primary text-primary-foreground"];
const mutedTones = ["text-paper/70", "text-primary-foreground/85"];

export const SpecsSection = ({ name, rows }: { name: string; rows: [string, string][] }) => {
  const tiles = featured.map((label) => rows.find(([key]) => key === label)).filter((row): row is [string, string] => Boolean(row));
  const rest = rows.filter(([label]) => !featured.includes(label));

  return (
    <LandingSection>
      <div className="max-w-2xl">
        <SectionLabel>Specs</SectionLabel>
        <LandingHeading className="mt-4">{name} context window and specs</LandingHeading>
      </div>
      <div className={`mt-12 grid items-stretch gap-4 md:mt-14 ${tiles.length ? "lg:grid-cols-[2fr_3fr]" : ""}`}>
        {tiles.length > 0 && (
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {tiles.map(([label, value], index) => (
              <div key={label} className={`flex min-h-56 flex-col justify-between gap-8 rounded-3xl p-8 md:p-10 ${tones[index]}`}>
                <dt className={`text-sm font-medium ${mutedTones[index]}`}>{label}</dt>
                <dd className="text-balance text-4xl font-semibold leading-tight tracking-tighter md:text-5xl">{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <DataTable
          caption={`${name} specifications`}
          headers={["Spec", "Details"]}
          rows={rest.map(([label, value]) => [
            label,
            label === "API model ID" ? (
              <span key={label} className="flex items-center justify-between gap-3">
                <code className="min-w-0 break-all font-sans">{value}</code>
                <CopyButton text={value} label={`Copy ${value}`} />
              </span>
            ) : (
              <span key={label} className="font-sans">{value}</span>
            ),
          ])}
        />
      </div>
    </LandingSection>
  );
};
