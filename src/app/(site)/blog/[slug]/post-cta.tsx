import { LinkButton } from "@/components/ui/link";

export function PostCta() {
  return (
    <div className="mt-16 rounded-ui border border-border bg-muted p-8">
      <h2 className="text-xl font-semibold tracking-tight">
        Want help automating your first workflow?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Tell us what is slowing your team down and we will suggest where to
        start.
      </p>
      <div className="mt-6">
        <LinkButton href="/contact">Book a free call</LinkButton>
      </div>
    </div>
  );
}
