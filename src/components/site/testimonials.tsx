import { Marquee } from "@/components/ui/marquee";
import { LandingSection, LandingHeading } from "@/components/site/landing-section";
import { defaultTestimonials, testimonialQuotes } from "./testimonials-content";

const Quote = ({ name, quote }: (typeof testimonialQuotes)[number]) => (
  <figure className="flex w-80 shrink-0 flex-col justify-between gap-6 rounded-2xl bg-muted p-6 sm:w-96">
    <blockquote className="text-lg tracking-tight">{quote}</blockquote>
    <figcaption>
      <span className="block text-sm font-medium">{name}</span>
    </figcaption>
  </figure>
);

export const Testimonials = ({
  heading = defaultTestimonials.heading,
  subhead = defaultTestimonials.subhead,
}: {
  heading?: string;
  subhead?: string;
}) => (
  <LandingSection containerClassName="max-w-none px-0">
    <div className="mx-auto max-w-2xl px-6 text-center">
      <LandingHeading>{heading}</LandingHeading>
      <p className="mt-4 text-lg text-muted-foreground">{subhead}</p>
    </div>
    <Marquee
      pauseOnHover
      contentClassName="items-stretch"
      className="mt-14 [--duration:60s] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      {testimonialQuotes.map((quote) => (
        <Quote key={quote.name} {...quote} />
      ))}
    </Marquee>
  </LandingSection>
);
