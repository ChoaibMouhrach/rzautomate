"use client";

import { Button, Link } from "react-aria-components";
import { DirectoryTableShell, FilterChip, Yes, rowClass, rowLinkClass, searchFieldClass, stickyCellClass, tableHeadClass } from "@/components/site/directory";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModelsTooltip } from "./models-tooltip";
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
const sortValue = (model: AiModel, key: SortKey) => key === "features" ? features.filter(({ key }) => model[key]).length : typeof model[key] === "boolean" ? Number(model[key]) : model[key];

export const ModelsTable = () => {
  const { query, provider, weights, selected, sort, updateParams } = useModelsTableState();
  const rows = models.filter((model) => `${model.name} ${model.provider} ${model.modelId}`.toLowerCase().includes(query.trim().toLowerCase()) && (!provider || model.provider === provider) && (!weights || model.openWeights === (weights === "open")) && selected.every((feature) => model[feature])).sort((a, b) => {
    const left = sortValue(a, sort.key);
    const right = sortValue(b, sort.key);
    const comparison = typeof left === "number" && typeof right === "number" ? left - right : String(left).localeCompare(String(right));
    return (sort.ascending ? comparison : -comparison) || a.name.localeCompare(b.name);
  });

  const providers = [...new Set(models.map((model) => model.provider))];

  return (
    <>
      <label className="block">
        <span className="sr-only">Search models</span>
        <input type="search" value={query} onChange={(event) => updateParams({ q: event.target.value })} placeholder="Search a model, e.g. Claude or GPT" className={searchFieldClass} />
      </label>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter models">
        <FilterChip pressed={!provider} onPress={() => updateParams({ provider: "" })}>All providers</FilterChip>
        {providers.map((name) => <FilterChip key={name} pressed={provider === name} onPress={() => updateParams({ provider: provider === name ? "" : name })}>{name}</FilterChip>)}
        <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
        <FilterChip pressed={weights === "open"} onPress={() => updateParams({ weights: weights === "open" ? "" : "open" })}>Open weights</FilterChip>
        {features.map(({ key, label, Icon }) => <FilterChip key={key} pressed={selected.includes(key)} onPress={() => updateParams({ features: (selected.includes(key) ? selected.filter((item) => item !== key) : [...selected, key]).join(",") })}><Icon size={16} aria-hidden="true" />{label}</FilterChip>)}
      </div>
      <p className="text-sm text-muted-foreground" aria-live="polite">{rows.length} of {models.length} models</p>
      <DirectoryTableShell>
        <ScrollArea orientation="horizontal" contentClassName="pb-3">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">API pricing in US dollars per million tokens. Select a row for pricing and specs. Use column buttons to sort.</caption>
            <thead><tr>{columns.map(({ key, label, tip }) => <th key={key} scope="col" aria-sort={sort.key === key ? sort.ascending ? "ascending" : "descending" : "none"} className={`${tableHeadClass} ${key === "name" ? "sticky left-0 z-10 bg-muted" : ""}`}><ModelsTooltip content={tip}><Button onPress={() => updateParams({ sort: key === "outputPrice" ? "" : key, order: sort.key === key && sort.ascending ? "desc" : "" })} className="cursor-pointer text-left uppercase tracking-wide">{label}{sort.key === key && <span aria-hidden="true">{sort.ascending ? " ↑" : " ↓"}</span>}</Button></ModelsTooltip></th>)}</tr></thead>
            <tbody className="divide-y divide-border/60">
              {rows.map((model) => <tr key={model.slug} className={rowClass}>
                <th scope="row" className={`${stickyCellClass} whitespace-nowrap px-5 py-5 text-base font-semibold`}><a href={`/models/${model.slug}`} className={rowLinkClass}><span className="sr-only">See </span>{model.name}<span className="sr-only"> pricing and specs</span></a></th>
                <td className="px-5 py-5 text-muted-foreground">{model.provider}</td>
                <td className="px-5 py-5 tabular-nums">{formatPrice(model.inputPrice)}</td><td className="px-5 py-5 font-semibold tabular-nums">{formatPrice(model.outputPrice)}</td><td className="px-5 py-5 tabular-nums text-muted-foreground">{formatPrice(model.cachedInputPrice)}</td>
                <td className="px-5 py-5 tabular-nums">{formatTokens(model.context)}</td><td className="px-5 py-5 tabular-nums text-muted-foreground">{formatTokens(model.output)}</td>
                <td className="px-5 py-5"><span className="flex gap-3">{features.map(({ key, label, Icon }) => model[key] ? <ModelsTooltip key={key} content={label}><Link href={`/models/${model.slug}`} aria-label={`${model.name}: ${label}`} className="relative z-10 -m-1 rounded-sm p-1 text-primary outline-offset-4 data-[focus-visible]:outline-2 data-[focus-visible]:outline-ring"><Icon size={16} aria-hidden="true" /></Link></ModelsTooltip> : null)}</span></td>
                <td className="px-5 py-5"><Yes value={model.openWeights} label="Open weights" /></td><td className="whitespace-nowrap px-5 py-5 text-muted-foreground"><time dateTime={model.released}>{model.released}</time></td>
              </tr>)}
              {!rows.length && <tr><td colSpan={columns.length} className="px-6 py-12 text-center text-muted-foreground">No model matches those filters. Clear one and try again.</td></tr>}
            </tbody>
          </table>
        </ScrollArea>
      </DirectoryTableShell>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground" aria-label="Feature legend">{features.map(({ key, label, Icon }) => <span key={key} className="flex items-center gap-2"><Icon size={14} aria-hidden="true" />{label}</span>)}</div>
    </>
  );
};
