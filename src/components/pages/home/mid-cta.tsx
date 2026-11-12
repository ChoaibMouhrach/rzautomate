import { button } from "@/components/ui/button";
import { FreeText } from "@/components/ui/free-text";
import { bookingLabel, logos, midCta } from "./content";
import { LandingSection } from "@/components/site/landing-section";

export const MidCta = () => (
  <LandingSection className="py-8 md:py-12">
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground md:px-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-25 [background-image:radial-gradient(circle,#fff_1.5px,transparent_1.5px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <p className="mx-auto w-fit rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
        {midCta.pill}
      </p>
      <h2 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-tighter md:text-7xl">
        {midCta.lineOne}
        <br />
        {midCta.plain}
        <span className="font-serif font-normal italic">{midCta.italic}</span>
      </h2>
      <p className="mx-auto mt-6 max-w-md text-lg text-primary-foreground/85">
        {midCta.body}
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <a
          href="#book"
          className={button({
            size: "lg",
            className:
              "bg-primary-foreground text-foreground hover:bg-primary-foreground hover:opacity-90",
          })}
        >
          <FreeText>{bookingLabel}</FreeText>
        </a>
        <a
          href={midCta.secondary.href}
          className="font-medium underline-offset-4 hover:underline"
        >
          {midCta.secondary.label} →
        </a>
      </div>
      <div className="mt-14 flex items-center justify-center gap-4">
        <ul className="flex -space-x-3">
          {logos.items
            .filter((logo) => midCta.avatars.includes(logo.name))
            .map((logo) => {
              const isFull = midCta.fullCircle.includes(logo.name);
              return (
                <li
                  key={logo.name}
                  className={`flex size-12 items-center justify-center overflow-hidden rounded-full bg-background ring-2 ring-primary ${isFull ? "" : "p-2.5"}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    className={
                      isFull
                        ? "size-full object-cover"
                        : "max-h-full max-w-full object-contain"
                    }
                  />
                </li>
              );
            })}
        </ul>
        <p className="text-sm text-primary-foreground/85">{midCta.proof}</p>
      </div>
    </div>
  </LandingSection>
);
