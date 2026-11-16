import { toolPages } from "@/lib/tool-pages";
import { models } from "@/lib/models";
import { services } from "@/lib/services";
import { legalNav, nav } from "@/lib/site";

export const pagePaths = (postSlugs: readonly string[]) => [
    "/",
    "/tools/automation-roi-calculator",
    "/models",
    "/automation-tools",
    ...toolPages.map((page) => `/automation-tools/${page.slug}`),
    ...models.map((model) => `/models/${model.slug}`),
    ...nav.map((item) => item.href),
    ...services.map((service) => `/services/${service.slug}`),
    ...postSlugs.map((slug) => `/blog/${slug}`),
    ...legalNav.map((item) => item.href),
    "/privacy",
  ];

export const pageMetadata = {
  services: {
    title: "Services",
    description:
      "AI customer support agents, automation maintenance, AI lead generation & CRM automation, AI document processing and custom AI agent development.",
  },
  blog: {
    title: "Blog",
    seoTitle: "Blog: AI Automation Guides and Case Studies",
    description:
      "Practical guides and real builds on AI automation for businesses: customer support, lead qualification, course automation and the tools behind them.",
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
  roiCalculator: {
    title: "Automation ROI Calculator: Hours and Money",
    description:
      "Free automation ROI calculator. Enter five numbers about one task and see the hours, money and hires automation could save you each year. No email needed.",
  },
  models: {
    title: "AI Model Comparison: API Price and Context",
    description:
      "Compare AI models from OpenAI, Anthropic, Google, DeepSeek and more. API price per 1M tokens, context window, features and what a real job costs.",
  },
  automationTools: {
    title: "Workflow Automation Tools Compared by Price",
    description:
      "Compare the pricing of n8n, Zapier, Make and other workflow automation tools. See what each costs, what you're charged for and which have a free plan.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "What we collect when you visit, book a call or write to us, how we use it, who we share it with and the choices you have.",
  },
  terms: {
    title: "Terms and Services",
    description: "The terms that apply to every engagement with Rizon LLC, including payment, code ownership and liability.",
  },
} as const;
