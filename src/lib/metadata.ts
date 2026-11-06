import { site } from "@/lib/site";

export interface SocialImage {
  url: string;
  alt: string;
}

export interface PageSeo {
  title?: string;
  description?: string;
  noindex?: boolean;
  richSnippets?: boolean;
  image?: SocialImage;
  openGraphTitle?: string;
  openGraphDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  authors?: string[];
  article?: {
    publishedTime: string;
    modifiedTime: string;
  };
}

export const defaultTitle = `${site.name} | AI Automation Agency`;

export const defaultImage: SocialImage = {
  url: "/opengraph-image.png",
  alt: defaultTitle,
};

export function pageSocial(seo: PageSeo): PageSeo {
  return { image: defaultImage, ...seo };
}
