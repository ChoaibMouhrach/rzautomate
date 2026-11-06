import { LinkButton } from "@/components/ui/link";
import { company } from "@/lib/site";

export function Hero() {
  return (
    <section className="page-container pb-24 pt-20 text-center sm:pt-32">
      <p className="mb-4 text-sm text-muted-foreground">
        AI automation for small and mid-sized businesses
      </p>
      <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
        Take the repetitive work off your team&apos;s plate
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        {company.description}
      </p>
      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
        I&apos;m a software engineer. I build the agents and workflows that
        handle lead follow-up, data entry, support replies and reporting.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <LinkButton href="/contact" size="lg">
          Book a free 30-min call
        </LinkButton>
        <LinkButton href="/services" size="lg" variant="secondary">
          Get a free workflow audit
        </LinkButton>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Free · 30 min · No commitment. You talk to the engineer who builds it.
      </p>
    </section>
  );
}
