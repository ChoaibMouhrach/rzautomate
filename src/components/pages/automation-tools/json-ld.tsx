import { JsonLd } from "@/components/site/json-ld";
import { automationTools, sortedByPrice, toolHref, toolsCheckedAt } from "@/lib/automation-tools";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { absoluteUrl } from "@/lib/site";
import { faqs } from "./content";

export const AutomationToolsJsonLd = () => (
  <JsonLd
    data={[
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Automation Tools", path: "/automation-tools" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Workflow automation tools",
        numberOfItems: automationTools.length,
        itemListElement: sortedByPrice.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.name,
          url: absoluteUrl(toolHref(tool)),
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Compare workflow automation tools",
        url: absoluteUrl("/automation-tools"),
        dateModified: toolsCheckedAt,
      },
      faqPageJsonLd(faqs, {
        name: "Automation tools FAQ",
        description: "Answers about workflow automation tools, pricing and self-hosting.",
        path: "/automation-tools",
      }),
    ]}
  />
);
