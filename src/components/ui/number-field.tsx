"use client";

import {
  Group,
  Input,
  Label,
  NumberField as AriaNumberField,
  Text,
  composeRenderProps,
  type NumberFieldProps as AriaNumberFieldProps,
} from "react-aria-components";
import { focusRing, tv } from "@/lib/ui";

const group = tv({
  extend: focusRing,
  base: "flex h-12 items-center rounded-2xl bg-muted px-4 text-base transition-shadow focus-within:ring-2 focus-within:ring-primary",
  variants: {
    isInvalid: { true: "ring-2 ring-danger focus-within:ring-danger" },
  },
});

export interface NumberFieldProps extends AriaNumberFieldProps {
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
}

export const NumberField = ({
  label,
  description,
  prefix,
  suffix,
  className,
  ...props
}: NumberFieldProps) => (
  <AriaNumberField
    {...props}
    className={composeRenderProps(className, (className) =>
      `flex flex-col gap-1.5 ${className ?? ""}`,
    )}
  >
    {({ isInvalid }) => (
      <>
        <Label className="text-sm font-medium">{label}</Label>
        <Group data-number-group className={group({ isInvalid })}>
          {prefix && (
            <span aria-hidden className="mr-1 text-muted-foreground">
              {prefix}
            </span>
          )}
          <Input className="min-w-0 flex-1 bg-transparent tabular-nums caret-primary outline-0" />
          {suffix && (
            <span aria-hidden className="ml-2 text-muted-foreground">
              {suffix}
            </span>
          )}
        </Group>
        <Text
          slot="description"
          className={`text-sm ${isInvalid ? "text-danger" : "text-muted-foreground"}`}
        >
          {description}
        </Text>
      </>
    )}
  </AriaNumberField>
);
