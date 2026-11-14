import { useSyncExternalStore } from "react";
import { toolTypes } from "@/lib/automation-tools";

export const sortKeys = ["startsAt", "name", "youPayFor", "freePlan", "bestFor"] as const;
export type SortKey = (typeof sortKeys)[number];

const changeEvent = "tools-table-url-change";

const subscribe = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
};

export const useToolsTableState = () => {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const params = new URLSearchParams(search);
  const requestedType = params.get("type") ?? "";
  const requestedSort = params.get("sort");
  const updateParams = (updates: Record<string, string>) => {
    const url = new URL(window.location.href);
    for (const [key, value] of Object.entries(updates)) {
      if (value) url.searchParams.set(key, value);
      else url.searchParams.delete(key);
    }
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.dispatchEvent(new Event(changeEvent));
  };
  return {
    query: params.get("q") ?? "",
    type: toolTypes.find((type) => type === requestedType) ?? "",
    free: params.get("free") === "1",
    selfHosted: params.get("selfhosted") === "1",
    openSource: params.get("opensource") === "1",
    sort: { key: sortKeys.find((key) => key === requestedSort) ?? "startsAt", ascending: params.get("order") !== "desc" },
    updateParams,
  };
};
