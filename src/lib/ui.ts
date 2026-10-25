import { tv } from "tailwind-variants";

export { tv };
export type { VariantProps } from "tailwind-variants";

/** Shared focus ring, driven by RAC's `isFocusVisible` render prop. */
export const focusRing = tv({
  base: "outline-2 outline-offset-2 outline-ring",
  variants: {
    isFocusVisible: { false: "outline-0", true: "outline-2" },
  },
});
