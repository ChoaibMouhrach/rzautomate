import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";

export const metadata: Metadata = { title: "Design system" };

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 border-t border-border py-8">
      <h2 className="text-sm font-medium text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">
        Design system
      </h1>

      <Section title="Button / variants">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button isDisabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Button / sizes">
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="TextField">
        <div className="grid max-w-sm gap-4">
          <TextField
            label="Email"
            description="We'll never share it."
            placeholder="you@company.com"
            type="email"
          />
          <TextField
            label="Company"
            isRequired
            isInvalid
            errorMessage="Company is required."
          />
        </div>
      </Section>
    </main>
  );
}
