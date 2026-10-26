import type {
  BlogPosting,
  BreadcrumbList,
  FAQPage,
  Graph,
  Service as ServiceSchema,
  WithContext,
} from "schema-dts";
import type { Post } from "@/lib/blog";
import type { Service } from "@/lib/services";
import { absoluteUrl, company, founder, site } from "@/lib/site";

const context = "https://schema.org" as const;

const organizationRef = { "@id": absoluteUrl("/#organization") } as const;
const founderRef = { "@id": absoluteUrl("/#choaib-mouhrach") } as const;

export function siteJsonLd(): Graph {
  return {
    "@context": context,
    "@graph": [
      {
        "@type": "Organization",
        ...organizationRef,
        name: site.name,
        legalName: company.legalName,
        url: site.url,
        logo: { "@type": "ImageObject", url: absoluteUrl(company.logo) },
        description: company.description,
        foundingDate: company.foundingDate,
        founder: founderRef,
        email: company.email,
        address: { "@type": "PostalAddress", ...company.address },
        areaServed: company.areaServed,
      },
      {
        "@type": "Person",
        ...founderRef,
        name: founder.name,
        jobTitle: founder.jobTitle,
        worksFor: organizationRef,
        sameAs: [...founder.sameAs],
        knowsAbout: [...founder.knowsAbout],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        name: site.name,
        url: site.url,
        publisher: organizationRef,
      },
    ],
  };
}

export function serviceJsonLd(service: Service): WithContext<ServiceSchema> {
  return {
    "@context": context,
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: organizationRef,
  };
}

export function blogPostingJsonLd(post: Post): WithContext<BlogPosting> {
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    "@context": context,
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author:
      post.author.name === founder.name
        ? founderRef
        : {
            "@type": "Person",
            name: post.author.name,
            jobTitle: post.author.title,
            image: absoluteUrl(post.author.image),
          },
    publisher: organizationRef,
  };
}

export function faqPageJsonLd(
  items: readonly { question: string; answer: string }[],
): WithContext<FAQPage> {
  return {
    "@context": context,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbJsonLd(
  items: readonly { name: string; path: string }[],
): WithContext<BreadcrumbList> {
  return {
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
