"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select as AriaSelect,
  SelectValue,
  composeRenderProps,
  type ListBoxItemProps,
  type SelectProps as AriaSelectProps,
} from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";

const field = tv({ base: "flex flex-col gap-1.5" });

const trigger = tv({
  extend: focusRing,
  base: "inline-flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-ui border border-border bg-background px-3 text-sm transition-colors hover:bg-muted pressed:bg-muted disabled:cursor-default disabled:opacity-50",
});

const item = tv({
  base: "flex cursor-pointer items-center gap-2 rounded-[calc(var(--radius-ui)-2px)] px-2 py-1.5 text-sm outline-0",
  variants: {
    isFocused: { true: "bg-muted" },
    isDisabled: { true: "cursor-default opacity-50" },
  },
});

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  triggerContent?: ReactNode;
  children: ReactNode;
}

export const Select = <T extends object>({
  label,
  triggerContent,
  children,
  className,
  ...props
}: SelectProps<T>) => <AriaSelect
      {...props}
      className={composeRenderProps(className, (className) =>
        field({ className }),
      )}
    >
      {label && <Label className="text-sm font-medium">{label}</Label>}
      <Button
        className={({ isFocusVisible }) => trigger({ isFocusVisible })}
      >
        {triggerContent ?? <SelectValue className="flex items-center gap-2 truncate" />}
      </Button>
      <Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out z-50 w-(--trigger-width) min-w-36 overflow-auto rounded-ui border border-border bg-background text-foreground shadow-lg">
        <ListBox className="p-1 outline-0">{children}</ListBox>
      </Popover>
    </AriaSelect>;

export const SelectItem = ({
  children,
  className,
  ...props
}: Omit<ListBoxItemProps, "children"> & { children: ReactNode }) => <ListBoxItem
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        item({ ...renderProps, className }),
      )}
    >
      {({ isSelected }) => (
        <>
          <span className="flex flex-1 items-center gap-2">{children}</span>
          {isSelected && <Check aria-hidden className="size-4 text-primary" />}
        </>
      )}
    </ListBoxItem>;
