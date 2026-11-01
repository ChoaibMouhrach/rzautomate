import type { Graph } from "schema-dts";
import { models, modelsCheckedAt } from "@/lib/models";
import { absoluteUrl } from "@/lib/site";
import { faqs } from "./content";

export function modelsJsonLd(): Graph {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "AI Models", item: absoluteUrl("/models") },
      ] },
      { "@type": "ItemList", name: "AI models", itemListElement: models.map((model, index) => ({ "@type": "ListItem", position: index + 1, name: model.name, url: absoluteUrl(`/models/${model.slug}`) })) },
      { "@type": "Dataset", "@id": absoluteUrl("/models#dataset"), name: "AI model API pricing", description: "Standard API input, output and cached-input pricing per million tokens, context windows and features for four selected AI models. Manually maintained using Models.dev and Anthropic documentation.", url: absoluteUrl("/models"), dateModified: modelsCheckedAt, creator: { "@id": absoluteUrl("/#organization") }, isBasedOn: "https://models.dev/api.json" },
      { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    ],
  };
}
