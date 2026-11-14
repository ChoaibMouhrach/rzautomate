"use client";

import { useSyncExternalStore } from "react";
import { models, tiers } from "@/lib/models";

export const sortKeys = ["name", "provider", "inputPrice", "outputPrice", "cachedInputPrice", "context", "output", "features", "openWeights", "released"] as const;
export type SortKey = (typeof sortKeys)[number];
export type Feature = "tools" | "vision" | "reasoning" | "structured";
const providers = new Set<string>(models.map((model) => model.provider));
const tierKeys: readonly string[] = tiers;
const featureKeys: Feature[] = ["tools", "vision", "reasoning", "structured"];
const changeEvent = "models-table-url-change";

const subscribe = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
};

export const readTableState = (search: string) => {
  const params = new URLSearchParams(search);
  const requestedSort = params.get("sort");
  const sortKey = sortKeys.find((key) => key === requestedSort) ?? "outputPrice";
  const requestedFeatures = params.getAll("features").flatMap((value) => value.split(","));
  return {
    query: params.get("q") ?? "",
    provider: providers.has(params.get("provider") ?? "") ? params.get("provider")! : "",
    tier: tierKeys.includes(params.get("tier") ?? "") ? params.get("tier")! : "",
    weights: ["open", "closed"].includes(params.get("weights") ?? "") ? params.get("weights")! : "",
    selected: featureKeys.filter((key) => requestedFeatures.includes(key)),
    sort: { key: sortKey, ascending: params.get("order") !== "desc" },
  };
};

export const useModelsTableState = () => {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const updateParams = (updates: Record<string, string>) => {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(updates)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event(changeEvent));
  };
  return { ...readTableState(search), updateParams };
};
