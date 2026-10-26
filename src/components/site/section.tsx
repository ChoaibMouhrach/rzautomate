import { twMerge } from "tailwind-merge";
import { LinkButton } from "@/components/ui/link";

export function Section({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={twMerge("border-t border-border", className)}>
      <div className="page-container pb-24 pt-16">{children}</div>
    </section>
  );
}

export function SectionHeader({
  align = "left",
  children,
}: {
  align?: "left" | "center";
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        align === "center"
          ? "grid justify-items-center gap-y-4 text-center"
          : "grid gap-y-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-x-8"
      }
    >
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold tracking-tight sm:col-start-1">
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="max-w-3xl text-lg text-muted-foreground sm:col-start-1">
      {children}
    </p>
  );
}

export function SectionAction(
  props: React.ComponentProps<typeof LinkButton>,
) {
  return (
    <LinkButton
      variant="secondary"
      className="w-fit sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:self-center"
      {...props}
    />
  );
}

export function SectionContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-10">{children}</div>;
}

export function SectionFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 flex justify-center">{children}</div>;
}
