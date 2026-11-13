import { models } from "@/lib/models";
import { services } from "@/lib/services";
import { legalNav, nav } from "@/lib/site";

export const pagePaths = (postSlugs: readonly string[]) => [
    "/",
    "/models",
    ...models.map((model) => `/models/${model.slug}`),
    ...nav.map((item) => item.href),
    ...services.map((service) => `/services/${service.slug}`),
    ...postSlugs.map((slug) => `/blog/${slug}`),
    ...legalNav.map((item) => item.href),
  ];

export const pageMetadata = {
  services: {
    title: "Services",
    description:
      "AI customer support agents, automation maintenance, AI lead generation & CRM automation, AI document processing and custom AI agent development.",
  },
  blog: {
    title: "Blog",
    description:
      "Practical guides and case studies on AI automation for businesses.",
  },
  faq: {
    title: "FAQ",
    seoTitle: "Frequently Asked Questions",
    description:
      "Answers to what clients ask before working with us: fit, trust, timelines, cost, data and what happens after launch.",
  },
  contact: {
    title: "Contact",
    seoTitle: "Contact and Book a Free 30-Min Call",
    description:
      "Talk to RZ Automate about AI automation for your business. Book a free 30-minute call or email us, and we'll reply within two hours.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "How we collect, use and protect your information.",
  },
  terms: {
    title: "Terms of Service",
    description: "The terms that apply when you use our website and services.",
  },
} as const;
