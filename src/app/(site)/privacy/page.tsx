import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { pageSocial } from "@/lib/metadata";
import { LegalPage } from "@/components/site/legal-page";
import { privacyPolicy } from "./content";

export const metadata: Metadata = pageSocial({ ...pageMetadata.privacy, path: "/privacy" });

export default function PrivacyPage() {
  return <LegalPage {...privacyPolicy} />;
}
