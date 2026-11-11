import { ServiceCard } from "@/components/pages/services/service-card";
import { services } from "@/lib/services";

export const ServiceList = () => (
  <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {services.map((service) => (
      <li key={service.slug} className="flex">
        <ServiceCard service={service} headingLevel="h2" />
      </li>
    ))}
  </ul>
);
