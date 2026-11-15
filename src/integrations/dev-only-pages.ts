import { rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";

export const devOnlyPages = (routes: readonly string[]): AstroIntegration => ({
  name: "dev-only-pages",
  hooks: {
    "astro:build:done": async ({ dir }) => {
      const root = fileURLToPath(dir);
      await Promise.all(routes.map((route) => rm(join(root, `${route}.html`), { force: true })));
    },
  },
});
