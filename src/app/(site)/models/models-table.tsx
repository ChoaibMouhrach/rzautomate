"use client";

import NextLink from "next/link";
import { Button, Link, ToggleButton } from "react-aria-components";
import { ModelsScrollArea } from "./models-scroll-area";
import { ModelsTooltip } from "./models-tooltip";
import { ModelWeightsBadge } from "./model-weights-badge";
import { useModelsTableState, type SortKey } from "./models-table-state";
import { Brain, Eye, Braces, Wrench } from "lucide-react";
import { formatPrice, formatTokens, models, type AiModel } from "@/lib/models";

const columns: { key: SortKey; label: string; tip: string }[] = [
  { key: "name", label: "Model", tip: "Links to the full spec and pricing page." },
  { key: "provider", label: "Provider", tip: "The company that makes the model." },
  { key: "inputPrice", label: "Input $/1M", tip: "Price for 1 million tokens you send: prompts, documents and chat history." },
  { key: "outputPrice", label: "Output $/1M", tip: "Price for 1 million tokens the model writes back." },
  { key: "cachedInputPrice", label: "Cached input $/1M", tip: "Rate for cached input. A dash means not offered or not published." },
  { key: "context", label: "Context", tip: "Maximum context budget per request, in tokens." },
  { key: "output", label: "Max output", tip: "Maximum generated tokens in a single answer." },
  { key: "features", label: "Features", tip: "Tool calling, vision, reasoning and structured output; sorted by supported feature count." },
  { key: "openWeights", label: "Open weights", tip: "Whether downloadable model weights are available." },
  { key: "released", label: "Released", tip: "First public release date." },
];
const features = [
  { key: "tools", label: "Tool calling", Icon: Wrench },
  { key: "vision", label: "Vision (image input)", Icon: Eye },
  { key: "reasoning", label: "Reasoning", Icon: Brain },
  { key: "structured", label: "Structured output", Icon: Braces },
] as const;
const fieldClass = "rounded-lg border border-border bg-background px-3 py-2 text-sm";
const sortValue = (model: AiModel, key: SortKey) => key === "features" ? features.filter(({ key }) => model[key]).length : typeof model[key] === "boolean" ? Number(model[key]) : model[key];

export function ModelsTable() {
  const { query, provider, weights, selected, sort, updateParams } = useModelsTableState();
  const rows = models.filter((model) => `${model.name} ${model.provider} ${model.modelId}`.toLowerCase().includes(query.trim().toLowerCase()) && (!provider || model.provider === provider) && (!weights || model.openWeights === (weights === "open")) && selected.every((feature) => model[feature])).sort((a, b) => {
    const left = sortValue(a, sort.key);
    const right = sortValue(b, sort.key);
    const comparison = typeof left === "number" && typeof right === "number" ? left - right : String(left).localeCompare(String(right));
    return (sort.ascending ? comparison : -comparison) || a.name.localeCompare(b.name);
  });

  return (
    <>
      <div className="mb-6 flex flex-wrap items-end gap-4">
        <label className="flex min-w-60 flex-1 flex-col gap-2 text-sm font-medium">Search models<input type="search" value={query} onChange={(event) => updateParams({ q: event.target.value })} placeholder={'Search a model, e.g. "Claude" or "Gemini"'} className={fieldClass} /></label>
        <label className="flex flex-col gap-2 text-sm font-medium">Provider<select value={provider} onChange={(event) => updateParams({ provider: event.target.value })} className={fieldClass}><option value="">All providers</option>{[...new Set(models.map((model) => model.provider))].map((name) => <option key={name}>{name}</option>)}</select></label>
        <label className="flex flex-col gap-2 text-sm font-medium">Weights<select value={weights} onChange={(event) => updateParams({ weights: event.target.value })} className={fieldClass}><option value="">All</option><option value="open">Open weights</option><option value="closed">Closed</option></select></label>
      </div>
      <fieldset className="mb-6">
        <legend className="mb-3 text-sm font-medium">Features</legend>
        <div className="flex flex-wrap gap-2">
          {features.map(({ key, label, Icon }) => (
            <ToggleButton
              key={key}
              isSelected={selected.includes(key)}
              onChange={(isSelected) => updateParams({ features: (isSelected ? [...selected, key] : selected.filter((item) => item !== key)).join(",") })}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-muted data-[selected]:border-primary data-[selected]:bg-primary data-[selected]:text-primary-foreground data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-ring"
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </ToggleButton>
          ))}
        </div>
      </fieldset>
      <p className="mb-3 text-sm text-muted-foreground" aria-live="polite">{rows.length} of {models.length} models</p>
      <ModelsScrollArea label="AI model pricing comparison">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">API pricing in US dollars per million tokens. Select a row for pricing and specs. Use column buttons to sort.</caption>
          <thead className="border-b border-border bg-muted/50"><tr>{columns.map(({ key, label, tip }) => <th key={key} scope="col" aria-sort={sort.key === key ? sort.ascending ? "ascending" : "descending" : "none"} className="whitespace-nowrap px-4 py-4 font-medium"><ModelsTooltip content={tip}><Button onPress={() => updateParams({ sort: key === "outputPrice" ? "" : key, order: sort.key === key && sort.ascending ? "desc" : "" })} className="cursor-pointer text-left">{label}{sort.key === key && <span aria-hidden="true">{sort.ascending ? " ↑" : " ↓"}</span>}</Button></ModelsTooltip></th>)}</tr></thead>
          <tbody className="divide-y divide-border">
            {rows.map((model) => <tr key={model.slug} className="relative cursor-pointer hover:bg-muted focus-within:bg-muted/30 has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-ring">
              <th scope="row" className="whitespace-nowrap px-4 py-5 font-semibold"><NextLink href={`/models/${model.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none"><span className="sr-only">See </span>{model.name}<span className="sr-only"> pricing and specs</span></NextLink></th>
              <td className="px-4 py-5">{model.provider}</td>
              <td className="px-4 py-5 tabular-nums">{formatPrice(model.inputPrice)}</td><td className="px-4 py-5 tabular-nums">{formatPrice(model.outputPrice)}</td><td className="px-4 py-5 tabular-nums">{formatPrice(model.cachedInputPrice)}</td>
              <td className="px-4 py-5 tabular-nums">{formatTokens(model.context)}</td><td className="px-4 py-5 tabular-nums">{formatTokens(model.output)}</td>
              <td className="px-4 py-5"><span className="flex gap-3">{features.filter(({ key }) => model[key]).map(({ key, label, Icon }) => <ModelsTooltip key={key} content={label}><Link href={`/models/${model.slug}`} aria-label={`${model.name}: ${label}`} className="relative z-10 rounded-sm p-1 -m-1 outline-offset-4 data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring"><Icon size={16} aria-hidden="true" /></Link></ModelsTooltip>)}</span></td>
              <td className="px-4 py-5"><ModelWeightsBadge open={model.openWeights} /></td><td className="whitespace-nowrap px-4 py-5"><time dateTime={model.released}>{model.released}</time></td>
            </tr>)}
            {!rows.length && <tr><td colSpan={columns.length} className="px-6 py-12 text-center text-muted-foreground">No model matches those filters. Clear one and try again.</td></tr>}
          </tbody>
        </table>
      </ModelsScrollArea>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground" aria-label="Feature legend">{features.map(({ key, label, Icon }) => <span key={key} className="flex items-center gap-2"><Icon size={14} aria-hidden="true" />{label}</span>)}</div>
    </>
  );
}
