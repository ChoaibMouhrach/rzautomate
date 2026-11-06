"use client";

import { useSyncExternalStore } from "react";
import { models } from "@/lib/models";

export const sortKeys = ["name", "provider", "inputPrice", "outputPrice", "cachedInputPrice", "context", "output", "features", "openWeights", "released"] as const;
export type SortKey = (typeof sortKeys)[number];
export type Feature = "tools" | "vision" | "reasoning" | "structured";
const providers = new Set<string>(models.map((model) => model.provider));
const featureKeys: Feature[] = ["tools", "vision", "reasoning", "structured"];
const changeEvent = "models-table-url-change";

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

export function readTableState(search: string) {
  const params = new URLSearchParams(search);
  const requestedSort = params.get("sort");
  const sortKey = sortKeys.find((key) => key === requestedSort) ?? "outputPrice";
  const requestedFeatures = params.getAll("features").flatMap((value) => value.split(","));
  return {
    query: params.get("q") ?? "",
    provider: providers.has(params.get("provider") ?? "") ? params.get("provider")! : "",
    weights: ["open", "closed"].includes(params.get("weights") ?? "") ? params.get("weights")! : "",
    selected: featureKeys.filter((key) => requestedFeatures.includes(key)),
    sort: { key: sortKey, ascending: params.get("order") !== "desc" },
  };
}

export function useModelsTableState() {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  function updateParams(updates: Record<string, string>) {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(updates)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event(changeEvent));
  }
  return { ...readTableState(search), updateParams };
}
