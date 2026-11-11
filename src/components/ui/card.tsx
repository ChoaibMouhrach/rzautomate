import { tv } from "@/lib/ui";

const card = tv({
  base: "relative flex w-full flex-col gap-3 rounded-3xl bg-muted p-8",
  variants: {
    interactive: {
      true: "transition-colors hover:bg-foreground/5 has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring",
    },
  },
});

export interface CardProps extends React.ComponentProps<"article"> {
  interactive?: boolean;
}

export const Card = ({ interactive, className, ...props }: CardProps) => <article className={card({ interactive, className })} {...props} />;

export const CardEyebrow = ({
  className,
  ...props
}: React.ComponentProps<"p">) => <p
      className={`text-sm text-muted-foreground ${className ?? ""}`}
      {...props}
    />;

export const CardTitle = ({
  as: Tag = "h3",
  className,
  ...props
}: React.ComponentProps<"h3"> & { as?: "h2" | "h3" }) => <Tag
      className={`text-lg font-semibold tracking-tight ${className ?? ""}`}
      {...props}
    />;

export const CardDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => <p className={`text-muted-foreground ${className ?? ""}`} {...props} />;

export const CardFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => <div
      className={`mt-auto flex items-center gap-2 pt-2 text-sm text-muted-foreground ${className ?? ""}`}
      {...props}
    />;
