"use client";

import type { ReactNode } from "react";
import {
  Tooltip as AriaTooltip,
  TooltipTrigger,
  type TooltipProps as AriaTooltipProps,
} from "react-aria-components";

export const Tooltip = ({
  content,
  children,
  delay = 300,
  isOpen,
  onOpenChange,
  ...props
}: Omit<AriaTooltipProps, "children" | "isOpen" | "onOpenChange"> & {
  content: ReactNode;
  children: ReactNode;
  delay?: number;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}) => (
  <TooltipTrigger
    delay={delay}
    closeDelay={0}
    isOpen={isOpen}
    onOpenChange={onOpenChange}
  >
    {children}
    <AriaTooltip
      offset={8}
      {...props}
      className="z-50 rounded-2xl bg-background px-3.5 py-2 text-sm font-medium text-foreground shadow-xl transition-[opacity,translate,scale] duration-150 ease-out entering:translate-y-1 entering:scale-95 entering:opacity-0 exiting:translate-y-1 exiting:scale-95 exiting:opacity-0 motion-reduce:transition-none"
    >
      {content}
    </AriaTooltip>
  </TooltipTrigger>
);
