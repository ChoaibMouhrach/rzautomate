import { tv } from "tailwind-variants";

export { tv };
export type { VariantProps } from "tailwind-variants";

export const focusRing = tv({
  base: "outline-2 outline-offset-2 outline-ring",
  variants: {
    isFocusVisible: { false: "outline-0", true: "outline-2" },
  },
});
