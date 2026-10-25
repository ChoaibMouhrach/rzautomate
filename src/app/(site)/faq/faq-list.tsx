import { Accordion } from "@/components/ui/accordion";
import { Link } from "@/components/ui/link";
import { faqs } from "@/lib/site";

export function FaqList() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion items={faqs} />
      <p className="mt-8 text-muted-foreground">
        Still have a question? <Link href="/contact">Get in touch</Link>.
      </p>
    </div>
  );
}
