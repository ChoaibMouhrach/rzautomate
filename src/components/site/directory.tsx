import { Check, Minus } from "lucide-react";
import type { ReactNode } from "react";
import { PageDescription } from "@/components/site/page";
import { Link } from "@/components/ui/link";

export const directorySectionClass = "mt-24";
export const directoryHeadingClass = "text-3xl font-semibold tracking-tight sm:text-4xl";

export const DirectoryHero = ({
  eyebrow,
  title,
  description,
  stats,
  updated,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  stats?: readonly ReactNode[];
  updated?: ReactNode;
  actions?: ReactNode;
}) => (
  <header className="page-container pb-10 pt-12 text-center md:pb-14 md:pt-20">
    {eyebrow && <p className="animate-fade-slide-in mb-4 text-sm font-medium text-muted-foreground">{eyebrow}</p>}
    <h1 className="animate-fade-slide-in mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">{title}</h1>
    <div className="animate-fade-slide-in" style={{ animationDelay: "0.15s" }}>
      <PageDescription>{description}</PageDescription>
      {stats && <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
        {stats.map((stat, index) => <li key={index}>{stat}</li>)}
      </ul>}
      {updated && <p className="mt-3 text-xs text-muted-foreground">{updated}</p>}
      {actions && <div className="mt-8 flex flex-col items-center gap-4">{actions}</div>}
    </div>
  </header>
);

export const DirectorySection = ({
  id,
  title,
  intro,
  children,
}: {
  id?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) => (
  <section id={id} className={`${directorySectionClass} scroll-mt-24`} aria-labelledby={id ? `${id}-title` : undefined}>
    <h2 id={id ? `${id}-title` : undefined} className={directoryHeadingClass}>{title}</h2>
    {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
    <div className="mt-8 space-y-6">{children}</div>
  </section>
);

export const PickGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{children}</div>
);

export const PickCard = ({
  title,
  value,
  body,
  href,
  linkLabel,
}: {
  title: string;
  value: ReactNode;
  body: ReactNode;
  href?: string;
  linkLabel?: string;
}) => (
  <article className="flex flex-col rounded-3xl bg-muted p-7">
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    <p className="mt-4 text-2xl font-semibold tracking-tight">{value}</p>
    <p className="mt-3 flex-1 text-sm text-muted-foreground">{body}</p>
    {href && <Link href={href} className="mt-5 text-sm font-medium">{linkLabel}</Link>}
  </article>
);

export const Steps = ({ steps }: { steps: readonly (readonly [string, string])[] }) => (
  <ol className="grid gap-3 md:grid-cols-2">
    {steps.map(([title, body], index) => (
      <li key={title} className="flex gap-5 rounded-3xl bg-muted p-7">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold tabular-nums text-primary">{index + 1}</span>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{body}</p>
        </div>
      </li>
    ))}
  </ol>
);

export const Facts = ({ facts }: { facts: readonly (readonly [string, ReactNode])[] }) => (
  <dl className="grid gap-3 md:grid-cols-2">
    {facts.map(([label, body]) => (
      <div key={label} className="rounded-3xl bg-muted p-7">
        <dt className="font-semibold">{label}</dt>
        <dd className="mt-2 text-sm text-muted-foreground">{body}</dd>
      </div>
    ))}
  </dl>
);

export const DirectoryCta = ({
  title,
  body,
  primary,
  secondary,
}: {
  title: string;
  body: string;
  primary: ReactNode;
  secondary: ReactNode;
}) => (
  <section className={`${directorySectionClass} rounded-[2rem] bg-muted p-8 sm:p-14`}>
    <h2 className={`${directoryHeadingClass} max-w-2xl`}>{title}</h2>
    <p className="mt-5 max-w-2xl text-muted-foreground">{body}</p>
    <div className="mt-8 flex flex-wrap gap-3">{primary}{secondary}</div>
  </section>
);

export const FilterChip = ({
  pressed,
  onPress,
  children,
}: {
  pressed: boolean;
  onPress: () => void;
  children: ReactNode;
}) => (
  <button
    type="button"
    aria-pressed={pressed}
    onClick={onPress}
    className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring aria-pressed:bg-primary aria-pressed:text-primary-foreground"
  >
    {children}
  </button>
);

export const searchFieldClass = "h-12 w-full rounded-2xl bg-muted px-5 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring";

export const Pill = ({ children, tone = "muted" }: { children: ReactNode; tone?: "muted" | "primary" }) => (
  <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${tone === "primary" ? "bg-primary/10 text-primary" : "bg-background text-muted-foreground"}`}>{children}</span>
);

export const Yes = ({ value, label }: { value: boolean; label: string }) =>
  value ? (
    <span className="inline-flex items-center gap-1.5 text-primary"><Check size={16} aria-hidden="true" /><span className="sr-only">{label}: yes</span></span>
  ) : (
    <span className="inline-flex items-center text-muted-foreground"><Minus size={16} aria-hidden="true" /><span className="sr-only">{label}: no</span></span>
  );

export const DirectoryTableShell = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`rounded-3xl bg-muted p-2 ${className}`}>{children}</div>
);

export const tableHeadClass = "whitespace-nowrap px-5 py-4 text-xs font-medium uppercase tracking-wide text-muted-foreground";
export const stickyCellClass = "sticky left-0 z-10 bg-muted transition-colors group-hover:bg-background";
export const rowClass = "group relative cursor-pointer transition-colors hover:bg-background has-[:focus-visible]:outline-2 has-[:focus-visible]:-outline-offset-2 has-[:focus-visible]:outline-ring";
export const rowLinkClass = "after:absolute after:inset-0 focus-visible:outline-none";
