import { twMerge } from "tailwind-merge";
import { LinkButton } from "@/components/ui/link";

export function CtaCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-6 rounded-ui border border-border bg-muted p-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CtaCardContent({ children }: { children: React.ReactNode }) {
  return <div className="max-w-xl">{children}</div>;
}

export function CtaCardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-semibold tracking-tight">{children}</h2>
  );
}

export function CtaCardDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="mt-2 text-muted-foreground">{children}</p>;
}

export function CtaCardAction(props: React.ComponentProps<typeof LinkButton>) {
  return (
    <LinkButton size="lg" className="shrink-0 whitespace-nowrap" {...props} />
  );
}
