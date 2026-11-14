"use client";

import { ArrowDown, ArrowUp, ChevronDown, Search, SearchX, X } from "lucide-react";
import type { ReactNode } from "react";
import { SelectValue } from "react-aria-components";
import { Select, SelectItem } from "@/components/ui/select";

export const SearchField = ({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) => (
  <label className="relative block flex-1">
    <span className="sr-only">Search</span>
    <Search aria-hidden className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
    <input type="search" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-12 w-full rounded-full bg-background pl-13 pr-12 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-search-cancel-button]:hidden" />
    {value && (
      <button type="button" aria-label="Clear search" onClick={() => onChange("")} className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring">
        <X aria-hidden className="size-4" />
      </button>
    )}
  </label>
);

export const FilterSelect = ({ label, selectedKey, onChange, children }: { label: string; selectedKey: string; onChange: (key: string) => void; children: ReactNode }) => (
  <Select
    aria-label={label}
    selectedKey={selectedKey}
    onSelectionChange={(key) => onChange(String(key))}
    className="w-full sm:w-auto"
    triggerClassName="h-12 w-full gap-2 rounded-full bg-background px-5 text-sm font-medium hover:bg-background/70 pressed:bg-background/70 sm:w-auto"
    triggerContent={
      <>
        <SelectValue className="flex items-center gap-2 truncate" />
        <ChevronDown aria-hidden className="size-4 shrink-0 opacity-60" />
      </>
    }
  >
    {children}
  </Select>
);

export { SelectItem };

export const SortButton = ({ label, active, ascending, onPress, className = "" }: { label: string; active: boolean; ascending: boolean; onPress: () => void; className?: string }) => (
  <button type="button" onClick={onPress} aria-label={`Sort by ${label}${active ? (ascending ? ", ascending" : ", descending") : ""}`} className={`inline-flex w-fit cursor-pointer items-center gap-1 rounded-sm text-xs font-medium uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"} ${className}`}>
    {label}
    {active && (ascending ? <ArrowUp aria-hidden className="size-3.5 text-primary" /> : <ArrowDown aria-hidden className="size-3.5 text-primary" />)}
  </button>
);

export const EmptyBanner = ({ title, hint, onClear }: { title: string; hint: string; onClear: () => void }) => (
  <div className="flex flex-wrap items-center gap-4 rounded-2xl bg-muted px-5 py-4">
    <SearchX aria-hidden className="size-5 shrink-0 text-primary" />
    <p className="flex-1 font-medium">{title} <span className="font-normal text-muted-foreground">{hint}</span></p>
    <button type="button" onClick={onClear} className="cursor-pointer rounded-sm font-medium text-primary underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">Clear filters</button>
  </div>
);
