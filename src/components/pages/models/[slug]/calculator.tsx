"use client";

import { useState } from "react";
import { FreeText } from "@/components/ui/free-text";
import { Link } from "@/components/ui/link";
import { getModel, modelRates, requestCost, type Rates } from "@/lib/models";
import { workflows } from "../content";
import type { ModelPageContent } from "./types";

const fields = [
  { key: "requests", label: "Requests per month" },
  { key: "input", label: "Input tokens per request" },
  { key: "output", label: "Output tokens per request" },
  { key: "cached", label: "Share of input from cache (%)" },
] as const;

const money = (value: number) => `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const perRequest = (value: number) => `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
const inputClass = "w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary";

export const ModelCalculator = ({ slug, calc }: { slug: string; calc: ModelPageContent["calc"] }) => {
  const model = getModel(slug)!;
  const [values, setValues] = useState({ requests: 1000, input: 2000, output: 400, cached: 0 });
  const [rateIndex, setRateIndex] = useState(0);
  const alt = rateIndex > 0 ? calc.altRates?.[rateIndex - 1] : undefined;
  const rates: Rates = alt ?? modelRates(model, values.input);
  const cost = requestCost(rates, values.input, values.output, values.cached);
  const monthly = cost * values.requests;
  const set = (key: keyof typeof values, max: number) => (event: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [key]: Math.min(max, Math.max(0, Number(event.target.value) || 0)) });

  return (
    <div className="mt-12 grid gap-8 rounded-3xl bg-muted p-6 md:mt-14 md:p-10 lg:grid-cols-2">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Job presets">
          {workflows.map((job) => (
            <button key={job.href} type="button" onClick={() => setValues({ requests: job.count, input: job.input, output: job.output, cached: 0 })} className="cursor-pointer rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-background/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              {job.count.toLocaleString("en-US")} {job.preset}
            </button>
          ))}
        </div>
        {calc.altRates && (
          <div className="flex gap-2" role="group" aria-label="Rate period">
            {["Now", ...calc.altRates.map((option) => option.label)].map((label, index) => (
              <button key={label} type="button" aria-pressed={rateIndex === index} onClick={() => setRateIndex(index)} className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${rateIndex === index ? "bg-primary text-primary-foreground" : "bg-background"}`}>{label}</button>
            ))}
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(({ key, label }) => (
            <label key={key} className="grid gap-2 text-sm font-medium">
              {label}
              <input type="number" inputMode="numeric" min={0} max={key === "cached" ? 100 : undefined} value={values[key]} onChange={set(key, key === "cached" ? 100 : Number.MAX_SAFE_INTEGER)} className={inputClass} />
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div aria-live="polite" className="tabular-nums">
          <p className="text-sm text-muted-foreground">Per month</p>
          <p className="mt-1 text-6xl font-semibold tracking-tighter">{money(monthly)}</p>
          <dl className="mt-6 grid grid-cols-2 gap-4">
            <div><dt className="text-sm text-muted-foreground">Cost per request</dt><dd className="mt-1 text-xl font-semibold">{perRequest(cost)}</dd></div>
            <div><dt className="text-sm text-muted-foreground">Per year</dt><dd className="mt-1 text-xl font-semibold">{money(monthly * 12)}</dd></div>
          </dl>
        </div>
        <div>
          <p className="text-sm font-medium">Same job on other models</p>
          <ul className="mt-3 space-y-2 text-sm">
            {calc.compare.map((entry) => {
              if (typeof entry !== "string") return <li key={entry.name} className="flex justify-between gap-4"><span>{entry.name}</span><span className="tabular-nums">{entry.monthly}</span></li>;
              const other = getModel(entry)!;
              const otherCost = requestCost(modelRates(other, values.input), values.input, values.output, values.cached) * values.requests;
              return <li key={entry} className="flex justify-between gap-4"><Link href={`/models/${entry}`}>{other.name}</Link><span className="tabular-nums">{money(otherCost)}</span></li>;
            })}
          </ul>
        </div>
      </div>
      <div className="space-y-3 text-sm lg:col-span-2">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {workflows.map((job) => <li key={job.href}><Link href={job.href}>{job.service}</Link></li>)}
        </ul>
        <p>Want this costed on your real data? <Link href={`/book?service=${calc.service}&source=models&model=${slug}`}><FreeText>Book a free 30-min call</FreeText></Link></p>
        <p className="text-muted-foreground">{calc.note}</p>
      </div>
    </div>
  );
};
