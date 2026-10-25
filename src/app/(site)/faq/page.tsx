import type { Metadata } from "next";
import { Page, PageContent } from "@/components/site/page";
import { FaqHeader } from "./faq-header";
import { FaqList } from "./faq-list";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about working with us.",
};

export default function FaqPage() {
  return (
    <Page>
      <FaqHeader />
      <PageContent>
        <FaqList />
      </PageContent>
    </Page>
  );
}
