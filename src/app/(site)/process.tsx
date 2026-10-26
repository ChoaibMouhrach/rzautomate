import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";

const steps = [
  {
    title: "Discover",
    description:
      "We map your workflows and find the automations with the fastest payback.",
  },
  {
    title: "Build",
    description:
      "We ship a working first version in weeks, tested against your real data.",
  },
  {
    title: "Run",
    description:
      "We monitor, maintain and improve the system as your business evolves.",
  },
];

export function Process() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>How we work</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <ol className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <p className="font-mono text-sm text-muted-foreground">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-medium">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </SectionContent>
    </Section>
  );
}
