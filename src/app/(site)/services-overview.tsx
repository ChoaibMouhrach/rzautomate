import { ServiceCard } from "@/components/site/service-card";
import {
  Section,
  SectionAction,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import { services } from "@/lib/services";

export function ServicesOverview() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>What we build</SectionTitle>
        <SectionAction href="/services">All services</SectionAction>
      </SectionHeader>
      <SectionContent>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="flex">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  );
}
