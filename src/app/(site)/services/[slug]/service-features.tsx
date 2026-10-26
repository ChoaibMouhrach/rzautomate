import { Check } from "lucide-react";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import type { Service } from "@/lib/services";

export function ServiceFeatures({ service }: { service: Service }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>What we build</SectionTitle>
        <SectionDescription>{service.overview}</SectionDescription>
      </SectionHeader>
      <SectionContent>
        <ul className="grid gap-4 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 rounded-ui border border-border p-6"
            >
              <Check
                aria-hidden
                className="mt-0.5 size-5 shrink-0 text-primary"
              />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  );
}
