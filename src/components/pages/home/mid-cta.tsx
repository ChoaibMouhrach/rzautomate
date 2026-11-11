import { TextLink } from "./button";
import { BookCallButton } from "./book-call-button";
import { midCta } from "./content";
import { HomeSection } from "./section";

export const MidCta = () => (
  <HomeSection
    className="relative overflow-hidden"
    containerClassName="flex flex-col items-center text-center"
  >
    <div
      aria-hidden
      className="absolute inset-0 -z-10 opacity-70 [background-image:radial-gradient(circle,var(--border)_1.5px,transparent_1.5px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
    />
    <p className="rounded-full bg-tint px-4 py-1.5 text-sm font-medium text-muted-foreground">
      {midCta.pill}
    </p>
    <h2 className="mt-8 text-balance text-5xl font-semibold leading-[1.02] tracking-tighter md:text-7xl">
      {midCta.lineOne}
      <br />
      {midCta.plain}
      <span className="font-serif font-normal italic text-primary">
        {midCta.italic}
      </span>
    </h2>
    <p className="mt-6 max-w-md text-lg text-muted-foreground">{midCta.body}</p>
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
      <BookCallButton size="lg" />
      <TextLink href={midCta.secondary.href}>{midCta.secondary.label} →</TextLink>
    </div>
    <div className="mt-12 flex items-center gap-4">
      <ul aria-hidden className="flex -space-x-3">
        {Array.from({ length: midCta.avatars }, (_, index) => (
          <li
            key={index}
            className="size-10 rounded-full border-2 border-background bg-tint"
          />
        ))}
      </ul>
      <p className="text-sm text-muted-foreground">{midCta.proof}</p>
    </div>
  </HomeSection>
);
