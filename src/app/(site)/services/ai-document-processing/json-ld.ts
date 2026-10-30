import type { Graph } from "schema-dts";
import { absoluteUrl, company, founder } from "@/lib/site";
import { book, build, faq, path, seo } from "./content";

export function documentProcessingJsonLd(): Graph {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${seo.title} | RZ Automate`,
        description: seo.description,
        inLanguage: "en",
        isPartOf: { "@id": absoluteUrl("/#website") },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        primaryImageOfPage: { "@id": `${url}#primaryimage` },
        author: { "@id": absoluteUrl("/#choaib-mouhrach") },
        potentialAction: {
          "@type": "ReserveAction",
          name: "Book a free 30-min call",
          target: absoluteUrl("/book?service=document-processing"),
        },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#primaryimage`,
        url: absoluteUrl(`${path}/opengraph-image`),
        width: "1200",
        height: "630",
        caption: seo.imageAlt,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          { "@type": "ListItem", position: 3, name: seo.serviceName, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: seo.serviceName,
        alternateName: [...seo.alternateNames],
        serviceType: "AI document processing",
        category: "Document automation",
        description: seo.serviceDescription,
        url,
        provider: { "@id": absoluteUrl("/#organization") },
        areaServed: company.areaServed,
        audience: {
          "@type": "BusinessAudience",
          name: "Small and mid-sized businesses",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI document processing builds",
          itemListElement: build.cards.map((card) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: card.title,
              description: card.flow,
            },
          })),
        },
        isRelatedTo: book.related.map((service) => ({
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(service.href),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export const authorName = founder.name;
