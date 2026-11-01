"use client";

import { Text } from "react-aria-components";

export function ModelWeightsBadge({ open }: { open: boolean }) {
  return (
    <Text className={`inline-flex whitespace-nowrap items-center rounded-full border px-2.5 py-1 text-xs font-medium ${open ? "border-emerald-600/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400" : "border-border bg-muted text-muted-foreground"}`}>
      {open ? "Open" : "Closed"}
    </Text>
  );
}
