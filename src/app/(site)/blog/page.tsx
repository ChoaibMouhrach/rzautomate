import type { Metadata } from "next";
import { ContactCta } from "@/components/site/contact-cta";
import { Page, PageContent } from "@/components/site/page";
import { BlogHeader } from "./blog-header";
import { PostList } from "./post-list";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides and case studies on AI automation for businesses.",
};

export default function BlogPage() {
  return (
    <Page>
      <BlogHeader />
      <PageContent>
        <PostList />
        <ContactCta className="mt-16" />
      </PageContent>
    </Page>
  );
}
