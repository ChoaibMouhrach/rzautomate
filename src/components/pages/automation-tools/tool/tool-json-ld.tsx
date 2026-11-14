import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import type { ToolPage } from "@/lib/tool-pages/types";

export const ToolJsonLd = ({ page }: { page: ToolPage }) => (
  <JsonLd
    data={[
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Automation Tools", path: "/automation-tools" },
        { name: page.name, path: `/automation-tools/${page.slug}` },
      ]),
      faqPageJsonLd(
        page.faq.items.map((item) => ({ question: item.question, answer: item.answer })),
        { name: page.faq.heading, description: page.seo.description, path: `/automation-tools/${page.slug}` },
      ),
    ]}
  />
);
