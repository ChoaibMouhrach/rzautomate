import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { markdownPages } from "./src/integrations/markdown-pages";

const permanent = (destination: string) => ({ status: 301 as const, destination });

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://rzautomate.com",
  trailingSlash: "never",
  build: { format: "file" },
  adapter: cloudflare({
    imageService: "passthrough",
    prerenderEnvironment: "node",
  }),
  session: false,
  integrations: [react(), markdownPages()],
  redirects: {
    "/services/business-process-automation-services": permanent(
      "/services/business-process-automation",
    ),
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
