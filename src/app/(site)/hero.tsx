import { LinkButton } from "@/components/ui/link";

export function Hero() {
  return (
    <section className="page-container pb-24 pt-20 sm:pt-32">
      <p className="text-sm font-medium text-primary">AI automation agency</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
        Automate the work that slows your business down.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        We design, build and run AI agents and workflow automations that take
        repetitive tasks off your team&apos;s plate.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <LinkButton href="/contact" size="lg">
          Book a free call
        </LinkButton>
        <LinkButton href="/services" size="lg" variant="secondary">
          See our services
        </LinkButton>
      </div>
    </section>
  );
}
