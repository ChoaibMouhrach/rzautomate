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
    <section className="border-t border-border">
      <div className="page-container pb-24 pt-16">
        <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
