import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import type { Service } from "@/lib/services";

export const ServiceCard = ({
  service,
  headingLevel = "h3",
}: {
  service: Service;
  headingLevel?: "h2" | "h3";
}) => <Card interactive className="group gap-0 overflow-hidden p-0">
      <div className="relative aspect-[1200/630] overflow-hidden border-b border-border">
        <img
          src={service.image}
          alt={service.imageAlt}
          decoding="async"
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <CardTitle as={headingLevel}>
          <Link
            href={`/services/${service.slug}`}
            className="no-underline after:absolute after:inset-0"
          >
            {service.title}
          </Link>
        </CardTitle>
        <CardDescription>{service.description}</CardDescription>
        <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-medium">
          Learn more
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
          />
        </span>
      </div>
    </Card>;
