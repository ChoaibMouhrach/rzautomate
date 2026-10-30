import { NewsletterForm } from "@/components/site/newsletter-form";
import { Logo } from "@/components/site/logo";
import { Link } from "@/components/ui/link";
import { services } from "@/lib/services";
import { legalNav, nav, site } from "@/lib/site";

export async function Footer() {
  "use cache";

  return (
    <footer className="mt-auto border-t border-border">
      <div className="border-b border-border">
        <div className="page-container flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-md">
            <h2 className="text-lg font-semibold tracking-tight">
              Subscribe to our newsletter
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Practical AI automation ideas and case studies, delivered to your
              inbox. No spam.
            </p>
          </div>
          <div className="w-full lg:max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="page-container flex flex-col gap-8 py-12 lg:flex-row lg:justify-between">
        <div className="max-w-xs">
          <Logo className="h-7" />
          <p className="mt-2 text-sm text-muted-foreground">
            {site.description}
          </p>
        </div>
        <div className="grid gap-8 text-sm sm:grid-cols-[minmax(0,20rem)_auto_auto] sm:gap-12">
          <nav aria-label="Services" className="flex flex-col gap-2">
            <h2 className="mb-2 font-semibold">Services</h2>
            <Link href="/services" variant="muted">
              All services
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                variant="muted"
              >
                {service.title}
              </Link>
            ))}
          </nav>
          <nav aria-label="Company" className="flex flex-col gap-2">
            <h2 className="mb-2 font-semibold">Company</h2>
            {nav.filter((item) => item.href !== "/services").map((item) => (
              <Link key={item.href} href={item.href} variant="muted">
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Legal" className="flex flex-col gap-2">
            <h2 className="mb-2 font-semibold">Legal</h2>
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} variant="muted">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="page-container pb-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
