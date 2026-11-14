"use client";

import { ArrowRight, Brain, Eye, LockOpen, Wrench } from "lucide-react";
import { FilterChip } from "@/components/site/directory";
import { EmptyBanner, FilterSelect, SearchField, SelectItem, SortButton } from "@/components/site/directory-controls";
import { formatPrice, models, tiers, type AiModel } from "@/lib/models";
import { tierLabels } from "./content";
import { useModelsTableState, type SortKey } from "./models-table-state";
import { ProviderChip, ProviderLogo } from "./provider-logo";

const featureList = [
  { key: "tools", label: "Tool calling", Icon: Wrench },
  { key: "vision", label: "Vision", Icon: Eye },
  { key: "reasoning", label: "Reasoning", Icon: Brain },
] as const;

const columns: { key: SortKey; label: string }[] = [
  { key: "name", label: "Model" },
  { key: "outputPrice", label: "Output / 1M" },
  { key: "inputPrice", label: "Input / 1M" },
  { key: "context", label: "Context" },
  { key: "features", label: "Features" },
];

const providers = [...new Set(models.map((model) => model.provider))];
const maxContext = Math.max(...models.map((model) => model.context));

const compact = (tokens: number) => (tokens >= 1_000_000 ? `${Number((tokens / 1_000_000).toFixed(2))}M` : `${Math.round(tokens / 1000)}K`);

const cellClass = "h-px bg-background p-0 transition-colors group-hover:bg-ink group-hover:text-paper";
const linkClass = "flex h-full items-center gap-3 px-5 py-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring";

const Features = ({ model }: { model: AiModel }) => (
  <>
    {featureList.map(({ key, label, Icon }) =>
      model[key] ? (
        <span key={key} className="flex size-8 items-center justify-center rounded-full bg-muted text-primary group-hover:bg-paper/10">
          <Icon size={16} role="img" aria-label={label} />
        </span>
      ) : null,
    )}
    {model.openWeights && (
      <span className="flex h-8 items-center gap-1 rounded-full bg-primary px-2.5 text-xs font-medium text-primary-foreground">
        <LockOpen size={14} aria-hidden="true" />
        Open
      </span>
    )}
  </>
);

const sortValue = (model: AiModel, key: SortKey) => {
  if (key === "features") return [model.tools, model.vision, model.reasoning, model.structured].filter(Boolean).length;
  const value = model[key];
  return typeof value === "boolean" ? Number(value) : value;
};

export const ModelsTable = () => {
  const { query, provider, tier, weights, selected, sort, updateParams } = useModelsTableState();
  const needle = query.trim().toLowerCase();
  const rows = models
    .filter((model) => `${model.name} ${model.provider} ${model.modelId}`.toLowerCase().includes(needle) && (!provider || model.provider === provider) && (!tier || model.tier === tier) && (!weights || model.openWeights === (weights === "open")) && selected.every((feature) => model[feature]))
    .sort((a, b) => {
      const left = sortValue(a, sort.key);
      const right = sortValue(b, sort.key);
      const comparison = typeof left === "number" && typeof right === "number" ? left - right : String(left).localeCompare(String(right));
      return (sort.ascending ? comparison : -comparison) || a.name.localeCompare(b.name);
    });

  const hasFilters = Boolean(query || provider || tier || weights || selected.length);
  const clearFilters = () => updateParams({ q: "", provider: "", tier: "", weights: "", features: "" });
  const toggleFeature = (key: string) => updateParams({ features: (selected.some((item) => item === key) ? selected.filter((item) => item !== key) : [...selected, key]).join(",") });
  const sortBy = (key: SortKey) => updateParams({ sort: key === "outputPrice" ? "" : key, order: sort.key === key && sort.ascending ? "desc" : "" });

  return (
    <div className="space-y-4">
      <div className="space-y-4 rounded-3xl bg-muted p-3 sm:p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <SearchField value={query} onChange={(value) => updateParams({ q: value })} placeholder="Search a model, like Claude or Gemini" />
          <div className="flex flex-col gap-3 sm:flex-row">
            <FilterSelect label="Provider" selectedKey={provider || "all"} onChange={(key) => updateParams({ provider: key === "all" ? "" : key })}>
              <SelectItem id="all" textValue="All providers"><span aria-hidden className="size-4" />All providers</SelectItem>
              {providers.map((name) => (
                <SelectItem key={name} id={name} textValue={name}>
                  <ProviderLogo provider={name} className="size-4" />
                  {name}
                </SelectItem>
              ))}
            </FilterSelect>
            <FilterSelect label="Tier" selectedKey={tier || "all"} onChange={(key) => updateParams({ tier: key === "all" ? "" : key })}>
              <SelectItem id="all" textValue="All tiers">All tiers</SelectItem>
              {tiers.map((name) => <SelectItem key={name} id={name} textValue={tierLabels[name]}>{tierLabels[name]}</SelectItem>)}
            </FilterSelect>
          </div>
        </div>
        <div role="group" aria-label="Filter by feature" className="flex flex-wrap items-center gap-2">
          {featureList.map(({ key, label, Icon }) => (
            <FilterChip inset key={key} pressed={selected.some((item) => item === key)} onPress={() => toggleFeature(key)}>
              <Icon size={16} aria-hidden="true" />
              {label}
            </FilterChip>
          ))}
          <FilterChip inset pressed={weights === "open"} onPress={() => updateParams({ weights: weights === "open" ? "" : "open" })}>
            <LockOpen size={16} aria-hidden="true" />
            Open weights
          </FilterChip>
          {hasFilters && (
            <button type="button" onClick={clearFilters} className="ml-auto cursor-pointer rounded-sm px-2 text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-ring">
              Clear filters
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{rows.length ? "Results updated" : "No models match"}</p>

      {rows.length > 0 && (
        <>
          <div className="rounded-3xl bg-muted p-2 md:hidden">
            <div className="flex flex-wrap gap-x-5 gap-y-1 px-3 pb-3 pt-2">
              {columns.filter(({ key }) => key !== "name").map(({ key, label }) => <SortButton key={key} label={label} active={sort.key === key} ascending={sort.ascending} onPress={() => sortBy(key)} />)}
            </div>
            <ul className="space-y-2">
              {rows.map((model) => (
                <li key={model.slug}>
                  <a href={`/models/${model.slug}`} className="block rounded-2xl bg-background p-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
                    <span className="flex items-center gap-3">
                      <ProviderChip provider={model.provider} className="size-11 bg-muted" logoClassName="size-6" />
                      <span className="min-w-0 flex-1">
                        <span className="block truncate font-semibold"><span className="sr-only">See </span>{model.name}<span className="sr-only"> pricing and specs</span></span>
                        <span className="block truncate text-sm text-muted-foreground">{model.provider} · {tierLabels[model.tier]}</span>
                      </span>
                      <ArrowRight aria-hidden className="size-5 shrink-0 text-muted-foreground" />
                    </span>
                    <span className="mt-4 grid grid-cols-3 items-end gap-3">
                      <span className="block"><span className="block text-xs text-muted-foreground">Output / 1M</span><span className="block text-2xl font-semibold tracking-tight tabular-nums">{formatPrice(model.outputPrice)}</span></span>
                      <span className="block"><span className="block text-xs text-muted-foreground">Input / 1M</span><span className="block text-base text-muted-foreground tabular-nums">{formatPrice(model.inputPrice)}</span></span>
                      <span className="block"><span className="block text-xs text-muted-foreground">Context</span><span className="block text-base font-medium tabular-nums">{compact(model.context)}</span></span>
                    </span>
                    <span className="mt-4 flex items-center gap-1.5">
                      <Features model={model} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden rounded-3xl bg-muted px-2 md:block">
            <table className="w-full table-fixed border-separate border-spacing-x-0 border-spacing-y-2 text-left">
              <caption className="sr-only">AI model API pricing in US dollars per 1 million tokens. Use the column buttons to sort.</caption>
              <colgroup>
                <col className="w-[27%]" />
                <col className="w-[13%]" />
                <col className="w-[13%]" />
                <col className="w-[15%]" />
                <col className="w-[26%]" />
                <col className="w-14" />
              </colgroup>
              <thead>
                <tr>
                  {columns.map(({ key, label }) => (
                    <th key={key} scope="col" aria-sort={sort.key === key ? (sort.ascending ? "ascending" : "descending") : "none"} className="px-5 pb-1 pt-3 text-left font-normal">
                      <SortButton label={label} active={sort.key === key} ascending={sort.ascending} onPress={() => sortBy(key)} />
                    </th>
                  ))}
                  <th scope="col"><span className="sr-only">Open</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((model) => {
                  const href = `/models/${model.slug}`;
                  return (
                    <tr key={model.slug} className="group">
                      <th scope="row" className={`${cellClass} rounded-l-2xl font-normal`}>
                        <a href={href} className={linkClass}>
                          <ProviderChip provider={model.provider} className="size-11 bg-muted" logoClassName="size-6" />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate font-semibold"><span className="sr-only">See </span>{model.name}<span className="sr-only"> pricing and specs</span></span>
                            <span className="block truncate text-sm font-normal text-muted-foreground group-hover:text-paper/70">{model.provider} · {tierLabels[model.tier]}</span>
                          </span>
                        </a>
                      </th>
                      <td className={cellClass}><a href={href} tabIndex={-1} className={linkClass}><span className="text-2xl font-semibold tracking-tight tabular-nums">{formatPrice(model.outputPrice)}</span></a></td>
                      <td className={cellClass}><a href={href} tabIndex={-1} className={linkClass}><span className="text-muted-foreground tabular-nums group-hover:text-paper/80">{formatPrice(model.inputPrice)}</span></a></td>
                      <td className={cellClass}>
                        <a href={href} tabIndex={-1} className={linkClass}>
                          <span className="block w-full">
                            <span className="block font-medium tabular-nums">{compact(model.context)}</span>
                            <span aria-hidden className="mt-1.5 block h-1 w-full max-w-24 rounded-full bg-muted group-hover:bg-paper/20">
                              <span className="block h-full rounded-full bg-primary" style={{ width: `${Math.max(8, (model.context / maxContext) * 100)}%` }} />
                            </span>
                          </span>
                        </a>
                      </td>
                      <td className={cellClass}><a href={href} tabIndex={-1} className={`${linkClass} gap-1.5`}><Features model={model} /></a></td>
                      <td className={`${cellClass} rounded-r-2xl`}><a href={href} tabIndex={-1} aria-hidden className={`${linkClass} justify-center px-0`}><ArrowRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-paper" /></a></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}

      {rows.length === 0 && <EmptyBanner title="No model matches those filters." hint="Clear one and try again." onClear={clearFilters} />}
    </div>
  );
};
