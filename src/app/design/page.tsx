import type { Metadata } from "next";
import { DesignGallery } from "./design-gallery";

export const metadata: Metadata = {
  title: "Design system",
  alternates: { canonical: null },
  robots: { index: false, follow: false },
};

export default function DesignPage() {
  return <DesignGallery />;
}
