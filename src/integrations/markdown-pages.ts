import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
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

export function markdownPages(): AstroIntegration {
  let origin = "https://rzautomate.com";
  return {
    name: "markdown-pages",
    hooks: {
      "astro:config:done": ({ config }) => {
        origin = new URL(config.site ?? origin).origin;
      },
      "astro:build:done": async ({ dir }) => {
        const root = fileURLToPath(dir);
        const sections = new Map<string, string>();
        for await (const file of walk(root)) {
          if (!file.endsWith(".html")) continue;
          const route = relative(root, file).slice(0, -".html".length);
          if (route === "404") continue;
          const html = await readFile(file, "utf8");
          if (/<meta[^>]*name="robots"[^>]*content="noindex/i.test(html)) {
            continue;
          }
          const pathname = route === "index" ? "/" : `/${route}`;
          const markdown = htmlToMarkdown(html, new URL(pathname, origin));
          const target = join(root, `${route}.md`);
          await mkdir(dirname(target), { recursive: true });
          await writeFile(target, markdown);
          if (pagePaths().includes(pathname)) {
            const pageUrl = new URL(pathname, origin);
            sections.set(
              pathname,
              `Source: ${pageUrl}\n\n${pageToMarkdown(html, pageUrl).body}`,
            );
          }
        }
        await writeFile(
          join(root, "llms-full.txt"),
          `${[`# ${site.name}\n\n> ${company.description}`, ...pagePaths().flatMap((path) => sections.get(path) ?? [])].join("\n\n---\n\n")}\n`,
        );
      },
    },
  };
}
