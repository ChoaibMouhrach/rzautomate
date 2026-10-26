import { posts } from "@/lib/blog";
import { services } from "@/lib/services";
import { absoluteUrl, company, site } from "@/lib/site";

const markdownUrl = (path: string) =>
  absoluteUrl(path === "/" ? "/index.md" : `${path}.md`);

const link = (title: string, path: string, description: string) =>
  `- [${title}](${markdownUrl(path)}): ${description}`;

const pages = [
  { title: "Home", path: "/", description: site.description },
  {
    title: "Services",
    path: "/services",
    description:
      "AI agents, workflow automation, lead and sales automation, document processing and AI strategy.",
  },
  {
    title: "Blog",
    path: "/blog",
    description:
      "Practical guides and case studies on AI automation for businesses.",
  },
  {
    title: "FAQ",
    path: "/faq",
    description: "Answers to common questions about working with us.",
  },
  {
    title: "Contact",
    path: "/contact",
    description:
      "Email us or book a free 30-minute discovery call to talk through your workflow.",
  },
];

const legalPages = [
  {
    title: "Privacy Policy",
    path: "/privacy",
    description: "How we collect, use and protect your information.",
  },
  {
    title: "Terms of Service",
    path: "/terms",
    description: "The terms that apply when you use our website and services.",
  },
];

export function buildLlmsTxt() {
  const section = (heading: string, lines: string[]) =>
    [`## ${heading}`, "", ...lines].join("\n");

  return (
    [
      `# ${site.name}`,
      `> ${company.description}`,
      "Every page is also available as Markdown: request it with an `Accept: text/markdown` header or add `.md` to the page URL.",
      section(
        "Pages",
        pages.map(({ title, path, description }) =>
          link(title, path, description),
        ),
      ),
      section(
        "Services",
        services.map((service) =>
          link(service.title, `/services/${service.slug}`, service.description),
        ),
      ),
      section(
        "Blog",
        posts.map((post) =>
          link(post.title, `/blog/${post.slug}`, post.excerpt),
        ),
      ),
      section("Optional", [
        ...legalPages.map(({ title, path, description }) =>
          link(title, path, description),
        ),
        `- [Sitemap](${absoluteUrl("/sitemap.xml")}): Every public page of the site.`,
      ]),
    ].join("\n\n") + "\n"
  );
}
