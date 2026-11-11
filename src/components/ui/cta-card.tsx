import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { LinkButton } from "@/components/ui/link";

export const CtaCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={twMerge(
      "grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]",
      className,
    )}
  >
    {children}
  </div>
);

export const CtaCardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-3xl bg-muted p-8 sm:p-10">{children}</div>
);

export const CtaCardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tighter text-foreground md:text-4xl">
    {children}
  </h2>
);

export const CtaCardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{children}</p>;

export const CtaCardAction = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof LinkButton>) => (
  <LinkButton
    size="lg"
    className={twMerge(
      "h-auto min-h-20 rounded-3xl! px-10 py-8 text-xl whitespace-nowrap sm:px-12",
      typeof className === "string" ? className : undefined,
    )}
    {...props}
  >
    {children}
    <ArrowRight aria-hidden className="size-5" />
  </LinkButton>
);
