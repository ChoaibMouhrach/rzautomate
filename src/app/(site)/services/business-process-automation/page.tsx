import type { Metadata } from "next";
import { pageSocial } from "@/lib/metadata";
import { path, seo } from "./content";
import { authorName } from "./json-ld";
import { BusinessProcessAutomationContent } from "./business-process-automation-content";

const social = pageSocial({
  title: seo.title,
  description: seo.description,
  path,
});

const socialImages = [
  { url: `${path}/opengraph-image`, width: 1200, height: 630, alt: seo.imageAlt },
];

export const metadata: Metadata = {
  ...social,
  alternates: { canonical: path },
  authors: [{ name: authorName }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    ...social.openGraph,
    title: seo.socialTitle,
    description: seo.openGraphDescription,
    images: socialImages,
  },
  twitter: {
    ...social.twitter,
    title: seo.socialTitle,
    description: seo.twitterDescription,
    images: socialImages,
  },
};

export default function BusinessProcessAutomationPage() {
  return <BusinessProcessAutomationContent />;
}
