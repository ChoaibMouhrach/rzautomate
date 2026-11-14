import { Check, X } from "lucide-react";
import { DirectorySection } from "@/components/site/directory";
import type { ToolPage } from "@/lib/tool-pages/types";

export const BillingSection = ({ page }: { page: ToolPage }) => {
  const { billing } = page;
  return (
    <DirectorySection title={billing.heading} intro={billing.body}>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-3xl bg-muted p-8">
          <h3 className="font-semibold">What counts</h3>
          <ul className="mt-4 space-y-3">{billing.counts.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><Check aria-hidden className="mt-1 size-4 shrink-0 text-primary" />{item}</li>)}</ul>
        </div>
        <div className="rounded-3xl bg-muted p-8">
          <h3 className="font-semibold">What doesn&apos;t count</h3>
          <ul className="mt-4 space-y-3">{billing.doesntCount.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><X aria-hidden className="mt-1 size-4 shrink-0" />{item}</li>)}</ul>
        </div>
      </div>
      <div className="rounded-3xl bg-muted p-8">
        <p className="font-medium">{billing.example.line}</p>
        <ol className="mt-6 flex flex-col items-stretch md:flex-row md:items-center">
          {billing.example.steps.flatMap((step, index) => [
            <li key={step} className="flex-1 rounded-2xl bg-background p-5 md:flex-none md:basis-1/4">
              <p className="text-sm text-muted-foreground">{step}</p>
              <p className="mt-2 text-xl font-semibold tracking-tight">{billing.example.values[index]}</p>
            </li>,
            index < 2 && <span key={`${step}-beam`} aria-hidden className="beam-link relative mx-auto h-10 w-[3px] shrink-0 overflow-hidden rounded-full bg-border md:mx-0 md:h-[3px] md:w-auto md:flex-1" />,
          ])}
        </ol>
      </div>
    </DirectorySection>
  );
};
