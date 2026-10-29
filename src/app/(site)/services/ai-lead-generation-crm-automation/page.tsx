import type { Metadata } from "next";
import { Page, PageHeader, PageTitle } from "@/components/site/page";
import { pageSocial } from "@/lib/metadata";

export const metadata: Metadata = pageSocial({
  title: "AI Lead Generation & CRM Automation",
  description:
    "Capture, qualify and follow up with leads automatically, and keep your CRM clean.",
  path: "/services/ai-lead-generation-crm-automation",
});

export default function ServicePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>AI Lead Generation &amp; CRM Automation</PageTitle>
      </PageHeader>
    </Page>
  );
}
