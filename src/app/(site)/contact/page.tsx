import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { Page, PageContent } from "@/components/site/page";
import { ContactHeader } from "./contact-header";
import { ContactJsonLd } from "./contact-json-ld";
import { ContactOptions } from "./contact-options";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <Page>
      <ContactJsonLd />
      <ContactHeader />
      <PageContent>
        <ContactOptions />
      </PageContent>
    </Page>
  );
}
