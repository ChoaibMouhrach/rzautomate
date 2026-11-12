import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import type { ProofContent } from "./types";

export const Proof = ({ proof }: { proof: ProofContent }) => (
  <LandingSection className="py-12 md:py-16">
    <LandingHeading className="max-w-2xl text-3xl md:text-4xl">
      {proof.heading}
    </LandingHeading>
    <ul className="mt-8 grid gap-4 sm:grid-cols-3">
      {proof.pills.map((pill) => (
        <li key={pill.label} className="flex flex-col gap-2 rounded-3xl bg-muted p-6">
          <span className="text-4xl font-semibold tracking-tighter">
            <NumberTicker value={pill.number} />
          </span>
          <span className="text-sm text-muted-foreground">{pill.label}</span>
        </li>
      ))}
    </ul>
    <p className="mt-12 text-center text-sm text-muted-foreground">
      {proof.logosLabel}
    </p>
    <Marquee
      pauseOnHover
      className="mt-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      {proof.logos.map((logo) => (
        <div key={logo.name} className="flex items-center px-4 py-3">
          <img
            src={logo.src}
            alt={logo.name}
            loading="lazy"
            className={`${logo.height} w-auto max-w-none opacity-70 grayscale dark:brightness-0 dark:invert`}
          />
        </div>
      ))}
    </Marquee>
  </LandingSection>
);
