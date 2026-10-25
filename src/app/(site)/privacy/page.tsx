import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { privacyPolicy } from "./content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How we collect, use and protect your information.",
};

export default function PrivacyPage() {
  return <LegalPage {...privacyPolicy} />;
}
