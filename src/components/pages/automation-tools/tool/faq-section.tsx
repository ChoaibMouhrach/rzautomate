import { directoryHeadingClass, directorySectionClass } from "@/components/site/directory";
import { Accordion } from "@/components/ui/accordion";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FaqSection = ({ page }: { page: ToolPage }) => (
  <section className={directorySectionClass}>
    <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <h2 className={directoryHeadingClass}>{page.faq.heading}</h2>
      <Accordion items={page.faq.items} name={`${page.slug}-faq`} />
    </div>
  </section>
);
