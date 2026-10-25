import { LinkButton } from "@/components/ui/link";

export function CallToAction() {
  return (
    <section className="border-t border-border bg-muted">
      <div className="page-container pb-24 pt-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to see what we can automate?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Tell us about your workflow. We&apos;ll come back with a clear plan and
          a fixed price.
        </p>
        <div className="mt-8">
          <LinkButton href="/contact" size="lg">
            Get in touch
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
