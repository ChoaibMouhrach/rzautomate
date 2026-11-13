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
  base: "inline-flex h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-2xl bg-muted px-4 text-base text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-primary hover:bg-muted/70 pressed:bg-muted/60 disabled:cursor-default disabled:opacity-50",
});

const item = tv({
  base: "flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm outline-0",
  variants: {
    isFocused: { true: "bg-muted" },
    isDisabled: { true: "cursor-default opacity-50" },
  },
});

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, "children"> {
  label?: string;
  triggerContent?: ReactNode;
  triggerClassName?: string;
  children: ReactNode;
}

export const Select = <T extends object>({
  label,
  triggerContent,
  triggerClassName,
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
        className={({ isFocusVisible }) =>
          trigger({ isFocusVisible, className: triggerClassName })
        }
      >
        {triggerContent ?? <SelectValue className="flex items-center gap-2 truncate" />}
      </Button>
      <Popover className="entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out z-50 w-(--trigger-width) min-w-36 overflow-auto rounded-2xl bg-background text-foreground shadow-xl">
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
