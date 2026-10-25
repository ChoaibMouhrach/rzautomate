import type { Metadata } from "next";
import { Page, PageContent } from "@/components/site/page";
import { ContactHeader } from "./contact-header";
import { ContactOptions } from "./contact-options";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what you want to automate and we'll get back to you.",
};

export default function ContactPage() {
  return (
    <Page>
      <ContactHeader />
      <PageContent>
        <ContactOptions />
      </PageContent>
    </Page>
  );
}
