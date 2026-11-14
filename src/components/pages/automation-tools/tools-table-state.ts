import { useSyncExternalStore } from "react";

const changeEvent = "tools-table-url-change";

const subscribe = (onChange: () => void) => {
  window.addEventListener("popstate", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
};

export const useToolsTableState = (filterKeys: readonly string[]) => {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const params = new URLSearchParams(search);
  const requested = params.get("filter") ?? "";
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
    filter: filterKeys.includes(requested) ? requested : filterKeys[0],
    updateParams,
  };
};
