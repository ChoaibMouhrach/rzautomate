import { FaqAccordion } from "@/components/site/faq-accordion";
import { button } from "@/components/ui/button";
import { bookingLabel, faq } from "./content";
import { LandingSection } from "@/components/site/landing-section";

export const Faq = () => (
  <LandingSection
    id="faq"
    containerClassName="grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
  >
    <div className="flex flex-col justify-between gap-12 rounded-3xl bg-ink p-8 text-paper md:p-10 lg:sticky lg:top-28 lg:self-start lg:min-h-[28rem]">
      <div>
        <p className="text-sm font-medium text-paper/60">{faq.label}</p>
        <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tighter md:text-5xl">
          {faq.heading}
        </h2>
        <a
          href={faq.link.href}
          className="mt-6 inline-block font-medium text-paper underline-offset-4 hover:underline"
        >
          {faq.link.label} →
        </a>
      </div>
      <a
        href="#book"
        className={button({ size: "lg", className: "w-full" })}
      >
        {bookingLabel}
      </a>
    </div>
    <FaqAccordion name="home-faq" items={faq.items} />
  </LandingSection>
);
