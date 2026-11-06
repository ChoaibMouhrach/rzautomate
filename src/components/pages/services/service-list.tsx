import { ServiceCard } from "@/components/site/service-card";
import { services } from "@/lib/services";

export function ServiceList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <li key={service.slug} className="flex">
          <ServiceCard service={service} headingLevel="h2" />
        </li>
      ))}
    </ul>
  );
}
