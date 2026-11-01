"use client";

import type { ReactNode } from "react";
import { Tooltip, TooltipTrigger } from "react-aria-components";

export function ModelsTooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <TooltipTrigger delay={300}>
      {children}
      <Tooltip offset={8} className="z-50 max-w-xs rounded-lg border border-border bg-foreground px-3 py-2 text-xs leading-relaxed text-background shadow-lg">
        {content}
      </Tooltip>
    </TooltipTrigger>
  );
}
