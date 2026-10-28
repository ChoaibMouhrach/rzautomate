import type { Metadata } from "next";
import { site } from "@/lib/site";

const socialImage = (url: string, alt: string) => ({
  url,
  width: 1200,
  height: 630,
  alt,
});

type PageSocial = {
  title: string;
  description: string;
  path: string;
  routeImage?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
  };
};

export function pageSocial({
  title,
  description,
  path,
  routeImage,
  article,
}: PageSocial): Metadata {
  const images = routeImage
    ? {}
    : {
        images: [
          socialImage("/opengraph-image", `${site.name} | AI Automation Agency`),
        ],
      };
  return {
    title,
    description,
    openGraph: {
      ...(article ? { type: "article", ...article } : { type: "website" }),
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      url: path,
      ...images,
    },
    twitter: { card: "summary_large_image", title, description, ...images },
  };
}
