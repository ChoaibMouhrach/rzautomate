"use client";

import { sanitizeCount } from "@/lib/number-input";

export const CountInput = ({
  value,
  onValueChange,
  max,
  ...props
}: Omit<React.ComponentProps<"input">, "value" | "onChange" | "type" | "max"> & {
  value: string;
  onValueChange: (value: string) => void;
  max?: number;
}) => (
  <input
    {...props}
    type="text"
    inputMode="numeric"
    autoComplete="off"
    value={value}
    onChange={(event) => onValueChange(sanitizeCount(event.target.value, max))}
    onFocus={(event) => event.target.select()}
  />
);
