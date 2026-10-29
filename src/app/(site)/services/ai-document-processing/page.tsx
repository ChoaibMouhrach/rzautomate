import type { Metadata } from "next";
import { Page, PageHeader, PageTitle } from "@/components/site/page";
import { pageSocial } from "@/lib/metadata";

export const metadata: Metadata = pageSocial({
  title: "AI Document Processing",
  description:
    "Extract invoice and document data into structured records and cut manual data entry.",
  path: "/services/ai-document-processing",
});

export default function ServicePage() {
  return (
    <Page>
      <PageHeader>
        <PageTitle>AI Document Processing</PageTitle>
      </PageHeader>
    </Page>
  );
}
