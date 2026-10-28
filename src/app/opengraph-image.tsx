import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";
import { site } from "@/lib/site";

export const alt = `${site.name} | AI Automation Agency`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpenGraphImage() {
  return ogCard({
    eyebrow: site.name,
    title: "AI automation that removes manual work",
  });
}
