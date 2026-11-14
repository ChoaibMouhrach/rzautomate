import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { models, modelsCheckedAt } from "@/lib/models";
import { absoluteUrl } from "@/lib/site";
import { faqs } from "./content";

export const ModelsJsonLd = () => (
  <JsonLd
    data={[
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "AI Models", path: "/models" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "AI models",
        itemListElement: models.map((model, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: model.name,
          url: absoluteUrl(`/models/${model.slug}`),
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "@id": absoluteUrl("/models#dataset"),
        name: "AI model API pricing",
        description: "Standard API input, output and cached-input pricing per million tokens, context windows and features for AI models from major providers.",
        url: absoluteUrl("/models"),
        dateModified: modelsCheckedAt,
        creator: { "@id": absoluteUrl("/#organization") },
      },
      faqPageJsonLd(faqs, {
        name: "AI model pricing FAQ",
        description: "Answers about AI model pricing, tokens and context windows.",
        path: "/models",
      }),
    ]}
  />
);
