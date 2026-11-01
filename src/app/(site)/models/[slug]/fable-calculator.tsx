"use client";

import { useState } from "react";
import { Link } from "@/components/ui/link";
import { models, formatPrice } from "@/lib/models";
import { workflows } from "../content";

const fields = ["Requests per month", "Input tokens per request", "Output tokens per request", "Share of input served from cache (%)"];

export function FableCalculator() {
  const [values, setValues] = useState([1, 100000, 20000, 0]);
  const [requests, input, output, cached] = values;
  const inputCost = input * (10 * (1 - cached / 100) + 0.25 * cached / 100) / 1000000;
  const outputCost = output * 50 / 1000000;
  const cost = inputCost + outputCost;
  return <div className="space-y-6 rounded-xl border border-border p-6">
    <div className="grid gap-4 sm:grid-cols-2">{fields.map((label, index) => <label key={label} className="grid gap-2 text-sm font-medium">{label}<input type="number" min="0" max={index === 3 ? 100 : undefined} step={index === 3 ? "any" : 1} value={values[index]} onChange={(event) => setValues(values.map((value, i) => i === index ? Math.min(index === 3 ? 100 : Number.MAX_SAFE_INTEGER, Math.max(0, Number(event.target.value) || 0)) : value))} className="w-full rounded-lg border border-border bg-background px-3 py-2" /></label>)}</div>
    <div aria-live="polite" className="space-y-2 tabular-nums"><p className="text-2xl font-semibold">{formatPrice(cost)} per request</p><p>{formatPrice(inputCost)} input + {formatPrice(outputCost)} output</p><p>{formatPrice(cost * requests)} per month · {formatPrice(cost * requests * 12)} per year</p></div>
    <p className="text-sm text-muted-foreground">Illustrative presets, not measured client usage. Estimates exclude cache writes, tools, hosting and taxes. Output volume must include thinking tokens.</p>
    <div className="grid gap-4">{workflows.map((job) => <div key={job.name} className="flex flex-wrap items-center justify-between gap-2 text-sm"><button type="button" className="cursor-pointer rounded-lg border border-border px-3 py-2 text-left hover:bg-muted" onClick={() => setValues([job.count, job.input, job.output, 0])}>{job.name} ({job.input.toLocaleString("en-US")} input + {job.output} output each) · {formatPrice(job.count * (job.input * 10 + job.output * 50) / 1000000)}/month</button><Link href={job.href}>{job.service}</Link></div>)}</div>
    <p className="text-sm">For most of these jobs, Fable 5.1 is more model than you need. Compare the same volume:</p>
    <ul className="space-y-2 text-sm">{models.filter((model) => model.slug === "claude-sonnet-5-5" || model.slug === "claude-opus-5-5").map((model) => <li key={model.slug}><Link href={`/models/${model.slug}`}>{model.name}</Link>: {formatPrice(requests * (input * (model.inputPrice * (1 - cached / 100) + model.cachedInputPrice * cached / 100) + output * model.outputPrice) / 1000000)}/month</li>)}</ul>
  </div>;
}

export function CopyModelId({ value }: { value: string }) {
  const [status, setStatus] = useState("Copy");
  return <span className="inline-flex flex-wrap items-center gap-3"><code>{value}</code><button type="button" aria-label={`Copy ${value}`} className="cursor-pointer rounded border border-border px-2 py-1 text-xs hover:bg-muted" onClick={async () => { try { await navigator.clipboard.writeText(value); setStatus("Copied"); } catch { setStatus("Copy failed"); } }}><span aria-live="polite">{status}</span></button></span>;
}
