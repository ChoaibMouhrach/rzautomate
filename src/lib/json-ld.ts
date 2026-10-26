import type {
  Blog,
  BlogPosting,
  BreadcrumbList,
  CollectionPage,
  ContactPage,
  FAQPage,
  Graph,
  Service as ServiceSchema,
  WithContext,
} from "schema-dts";
import { posts, type Post } from "@/lib/blog";
import { pageMetadata } from "@/lib/pages";
import { services, type Service } from "@/lib/services";
import { absoluteUrl, company, founder, site } from "@/lib/site";

const context = "https://schema.org" as const;

const organizationRef = { "@id": absoluteUrl("/#organization") } as const;
const founderRef = { "@id": absoluteUrl("/#choaib-mouhrach") } as const;
const websiteRef = { "@id": absoluteUrl("/#website") } as const;

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
    name: pageMetadata.faq.title,
    description: pageMetadata.faq.description,
    url: absoluteUrl("/faq"),
    isPartOf: websiteRef,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function servicesPageJsonLd(): WithContext<CollectionPage> {
  return {
    "@context": context,
    "@type": "CollectionPage",
    name: pageMetadata.services.title,
    description: pageMetadata.services.description,
    url: absoluteUrl("/services"),
    isPartOf: websiteRef,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        url: absoluteUrl(`/services/${service.slug}`),
      })),
    },
  };
}

export function blogJsonLd(): WithContext<Blog> {
  return {
    "@context": context,
    "@type": "Blog",
    name: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    url: absoluteUrl("/blog"),
    isPartOf: websiteRef,
    publisher: organizationRef,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blog/${post.slug}`),
      image: absoluteUrl(post.image),
      datePublished: post.date,
    })),
  };
}

export function contactPageJsonLd(): WithContext<ContactPage> {
  return {
    "@context": context,
    "@type": "ContactPage",
    name: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    url: absoluteUrl("/contact"),
    isPartOf: websiteRef,
    about: organizationRef,
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
