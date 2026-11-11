import { stats } from "./content";
import { NumberTicker } from "./number-ticker";
import { HomeSection } from "./section";

export const ProofStats = () => (
  <HomeSection className="py-12 md:py-16">
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <li key={stat.label} className="flex flex-col gap-2 rounded-2xl bg-muted p-6">
          <span className="text-4xl font-semibold tracking-tight">
            <NumberTicker value={stat.value} />
          </span>
          <span className="text-sm text-muted-foreground">{stat.label}</span>
        </li>
      ))}
    </ul>
  </HomeSection>
);
