import { twMerge } from "tailwind-merge";
import { LinkButton } from "@/components/ui/link";

export function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function PageHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="page-container pb-12 pt-16 text-center sm:pt-24">
      {children}
    </header>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
      {children}
    </h1>
  );
}

export function PageDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
      {children}
    </p>
  );
}

export function PageActions({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
      {children}
    </div>
  );
}

type PageActionProps = Omit<
  React.ComponentProps<typeof LinkButton>,
  "variant" | "size"
>;

export function PagePrimaryAction(props: PageActionProps) {
  return <LinkButton size="lg" {...props} />;
}

export function PageSecondaryAction(props: PageActionProps) {
  return <LinkButton size="lg" variant="secondary" {...props} />;
}

export function PageContent({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={twMerge("page-container pb-24", className)}>
      {children}
    </div>
  );
}
