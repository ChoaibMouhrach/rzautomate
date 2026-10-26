import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { LegalPage } from "@/components/site/legal-page";
import { privacyPolicy } from "./content";

export const metadata: Metadata = pageMetadata.privacy;

export default function PrivacyPage() {
  return <LegalPage {...privacyPolicy} />;
}
