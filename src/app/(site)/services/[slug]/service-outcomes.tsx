import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import type { Service } from "@/lib/services";

export function ServiceOutcomes({ service }: { service: Service }) {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>What you get</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <ol className="grid gap-8 sm:grid-cols-3">
          {service.outcomes.map((outcome, index) => (
            <li key={outcome}>
              <p className="font-mono text-sm text-muted-foreground">
                0{index + 1}
              </p>
              <p className="mt-2 font-medium">{outcome}</p>
            </li>
          ))}
        </ol>
      </SectionContent>
    </Section>
  );
}
