import { ogCard, ogContentType, ogSize } from "@/components/site/og-card";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "AI document processing for invoices and forms by RZ Automate";

export default function Image() {
  return ogCard({ eyebrow: "AI document processing", title: "Invoices and forms entered without retyping" });
}
