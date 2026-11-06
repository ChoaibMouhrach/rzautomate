import { ogCard } from "@/components/site/og-card";
import { site } from "@/lib/site";

export function GET() {
  return ogCard({
    eyebrow: site.name,
    title: "AI automation that removes manual work",
  });
}
