import { LinkButton } from "@/components/ui/link";
import type { Service } from "@/lib/services";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="page-container pb-24 pt-20 text-center sm:pt-32">
      <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
        {service.title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <LinkButton href="/contact" size="lg">
          Book a free call
        </LinkButton>
        <LinkButton href="/services" size="lg" variant="secondary">
          All services
        </LinkButton>
      </div>
    </section>
  );
}
