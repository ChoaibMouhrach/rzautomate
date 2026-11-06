import { ogCard } from "@/components/site/og-card";

export function GET() {
  return ogCard({
    eyebrow: "AI agent development",
    title: "Answers with sources. Actions with approval.",
  });
}
