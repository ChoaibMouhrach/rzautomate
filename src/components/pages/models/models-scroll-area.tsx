"use client";

import type { ReactNode } from "react";
import { ScrollArea } from "@base-ui/react/scroll-area";

export const ModelsScrollArea = ({ children, label }: { children: ReactNode; label: string }) => <ScrollArea.Root className="relative isolate min-w-0 overflow-hidden rounded-xl border border-border">
      <ScrollArea.Viewport
        role="region"
        aria-label={label}
        tabIndex={0}
        className="w-full rounded-[inherit] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring"
      >
        <ScrollArea.Content className="w-full pb-3">
          {children}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        orientation="horizontal"
        className="absolute inset-x-1 bottom-0 z-10 flex h-3 touch-none select-none items-center rounded-full bg-muted p-0.5"
      >
        <ScrollArea.Thumb className="h-full rounded-full bg-muted-foreground/40 transition-colors hover:bg-muted-foreground/70" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>;
