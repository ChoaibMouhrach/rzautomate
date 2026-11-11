import {
  PageActions,
  PageDescription,
  PagePrimaryAction,
  PageSecondaryAction,
} from "@/components/site/page";

export const ServicesHeader = () => (
  <header className="page-container pb-10 pt-12 text-center md:pb-14 md:pt-20">
    <h1 className="animate-fade-slide-in mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">
      AI automation services for your business
    </h1>
    <div
      className="animate-fade-slide-in"
      style={{ animationDelay: "0.15s" }}
    >
      <PageDescription>
        Customer support, lead generation, document processing, business
        processes and custom AI agents. Pick the job you need help with and see
        what I build, how it works and what&apos;s included.
      </PageDescription>
      <PageActions>
        <PagePrimaryAction href="/contact">Book a free call</PagePrimaryAction>
        <PageSecondaryAction href="/faq">Read the FAQ</PageSecondaryAction>
      </PageActions>
    </div>
  </header>
);
