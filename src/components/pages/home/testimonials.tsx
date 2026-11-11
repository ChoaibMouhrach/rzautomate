import { testimonials } from "./content";
import { Marquee } from "./marquee";
import { HomeSection, SectionHeading } from "./section";

const Quote = ({
  name,
  role,
  quote,
}: (typeof testimonials.quotes)[number]) => (
  <figure className="flex w-80 shrink-0 flex-col justify-between gap-6 rounded-2xl bg-muted p-6 sm:w-96">
    <blockquote className="text-lg tracking-tight">{quote}</blockquote>
    <figcaption>
      <span>
        <span className="block text-sm font-medium">{name}</span>
        <span className="block text-sm text-muted-foreground">{role}</span>
      </span>
    </figcaption>
  </figure>
);

export const Testimonials = () => (
  <HomeSection containerClassName="max-w-none px-0">
    <div className="mx-auto max-w-2xl px-6 text-center">
      <SectionHeading>{testimonials.heading}</SectionHeading>
      <p className="mt-4 text-lg text-muted-foreground">
        {testimonials.subhead}
      </p>
    </div>
    <Marquee
      pauseOnHover
      contentClassName="items-stretch"
      className="mt-14 [--duration:60s] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      {testimonials.quotes.map((quote) => (
        <Quote key={quote.name} {...quote} />
      ))}
    </Marquee>
  </HomeSection>
);
