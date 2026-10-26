import { tv } from "@/lib/ui";

const card = tv({
  base: "relative flex w-full flex-col gap-3 rounded-ui border border-border bg-background p-6",
  variants: {
    interactive: {
      true: "transition-colors hover:bg-muted has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring",
    },
  },
});

export interface CardProps extends React.ComponentProps<"article"> {
  interactive?: boolean;
}

export function Card({ interactive, className, ...props }: CardProps) {
  return <article className={card({ interactive, className })} {...props} />;
}

export function CardEyebrow({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={`text-sm text-muted-foreground ${className ?? ""}`}
      {...props}
    />
  );
}

export function CardTitle({
  as: Tag = "h3",
  className,
  ...props
}: React.ComponentProps<"h3"> & { as?: "h2" | "h3" }) {
  return (
    <Tag
      className={`text-lg font-semibold tracking-tight ${className ?? ""}`}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={`text-muted-foreground ${className ?? ""}`} {...props} />
  );
}

export function CardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`mt-auto flex items-center gap-2 pt-2 text-sm text-muted-foreground ${className ?? ""}`}
      {...props}
    />
  );
}
