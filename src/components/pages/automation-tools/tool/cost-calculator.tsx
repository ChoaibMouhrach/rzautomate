import { useState } from "react";
import { FilterChip } from "@/components/site/directory";
import { Section } from "../section";
import { CountInput } from "@/components/ui/count-input";
import { NumberTicker } from "@/components/ui/number-ticker";
import { countValue } from "@/lib/number-input";
import { getToolPage, toolPages } from "@/lib/tool-pages";

const fieldClass = "mt-2 h-12 w-full rounded-2xl bg-background px-5 text-base tabular-nums focus-visible:outline-2 focus-visible:outline-ring";
const MAX_COUNT = 999_999_999_999;
const compareSlugs = ["zapier", "make"];

export const CostCalculator = ({ slug }: { slug: string }) => {
  const page = getToolPage(slug);
  const { calculator } = page;
  const [runs, setRuns] = useState(String(calculator.defaults.runs));
  const [steps, setSteps] = useState(String(calculator.defaults.steps));
  const [yearly, setYearly] = useState(calculator.defaults.yearly);
  const [extra, setExtra] = useState<Record<string, string>>(Object.fromEntries((calculator.extraInputs ?? []).map((input) => [input.id, String(input.default)])));
  const input = { runs: countValue(runs), steps: Math.max(1, countValue(steps)), yearly, extra: Object.fromEntries(Object.entries(extra).map(([key, value]) => [key, countValue(value)])) };
  const result = calculator.calculate(input);
  const compare = toolPages.filter((tool) => compareSlugs.includes(tool.slug) && tool.slug !== slug);

  return (
    <Section id="calculator" label="Estimate your bill" title={calculator.heading} intro={calculator.intro}>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-5 rounded-3xl bg-muted p-8 md:p-10">
          <label className="block text-sm font-medium">Runs per month
            <CountInput value={runs} onValueChange={setRuns} max={MAX_COUNT} className={fieldClass} />
          </label>
          <label className="block text-sm font-medium">Steps per run
            <CountInput value={steps} onValueChange={setSteps} max={MAX_COUNT} className={fieldClass} />
          </label>
          {(calculator.extraInputs ?? []).map((extraInput) => (
            <label key={extraInput.id} className="block text-sm font-medium">{extraInput.label}
              <CountInput value={extra[extraInput.id]} onValueChange={(next) => setExtra({ ...extra, [extraInput.id]: next })} max={MAX_COUNT} className={fieldClass} />
            </label>
          ))}
          {page.pricing.hasBillingToggle && (
            <div role="group" aria-label="Billing" className="flex gap-2">
              <FilterChip inset pressed={yearly} onPress={() => setYearly(true)}>Yearly</FilterChip>
              <FilterChip inset pressed={!yearly} onPress={() => setYearly(false)}>Monthly</FilterChip>
            </div>
          )}
        </div>
        <div className="flex flex-col rounded-3xl bg-ink p-8 text-paper md:p-10" aria-live="polite">
          <dl className="grid grid-cols-2 gap-6">
            <div><dt className="text-sm text-paper/60">Units used</dt><dd className="mt-2 text-2xl font-semibold tracking-tight tabular-nums">{result.units}</dd></div>
            <div><dt className="text-sm text-paper/60">Cheapest plan</dt><dd className="mt-2 text-2xl font-semibold tracking-tight">{result.plan}</dd></div>
          </dl>
          <p className="mt-10 text-sm text-paper/60">Monthly cost</p>
          <p className="mt-1 text-7xl font-semibold leading-none tracking-tighter"><NumberTicker key={result.cost} value={result.cost} /></p>
          {result.costNote && <p className="mt-3 text-sm text-paper/70">{result.costNote}</p>}
          {result.selfHostLine && <p className="mt-4 text-sm text-paper/70">{result.selfHostLine}</p>}
          {compare.length > 0 && (
            <div className="mt-auto pt-8">
              <p className="text-sm font-medium">Same workload on other tools</p>
              <ul className="mt-3 space-y-2">
                {compare.map((tool) => {
                  const effectiveSteps = input.steps + (input.extra.loopItems ?? 0) * (input.extra.loopSteps ?? 0);
                  const other = tool.calculator.calculate({ ...input, steps: effectiveSteps, extra: {} });
                  return <li key={tool.slug}><a href={`/automation-tools/${tool.slug}`} className="flex justify-between gap-4 rounded-2xl bg-white/10 px-5 py-3 text-sm transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"><span className="font-medium">{tool.name}</span><span className="tabular-nums text-paper/70">{other.cost}</span></a></li>;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{calculator.note}</p>
    </Section>
  );
};
