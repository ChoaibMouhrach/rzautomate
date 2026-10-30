import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "AI lead generation and CRM automation by RZ Automate";

export default function Image() {
  return ogCard({ eyebrow: "AI lead generation & CRM automation", title: "Every new lead answered within minutes" });
}
