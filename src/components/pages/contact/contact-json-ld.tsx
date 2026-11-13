import { JsonLd } from "@/components/site/json-ld";
import {
  breadcrumbJsonLd,
  contactPageJsonLd,
  faqPageJsonLd,
} from "@/lib/json-ld";
import { pageMetadata } from "@/lib/pages";
import { contactFaq } from "@/components/pages/contact/content";

export const ContactJsonLd = () => (
  <JsonLd
    data={[
      contactPageJsonLd(),
      faqPageJsonLd(contactFaq.items),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: pageMetadata.contact.title, path: "/contact" },
      ]),
    ]}
  />
);
