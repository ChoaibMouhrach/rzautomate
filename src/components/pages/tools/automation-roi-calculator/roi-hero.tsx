import { ArrowDown } from "lucide-react";
import { LinkButton } from "@/components/ui/link";
import { hero } from "@/components/pages/tools/automation-roi-calculator/content";

export const RoiHero = () => (
  <section className="pb-16 pt-12 md:pb-28 md:pt-20">
    <div className="page-container">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="animate-fade-slide-in text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
          {hero.title} {hero.accent}
        </h1>
        <p
          className="animate-fade-slide-in mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          style={{ animationDelay: "0.15s" }}
        >
          {hero.subhead}
        </p>
        <div
          className="animate-fade-slide-in mt-10 flex justify-center"
          style={{ animationDelay: "0.3s" }}
        >
          <LinkButton href="#calculator" size="lg">
            Start calculating
            <ArrowDown aria-hidden className="size-5" />
          </LinkButton>
        </div>
      </div>
    </div>
  </section>
);
