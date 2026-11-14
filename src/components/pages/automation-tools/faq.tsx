import { directoryHeadingClass, directorySectionClass } from "@/components/site/directory";
import { Accordion } from "@/components/ui/accordion";
import { Link } from "@/components/ui/link";
import { faqs } from "./content";

export const Faq = () => (
  <section className={directorySectionClass}>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <h2 className={directoryHeadingClass}>Automation tools FAQ</h2>
        <Link href="/faq" className="mt-4 inline-block font-medium">See all questions →</Link>
      </div>
      <Accordion items={faqs} name="automation-tools-faq" />
    </div>
  </section>
);
