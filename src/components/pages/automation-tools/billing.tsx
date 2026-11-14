import { NumberTicker } from "@/components/ui/number-ticker";
import { billing } from "./content";
import { Section } from "./section";

const tones = ["bg-ink text-paper", "bg-primary text-primary-foreground", "bg-tint"];
const mutedTones = ["text-paper/70", "text-primary-foreground/85", "text-muted-foreground"];

export const Billing = () => (
  <Section label="Pricing models" title={billing.title} intro={billing.body}>
    <p className="text-xl font-medium tracking-tight">{billing.example}</p>
    <ul className="grid gap-4 md:grid-cols-3">
      {billing.cards.map((card, index) => (
        <li key={card.tool} className={`flex min-h-80 flex-col justify-between gap-10 rounded-3xl p-8 md:p-10 ${tones[index]}`}>
          <p className="text-sm font-medium opacity-70">{card.tool}</p>
          <div>
            <p className="text-8xl font-semibold leading-none tracking-tighter"><NumberTicker value={card.number} /></p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">{card.unit}</h3>
            <p className={`mt-3 ${mutedTones[index]}`}>{card.line}</p>
          </div>
        </li>
      ))}
    </ul>
    <p className="max-w-2xl text-lg text-muted-foreground">{billing.closing}</p>
  </Section>
);
