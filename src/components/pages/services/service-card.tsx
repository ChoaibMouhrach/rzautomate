import { ArrowRight } from "lucide-react";
import { Link } from "@/components/ui/link";
import type { Service } from "@/lib/services";

export const ServiceCard = ({
  service,
  headingLevel: Heading = "h3",
}: {
  service: Service;
  headingLevel?: "h2" | "h3";
}) => (
  <article className="group relative flex w-full flex-col">
    <div className="relative aspect-[1200/630] overflow-hidden rounded-3xl bg-muted">
      <img
        src={service.image}
        alt={service.imageAlt}
        decoding="async"
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 px-2 pb-2 pt-5">
      <Heading className="text-2xl font-semibold leading-tight tracking-tighter text-balance">
        <Link
          href={`/services/${service.slug}`}
          className="text-foreground no-underline hover:no-underline after:absolute after:inset-0"
        >
          {service.title}
        </Link>
      </Heading>
      <p className="text-muted-foreground">{service.description}</p>
      <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium">
        Learn more
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
        />
      </span>
    </div>
  </article>
);
