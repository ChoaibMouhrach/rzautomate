import { posts } from "@/lib/blog";
import { pageMetadata } from "@/lib/pages";
import { services } from "@/lib/services";
import { absoluteUrl, company, site } from "@/lib/site";

const markdownUrl = (path: string) =>
  absoluteUrl(path === "/" ? "/index.md" : `${path}.md`);

const link = (title: string, path: string, description: string) =>
  `- [${title}](${markdownUrl(path)}): ${description}`;

const pages = [
  { title: "Home", path: "/", description: site.description },
  { path: "/services", ...pageMetadata.services },
  { path: "/blog", ...pageMetadata.blog },
  { path: "/faq", ...pageMetadata.faq },
  { path: "/contact", ...pageMetadata.contact },
];

const legalPages = [
  { path: "/privacy", ...pageMetadata.privacy },
  { path: "/terms", ...pageMetadata.terms },
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
        `- [Full content](${absoluteUrl("/llms-full.txt")}): Every page of the site in a single Markdown file.`,
      ]),
    ].join("\n\n") + "\n"
  );
}
