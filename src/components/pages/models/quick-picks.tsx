import { ArrowUpRight } from "lucide-react";
import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { formatPrice, formatTokens } from "@/lib/models";
import { cheapest, cheapestOpen, cheapestTools, largest } from "./content";
import { ProviderChip } from "./provider-logo";

const picks = [
  { label: "Cheapest output", model: cheapest, line: `${formatPrice(cheapest.outputPrice)} per 1M output tokens` },
  { label: "Largest context", model: largest, line: `Reads up to ${formatTokens(largest.context)} tokens at once` },
  { label: "Cheapest with tool calling", model: cheapestTools, line: `${formatPrice(cheapestTools.outputPrice)} per 1M output tokens` },
  { label: "Cheapest open weights", model: cheapestOpen, line: cheapestOpen ? `${formatPrice(cheapestOpen.outputPrice)} per 1M output tokens` : "None in the table yet" },
];

const tones = ["bg-ink text-paper", "bg-muted", "bg-tint", "bg-primary text-primary-foreground"];
const mutedTones = ["text-paper/70", "text-muted-foreground", "text-muted-foreground", "text-primary-foreground/85"];

export const QuickPicks = () => (
  <LandingSection>
    <LandingHeading>Quick picks</LandingHeading>
    <ul className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
      {picks.map((pick, index) => {
        const body = (
          <>
            <span className="flex items-start justify-between gap-4">
              {pick.model ? <ProviderChip provider={pick.model.provider} /> : <span />}
              {pick.model && <ArrowUpRight aria-hidden className="size-6 opacity-60 transition-opacity group-hover:opacity-100" />}
            </span>
            <span className="block">
              <span className={`block text-sm font-medium ${mutedTones[index]}`}>{pick.label}</span>
              <span className="mt-2 block min-h-[2.5em] text-2xl font-semibold leading-tight tracking-tighter [overflow-wrap:anywhere]">{pick.model?.name ?? "—"}</span>
              <span className={`mt-3 block min-h-12 ${mutedTones[index]}`}>{pick.line}</span>
            </span>
          </>
        );
        const className = `group flex min-h-72 w-full min-w-0 flex-col justify-between gap-8 rounded-3xl p-8 ${tones[index]}`;
        return (
          <li key={pick.label} className="flex">
            {pick.model ? <a href={`/models/${pick.model.slug}`} className={`${className} transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`}>{body}</a> : <div className={className}>{body}</div>}
          </li>
        );
      })}
    </ul>
    <p className="mt-6 text-sm text-muted-foreground">Picked automatically from the table, so they change when prices do.</p>
  </LandingSection>
);
