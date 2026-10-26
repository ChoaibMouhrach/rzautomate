import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pages";
import { ContactCta } from "@/components/site/contact-cta";
import { Page, PageContent } from "@/components/site/page";
import { BlogHeader } from "./blog-header";
import { BlogJsonLd } from "./blog-json-ld";
import { PostList } from "./post-list";

export const metadata: Metadata = pageMetadata.blog;

export default function BlogPage() {
  return (
    <Page>
      <BlogJsonLd />
      <BlogHeader />
      <PageContent>
        <PostList />
        <ContactCta className="mt-16" />
      </PageContent>
    </Page>
  );
}
