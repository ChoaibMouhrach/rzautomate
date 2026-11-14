import { ArrowUpRight, Scale, Sparkles, Zap } from "lucide-react";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { formatPrice } from "@/lib/models";
import { tierColumns, tierModels, tierPriceLine } from "./content";
import { ProviderChip } from "./provider-logo";

const icons = { sparkles: Sparkles, scale: Scale, zap: Zap } as const;

const tones = ["bg-muted", "bg-tint", "bg-ink text-paper"];
const mutedTones = ["text-muted-foreground", "text-muted-foreground", "text-paper/70"];
const iconTones = ["bg-background text-primary", "bg-background text-primary", "bg-primary text-primary-foreground"];
const rowTones = ["bg-background hover:bg-background/60", "bg-background hover:bg-background/60", "bg-white/10 hover:bg-white/15"];

export const Tiers = () => {
  const columns = tierColumns.filter(({ tier }) => tierModels(tier).length > 0);
  return (
    <LandingSection>
      <LandingHeading>Three kinds of AI models</LandingHeading>
      <ul className={`mt-12 grid gap-4 md:mt-14 md:gap-y-0 ${columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        {columns.map((column, index) => {
          const Icon = icons[column.icon];
          return (
            <li key={column.tier} className={`flex flex-col rounded-3xl p-8 md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0 md:p-10 ${tones[index]}`}>
              <div>
              <span className={`flex size-14 items-center justify-center rounded-full ${iconTones[index]}`}>
                <Icon aria-hidden className="size-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-10 text-3xl font-semibold leading-tight tracking-tighter">{column.title}</h3>
              <p className={`mt-3 text-lg ${mutedTones[index]}`}>{column.body}</p>
              </div>
              <p className="mt-6 font-medium tabular-nums">{tierPriceLine(column.tier)}</p>
              <ul className="mt-8 space-y-2">
                {tierModels(column.tier).slice(0, 4).map((model) => (
                  <li key={model.slug}>
                    <a href={`/models/${model.slug}`} className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${rowTones[index]}`}>
                      <ProviderChip provider={model.provider} className="size-10 bg-muted" logoClassName="size-6" />
                      <span className="mr-auto min-w-0">
                        <span className="block font-semibold">{model.name}</span>
                        <span className={`block text-sm tabular-nums ${mutedTones[index]}`}>{formatPrice(model.outputPrice)} per 1M output</span>
                      </span>
                      <ArrowUpRight aria-hidden className="size-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
              <div>{tierModels(column.tier).length > 4 && <a href={`/models?tier=${column.tier}#models`} className="mt-6 inline-block font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">See all in the table →</a>}</div>
            </li>
          );
        })}
      </ul>
    </LandingSection>
  );
};
