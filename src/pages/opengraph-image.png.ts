import { ogCard } from "@/components/site/og-card";
import { site } from "@/lib/site";

export const GET = () => ogCard({
    eyebrow: site.name,
    title: "AI automation that removes manual work",
  });
