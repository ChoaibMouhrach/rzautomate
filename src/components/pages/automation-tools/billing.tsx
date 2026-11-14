import { directoryHeadingClass, directorySectionClass } from "@/components/site/directory";
import { NumberTicker } from "@/components/ui/number-ticker";
import { billing } from "./content";

export const Billing = () => (
  <section className={directorySectionClass}>
    <h2 className={directoryHeadingClass}>{billing.title}</h2>
    <p className="mt-4 max-w-2xl text-muted-foreground">{billing.body}</p>
    <p className="mt-8 text-lg font-medium">{billing.example}</p>
    <div className="mt-4 grid gap-3 md:grid-cols-3">
      {billing.cards.map((card) => (
        <article key={card.tool} className="flex flex-col rounded-3xl bg-muted p-8">
          <h3 className="text-sm font-medium text-muted-foreground">{card.tool}</h3>
          <p className="mt-4 text-6xl font-semibold tracking-tighter"><NumberTicker value={card.number} /></p>
          <p className="mt-1 text-lg font-medium">{card.unit}</p>
          <p className="mt-4 text-sm text-muted-foreground">{card.line}</p>
        </article>
      ))}
    </div>
    <p className="mt-6 max-w-2xl text-muted-foreground">{billing.closing}</p>
  </section>
);
