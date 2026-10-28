import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { pageSocial } from "@/lib/metadata";
import { ContactCta } from "@/components/site/contact-cta";
import { Page, PageContent } from "@/components/site/page";
import { FaqHeader } from "./faq-header";
import { FaqJsonLd } from "./faq-json-ld";
import { FaqList } from "./faq-list";

export const metadata: Metadata = pageSocial({ ...pageMetadata.faq, path: "/faq" });

export default function FaqPage() {
  return (
    <Page>
      <FaqJsonLd />
      <FaqHeader />
      <PageContent>
        <FaqList />
        <ContactCta className="mt-16" />
      </PageContent>
    </Page>
  );
}
