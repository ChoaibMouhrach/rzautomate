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
import { authors } from "@/lib/authors";
import {
  isoDate,
  lastModified,
  postPath,
  type Post,
  type PostFaq,
} from "@/lib/blog";
import { pageMetadata } from "@/lib/pages";
import { services, type Service } from "@/lib/services";
import { absoluteUrl, company, founder, site } from "@/lib/site";

const context = "https://schema.org" as const;

const organizationRef = { "@id": absoluteUrl("/#organization") } as const;
const founderRef = { "@id": absoluteUrl("/#choaib-mouhrach") } as const;
const websiteRef = { "@id": absoluteUrl("/#website") } as const;

export const siteJsonLd = (): Graph => ({
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
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: company.email,
          url: absoluteUrl("/contact"),
          availableLanguage: "English",
        },
        ...(company.sameAs.length > 0 && { sameAs: [...company.sameAs] }),
        address: { "@type": "PostalAddress", ...company.address },
        areaServed: company.areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI automation services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: absoluteUrl(`/services/${service.slug}`),
            },
          })),
        },
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
        inLanguage: "en",
        publisher: organizationRef,
      },
    ],
  });

export const serviceJsonLd = (service: Service): WithContext<ServiceSchema> => ({
    "@context": context,
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.image),
    provider: organizationRef,
  });

export const blogPostingJsonLd = (post: Post): WithContext<BlogPosting> => {
  const url = absoluteUrl(postPath(post));
  const author = authors[post.data.author];

  return {
    "@context": context,
    "@type": "BlogPosting",
    headline: post.data.title,
    description: post.data.excerpt,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(post.data.image),
    datePublished: isoDate(post.data.date),
    dateModified: lastModified(post),
    articleSection: post.data.category,
    author:
      author.name === founder.name
        ? founderRef
        : {
            "@type": "Person",
            name: author.name,
            jobTitle: author.title,
            image: absoluteUrl(author.image),
          },
    publisher: organizationRef,
  };
};

export const faqPageJsonLd = (
  items: readonly { question: string; answer: string }[],
): WithContext<FAQPage> => ({
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
  });

export const postFaqJsonLd = (
  post: Post,
  faq: readonly PostFaq[],
): WithContext<FAQPage> => ({
    "@context": context,
    "@type": "FAQPage",
    name: post.data.title,
    url: absoluteUrl(postPath(post)),
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  });

export const servicesPageJsonLd = (): WithContext<CollectionPage> => ({
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
  });

export const blogJsonLd = (posts: readonly Post[]): WithContext<Blog> => ({
    "@context": context,
    "@type": "Blog",
    name: pageMetadata.blog.title,
    description: pageMetadata.blog.description,
    url: absoluteUrl("/blog"),
    isPartOf: websiteRef,
    publisher: organizationRef,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.data.title,
      description: post.data.excerpt,
      url: absoluteUrl(postPath(post)),
      image: absoluteUrl(post.data.image),
      datePublished: isoDate(post.data.date),
    })),
  });

export const contactPageJsonLd = (): WithContext<ContactPage> => ({
    "@context": context,
    "@type": "ContactPage",
    name: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
    url: absoluteUrl("/contact"),
    isPartOf: websiteRef,
    about: organizationRef,
  });

export const breadcrumbJsonLd = (
  items: readonly { name: string; path: string }[],
): WithContext<BreadcrumbList> => ({
    "@context": context,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  });
