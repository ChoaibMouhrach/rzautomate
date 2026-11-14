"use client";

import { useState } from "react";
import { CountInput } from "@/components/ui/count-input";
import { FreeText } from "@/components/ui/free-text";
import { Link } from "@/components/ui/link";
import { getModel, modelRates, requestCost, type Rates } from "@/lib/models";
import { countValue } from "@/lib/number-input";
import { workflows } from "../content";
import type { ModelPageContent } from "./types";

const fields = [
  { key: "requests", label: "Requests per month" },
  { key: "input", label: "Input tokens per request" },
  { key: "output", label: "Output tokens per request" },
  { key: "cached", label: "Share of input from cache (%)" },
] as const;

const MAX_COUNT = 999_999_999_999;

const money = (value: number) => `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const perRequest = (value: number) => `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
const inputClass = "h-12 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary";

export const ModelCalculator = ({ slug, calc }: { slug: string; calc: ModelPageContent["calc"] }) => {
  const model = getModel(slug)!;
  const [values, setValues] = useState({ requests: "1000", input: "2000", output: "400", cached: "0" });
  const counts = { requests: countValue(values.requests), input: countValue(values.input), output: countValue(values.output), cached: countValue(values.cached) };
  const [rateIndex, setRateIndex] = useState(0);
  const alt = rateIndex > 0 ? calc.altRates?.[rateIndex - 1] : undefined;
  const rates: Rates = alt ?? modelRates(model, counts.input);
  const cost = requestCost(rates, counts.input, counts.output, counts.cached);
  const monthly = cost * counts.requests;
  return (
    <div className="grid gap-4 lg:grid-cols-[3fr_2fr]">
      <div className="space-y-6 rounded-3xl bg-muted p-6 md:p-10">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">Start from a job</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Job presets">
            {workflows.map((job) => (
              <button key={job.href} type="button" onClick={() => setValues({ requests: String(job.count), input: String(job.input), output: String(job.output), cached: "0" })} className="cursor-pointer rounded-full bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-background/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                {job.count.toLocaleString("en-US")} {job.preset}
              </button>
            ))}
          </div>
        </div>
        {calc.altRates && (
          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Rate period</p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Rate period">
              {["Now", ...calc.altRates.map((option) => option.label)].map((label, index) => (
                <button key={label} type="button" aria-pressed={rateIndex === index} onClick={() => setRateIndex(index)} className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${rateIndex === index ? "bg-primary text-primary-foreground" : "bg-background"}`}>{label}</button>
              ))}
            </div>
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(({ key, label }) => (
            <label key={key} className="grid gap-2 text-sm font-medium">
              {label}
              <CountInput value={values[key]} onValueChange={(next) => setValues({ ...values, [key]: next })} max={key === "cached" ? 100 : MAX_COUNT} className={inputClass} />
            </label>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{calc.note}</p>
      </div>
      <div className="flex flex-col justify-between gap-10 rounded-3xl bg-ink p-6 text-paper md:p-10">
        <div aria-live="polite" className="tabular-nums">
          <p className="text-sm font-medium text-paper/70">Per month</p>
          <p className="mt-2 text-6xl font-semibold leading-none tracking-tighter md:text-7xl">{money(monthly)}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4">
            <div><dt className="text-sm text-paper/70">Cost per request</dt><dd className="mt-1 text-xl font-semibold">{perRequest(cost)}</dd></div>
            <div><dt className="text-sm text-paper/70">Per year</dt><dd className="mt-1 text-xl font-semibold">{money(monthly * 12)}</dd></div>
          </dl>
        </div>
        <div>
          <p className="text-sm font-medium text-paper/70">Same job on other models</p>
          <ul className="mt-3 space-y-2">
            {calc.compare.map((entry) => {
              if (typeof entry !== "string") return <li key={entry.name} className="flex justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3"><span>{entry.name}</span><span className="font-semibold tabular-nums">{entry.monthly}</span></li>;
              const other = getModel(entry)!;
              const otherCost = requestCost(modelRates(other, counts.input), counts.input, counts.output, counts.cached) * counts.requests;
              return (
                <li key={entry}>
                  <a href={`/models/${entry}`} className="flex justify-between gap-4 rounded-2xl bg-white/10 px-4 py-3 transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
                    <span>{other.name}</span>
                    <span className="font-semibold tabular-nums">{money(otherCost)}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-sm lg:col-span-2">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {workflows.map((job) => <li key={job.href}><Link href={job.href}>{job.service}</Link></li>)}
        </ul>
        <p>Want this costed on your real data? <Link href={`/book?service=${calc.service}&source=models&model=${slug}`}><FreeText>Book a free 30-min call</FreeText></Link></p>
      </div>
    </div>
  );
};
