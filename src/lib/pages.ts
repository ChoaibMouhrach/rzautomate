import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { legalNav, nav } from "@/lib/site";

export function pagePaths() {
  return [
    "/",
    ...nav.map((item) => item.href),
    ...services.map((service) => `/services/${service.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
    ...legalNav.map((item) => item.href),
  ];
}

export const pageMetadata = {
  services: {
    title: "Services",
    description:
      "AI customer support agents, business process automation, AI lead generation & CRM automation, AI document processing and custom AI agent development.",
  },
  blog: {
    title: "Blog",
    description:
      "Practical guides and case studies on AI automation for businesses.",
  },
  faq: {
    title: "FAQ",
    description: "Answers to common questions about working with us.",
  },
  contact: {
    title: "Contact",
    description: "Tell us what you want to automate and we'll get back to you.",
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
