import { twMerge } from "tailwind-merge";
import { button, type ButtonVariantProps } from "@/components/ui/button";
import { focusRing, tv } from "@/lib/ui";

const link = tv({
  extend: focusRing,
  base: "cursor-pointer rounded-sm underline-offset-4 hover:underline focus-visible:outline-2",
  variants: {
    variant: {
      default: "",
      muted: "text-muted-foreground hover:text-foreground",
    },
  },
  defaultVariants: { variant: "default" },
});

export interface LinkProps extends React.ComponentProps<"a"> {
  variant?: "default" | "muted";
}

export const Link = ({ variant, className, ...props }: LinkProps) => (
  <a
    {...props}
    className={link({ isFocusVisible: false, variant, className })}
  />
);

export const LinkButton = ({
  variant,
  size,
  className,
  ...props
}: React.ComponentProps<"a"> & ButtonVariantProps) => (
  <a
    {...props}
    className={twMerge(
      button({ isFocusVisible: false, variant, size }),
      "focus-visible:outline-2",
      className,
    )}
  />
);
