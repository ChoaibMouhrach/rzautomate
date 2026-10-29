import type { Metadata } from "next";
import { Page, PageHeader, PageTitle } from "@/components/site/page";
import { pageSocial } from "@/lib/metadata";

export const metadata: Metadata = pageSocial({
  title: "Business Process Automation",
  description:
    "Automate onboarding, approvals, invoicing and reporting from start to finish.",
  path: "/services/business-process-automation-services",
});

export default function ServicePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>Business Process Automation</PageTitle>
      </PageHeader>
    </Page>
  );
}
