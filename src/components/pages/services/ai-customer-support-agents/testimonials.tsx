import { LandingHeading, LandingSection } from "@/components/site/landing-section";
import { testimonials } from "./content";

export const Testimonials = () => (
  <LandingSection>
    <div className="mx-auto max-w-2xl text-center">
      <LandingHeading>{testimonials.heading}</LandingHeading>
      <p className="mt-4 text-lg text-muted-foreground">{testimonials.subhead}</p>
    </div>
    <ul className="mt-14 grid gap-4 md:grid-cols-3">
      {testimonials.quotes.map((quote) => (
        <li key={quote.name}>
          <figure className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-muted p-8">
            <blockquote className="text-xl tracking-tight">{quote.quote}</blockquote>
            <figcaption>
              <span className="block text-sm font-medium">{quote.name}</span>
              <span className="block text-sm text-muted-foreground">{quote.role}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </LandingSection>
);
