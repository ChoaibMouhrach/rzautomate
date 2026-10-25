import {
  PageDescription,
  PageHeader,
  PageTitle,
} from "@/components/site/page";

export function BlogHeader() {
  return (
    <PageHeader>
      <PageTitle>Blog</PageTitle>
      <PageDescription>
        Practical guides and case studies on putting AI automation to work.
      </PageDescription>
    </PageHeader>
  );
}
