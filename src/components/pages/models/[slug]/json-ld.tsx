import { JsonLd } from "@/components/site/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/json-ld";
import { modelsCheckedAt } from "@/lib/models";
import { absoluteUrl } from "@/lib/site";
import type { ModelPageContent } from "./types";

export const ModelJsonLd = ({ page, name, provider }: { page: ModelPageContent; name: string; provider: string }) => {
  const path = `/models/${page.slug}`;
  return (
    <JsonLd
      data={[
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "AI Models", path: "/models" },
          { name: provider, path: `/models?provider=${encodeURIComponent(provider)}` },
          { name, path },
        ]),
        { "@context": "https://schema.org", "@type": "WebPage", "@id": absoluteUrl(path), name: page.h1, url: absoluteUrl(path), dateModified: modelsCheckedAt },
        faqPageJsonLd(page.faqs, { name: `${name} FAQ`, description: page.description, path }),
      ]}
    />
  );
};
