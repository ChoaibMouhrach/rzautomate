import { BookCall } from "@/components/site/book-call";
import { Link } from "@/components/ui/link";
import type { ModelPageContent } from "./types";

export const ModelCta = ({ cta }: { cta: ModelPageContent["cta"] }) => (
  <>
    <BookCall tone="dark" title={cta.heading} description={cta.body} />
    <p className="page-container pb-16 text-sm text-muted-foreground">Want the full picture? See <Link href={cta.link.href}>{cta.link.label}</Link>.</p>
  </>
);
