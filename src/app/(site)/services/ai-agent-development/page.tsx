import type { Metadata } from "next";
import { Page, PageHeader, PageTitle } from "@/components/site/page";
import { pageSocial } from "@/lib/metadata";

export const metadata: Metadata = pageSocial({
  title: "AI Agent Development",
  description:
    "Custom AI agents engineered around your tools and rules, with human hand-offs where they matter.",
  path: "/services/ai-agent-development",
});

export default function ServicePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>AI Agent Development</PageTitle>
      </PageHeader>
    </Page>
  );
}
