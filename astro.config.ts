import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import { satteri } from "@astrojs/markdown-satteri";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import { headingAnchors } from "./src/hast/heading-anchors";
import { markdownPages } from "./src/integrations/markdown-pages";

const { PUBLIC_SITE_URL = "https://rzautomate.com" } = loadEnv(
  process.env.NODE_ENV ?? "production",
  process.cwd(),
  "PUBLIC_",
);

const permanent = (destination: string) => ({ status: 301 as const, destination });

export default defineConfig({
  site: PUBLIC_SITE_URL,
  trailingSlash: "never",
  build: { format: "file", inlineStylesheets: "always" },
  adapter: cloudflare({
    imageService: "passthrough",
    prerenderEnvironment: "node",
  }),
  session: false,
  integrations: [react(), mdx(), markdownPages()],
  markdown: { processor: satteri({ hastPlugins: [headingAnchors] }) },
  redirects: {
    "/models/claude-fable-5-1": permanent("/models/claude-fable-5-2"),
    "/models/deepseek-v4-flash": permanent("/models/deepseek-v4-1-flash"),
    "/services/business-process-automation": permanent("/services"),
    "/services/business-process-automation-services": permanent("/services"),
    "/services/data-and-document-processing": permanent(
      "/services/ai-document-processing",
    ),
    "/services/ai-lead-generation-crm-automation": permanent(
      "/services/ai-lead-generation",
    ),
    "/services/lead-and-sales-automation": permanent(
      "/services/ai-lead-generation",
    ),
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: { exclude: ["@resvg/resvg-js"] },
    ssr: { external: ["@resvg/resvg-js"] },
  },
});
