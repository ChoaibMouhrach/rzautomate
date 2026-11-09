"use client";

import type { ReactNode } from "react";
import { ScrollArea as BaseScrollArea } from "@base-ui/react/scroll-area";
import { tv } from "@/lib/ui";

const scrollbar = tv({
  base: "flex touch-none select-none p-0.5 opacity-0 transition-opacity data-[hovering]:opacity-100 data-[scrolling]:opacity-100 motion-reduce:transition-none",
  variants: {
    orientation: {
      vertical: "w-2.5 justify-center",
      horizontal: "h-2.5 items-center",
    },
  },
  defaultVariants: { orientation: "vertical" },
});

export const ScrollArea = ({
  children,
  className,
  contentClassName,
  orientation = "vertical",
}: {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  orientation?: "vertical" | "horizontal";
}) => <BaseScrollArea.Root
      className={`group/scroll relative min-h-0 ${className ?? ""}`}
    >
      <BaseScrollArea.Viewport className="max-h-[inherit] rounded-[inherit] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring">
        <BaseScrollArea.Content className={contentClassName}>{children}</BaseScrollArea.Content>
      </BaseScrollArea.Viewport>
      <BaseScrollArea.Scrollbar
        orientation={orientation}
        className={scrollbar({ orientation })}
      >
        <BaseScrollArea.Thumb className="w-full flex-1 rounded-full bg-muted-foreground/40 hover:bg-muted-foreground/70" />
      </BaseScrollArea.Scrollbar>
    </BaseScrollArea.Root>;
