"use client";

import { X } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Heading, type DialogProps } from "react-aria-components";
import {
  Sheet as AriaSheet,
  SheetBackdrop,
  SheetContent,
  SheetOverlay,
  SheetTrigger,
  type SheetOverlayProps,
} from "react-aria-components/Sheet";
import { tv } from "@/lib/ui";

const overlay = tv({ base: "group/sheet z-50" });

const sheet = tv({
  base: "z-1 box-content overflow-clip border border-border bg-background text-foreground shadow-2xl outline-0 will-change-transform [transform:perspective(1000px)]",
  variants: {
    position: {
      bottom:
        "max-h-[calc(100%-2rem)] w-[calc(100%-1rem)] max-w-3xl origin-[center_-150px] rounded-3xl",
      top: "max-h-[calc(100%-2rem)] w-[calc(100%-1rem)] max-w-3xl origin-[center_150px] rounded-3xl",
      center:
        "max-h-[calc(100%-2rem)] w-[calc(100%-1rem)] max-w-3xl origin-[center_-150px] rounded-3xl",
      left: "h-full w-full origin-[150px_center]",
      right: "h-full w-full origin-[-150px_center]",
    },
  },
  defaultVariants: { position: "bottom" },
});

const content = tv({
  base: "box-border h-full overflow-hidden overscroll-auto p-6 pb-[calc(var(--spacing)*6+var(--sheet-scroll-padding-y))] outline-0 group-data-expanded/sheet:overflow-auto",
});

export { SheetTrigger };

export interface SheetProps extends Omit<SheetOverlayProps, "children"> {
  children?: DialogProps["children"];
  "aria-label"?: string;
}

export function Sheet({
  children,
  className,
  "aria-label": ariaLabel,
  ...props
}: SheetProps) {
  const { snapPoints } = props;
  return (
    <SheetOverlay
      {...props}
      className={(renderProps) =>
        overlay({
          className:
            typeof className === "function"
              ? className(renderProps)
              : className,
        })
      }
    >
      <SheetBackdrop
        className="data-[stack-index='0']:bg-black/40"
        swipeAnimation="sheet-backdrop"
        swipeAnimationRange={
          snapPoints ? { start: snapPoints.length - 1 } : undefined
        }
      />
      <AriaSheet
        overscrollPadding
        stackAnimation="sheet-scale-back"
        className={({ position }) => sheet({ position })}
      >
        <SheetContent aria-label={ariaLabel} className={content()}>
          {children}
        </SheetContent>
      </AriaSheet>
    </SheetOverlay>
  );
}

export function SheetHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <Heading slot="title" className="text-lg font-semibold tracking-tight">
        {children}
      </Heading>
      <Button slot="close" variant="ghost" size="icon" aria-label="Close menu">
        <X aria-hidden className="size-5" />
      </Button>
    </div>
  );
}
