import { twMerge } from "tailwind-merge";

export const TextLink = ({
  className,
  ...props
}: React.ComponentProps<"a">) => (
  <a
    {...props}
    className={twMerge(
      "font-medium underline-offset-4 hover:underline focus-visible:underline",
      className,
    )}
  />
);
