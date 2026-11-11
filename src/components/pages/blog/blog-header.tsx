import {
  PageActions,
  PageDescription,
  PagePrimaryAction,
  PageSecondaryAction,
} from "@/components/site/page";

export const BlogHeader = () => (
  <header className="page-container pb-10 pt-12 text-center md:pb-14 md:pt-20">
    <h1 className="animate-fade-slide-in mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
      Ideas, guides and builds in AI automation
    </h1>
    <div
      className="animate-fade-slide-in"
      style={{ animationDelay: "0.15s" }}
    >
      <PageDescription>
        Practical guides and case studies on putting AI automation to work.
      </PageDescription>
      <PageActions>
        <PagePrimaryAction href="/contact">Book a free call</PagePrimaryAction>
        <PageSecondaryAction href="/services">See our services</PageSecondaryAction>
      </PageActions>
    </div>
  </header>
);
