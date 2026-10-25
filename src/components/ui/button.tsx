"use client";

import {
  Button as AriaButton,
  composeRenderProps,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { focusRing, tv, type VariantProps } from "@/lib/ui";

export const button = tv({
  extend: focusRing,
  base: "inline-flex cursor-pointer items-center justify-center gap-2 rounded-ui font-medium transition-colors disabled:cursor-default disabled:opacity-50",
  variants: {
    variant: {
      primary:
        "bg-primary text-primary-foreground hover:opacity-90 pressed:opacity-80",
      secondary:
        "border border-border bg-background hover:bg-muted pressed:bg-muted",
      ghost: "hover:bg-muted pressed:bg-muted",
      danger:
        "bg-danger text-danger-foreground hover:opacity-90 pressed:opacity-80",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
      icon: "size-10",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export type ButtonVariantProps = VariantProps<typeof button>;

export interface ButtonProps extends AriaButtonProps, ButtonVariantProps {}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        button({ ...renderProps, variant, size, className }),
      )}
    />
  );
}
