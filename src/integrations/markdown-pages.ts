import { access, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { htmlToMarkdown, pageToMarkdown } from "../lib/markdown";
import { pagePaths } from "../lib/pages";
import { company, site } from "../lib/site";

async function* walk(dir: string): AsyncGenerator<string> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

export const markdownPages = (): AstroIntegration => {
  let origin = "https://rzautomate.com";
  return {
    name: "markdown-pages",
    hooks: {
      "astro:config:done": ({ config }) => {
        origin = new URL(config.site ?? origin).origin;
      },
      "astro:build:done": async ({ dir, pages }) => {
        const root = fileURLToPath(dir);
        const sections = new Map<string, string>();
        const paths = pagePaths(
          pages.flatMap(({ pathname }) => {
            const slug = pathname.match(/^blog\/([^/.]+)\/?$/)?.[1];
            return slug ? [slug] : [];
          }),
        );
        for await (const file of walk(root)) {
          if (!file.endsWith(".html")) continue;
          const route = relative(root, file).slice(0, -".html".length);
          if (route === "404") continue;
          const html = await readFile(file, "utf8");
          if (/<meta[^>]*name="robots"[^>]*content="noindex/i.test(html)) {
            continue;
          }
          const pathname = route === "index" ? "/" : `/${route}`;
          const pageUrl = new URL(pathname, origin);
          const target = join(root, `${route}.md`);
          const hasSource = await access(target).then(
            () => true,
            () => false,
          );
          if (!hasSource) {
            await mkdir(dirname(target), { recursive: true });
            await writeFile(target, htmlToMarkdown(html, pageUrl));
          }
          if (paths.includes(pathname)) {
            sections.set(
              pathname,
              `Source: ${pageUrl}\n\n${pageToMarkdown(html, pageUrl).body}`,
            );
          }
        }
        await writeFile(
          join(root, "llms-full.txt"),
          `${[`# ${site.name}\n\n> ${company.description}`, ...paths.flatMap((path) => sections.get(path) ?? [])].join("\n\n---\n\n")}\n`,
        );
      },
    },
  };
};
