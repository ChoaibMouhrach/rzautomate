import { ogCard } from "@/components/site/og-card";

export function GET() {
  return ogCard({
    eyebrow: "Business process automation",
    title: "Your tools connected. No more copy-paste.",
  });
}
