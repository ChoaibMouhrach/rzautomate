"use client";

import {
  Link as AriaLink,
  composeRenderProps,
  type LinkProps as AriaLinkProps,
} from "react-aria-components";
import { button, type ButtonVariantProps } from "@/components/ui/button";
import { focusRing, tv } from "@/lib/ui";

const link = tv({
  extend: focusRing,
  base: "cursor-pointer rounded-sm underline-offset-4 hover:underline",
  variants: {
    variant: {
      default: "",
      muted: "text-muted-foreground hover:text-foreground",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface LinkProps extends AriaLinkProps {
  variant?: "default" | "muted";
}

export function Link({ variant, className, ...props }: LinkProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        link({ ...renderProps, variant, className }),
      )}
    />
  );
}

export function LinkButton({
  variant,
  size,
  className,
  ...props
}: AriaLinkProps & ButtonVariantProps) {
  return (
    <AriaLink
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        button({ ...renderProps, variant, size, className }),
      )}
    />
  );
}
