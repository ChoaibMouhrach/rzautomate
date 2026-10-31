import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";
import { seo } from "./content";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = seo.imageAlt;

export default function Image() {
  return ogCard({ eyebrow: "AI agent development", title: "Answers with sources. Actions with approval." });
}
