import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Business process automation services by RZ Automate";

export default function Image() {
  return ogCard({ eyebrow: "Business process automation", title: "Your tools connected. No more copy-paste." });
}
