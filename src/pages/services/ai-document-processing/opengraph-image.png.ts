import { ogCard } from "@/components/site/og-card";

export function GET() {
  return ogCard({
    eyebrow: "AI document processing",
    title: "Invoices and forms entered without retyping",
  });
}
