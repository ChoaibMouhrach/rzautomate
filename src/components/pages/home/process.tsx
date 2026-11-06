import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";

const steps = [
  {
    title: "Free 30-min call and workflow audit",
    description:
      "You walk me through the work that eats your week. I ask which tools you use, how often the task runs and where it goes wrong. You get a short list of the workflows worth automating first, and an honest call on anything that isn't worth it.",
  },
  {
    title: "Scoped plan with a fixed price",
    description:
      "I write up exactly what I'll build: the trigger, the steps, the tools it connects, what the AI decides and where a human stays in the loop. One fixed price, no hourly billing. If it doesn't make sense for you, keep the plan and walk away.",
  },
  {
    title: "Build and launch your first automation",
    description:
      "I build it inside your accounts, test it on real data from your inbox, CRM or billing tool, and switch it on once you've seen it work. You get a short Loom walkthrough and a one-page runbook.",
  },
  {
    title: "Run, monitor and improve",
    description:
      "I watch the runs, fix errors when an app or API changes, and tune the prompts when the AI gets something wrong.",
  },
];

export function Process() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>How my AI automation process works</SectionTitle>
        <SectionDescription>
          RZ Automate works in four steps: a free 30-minute workflow audit, a
          written plan with a fixed price, a build that puts your first
          automation live, and ongoing monitoring once it runs. You talk to me
          at every step.
        </SectionDescription>
      </SectionHeader>
      <SectionContent>
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
