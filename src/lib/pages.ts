import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { legalNav, nav } from "@/lib/site";

const landingServiceSlugs = [
  "ai-agent-development",
  "ai-customer-support-agents",
  "ai-document-processing",
  "ai-lead-generation-crm-automation",
  "business-process-automation-services",
];

export function pagePaths() {
  return [
    "/",
    ...nav.map((item) => item.href),
    ...services.map((service) => `/services/${service.slug}`),
    ...landingServiceSlugs.map((slug) => `/services/${slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
    ...legalNav.map((item) => item.href),
  ];
}

export const pageMetadata = {
  services: {
    title: "Services",
    description:
      "AI agents, workflow automation, lead and sales automation, document processing and AI strategy.",
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
