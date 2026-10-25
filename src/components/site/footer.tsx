import { Link } from "@/components/ui/link";
import { legalNav, nav, site } from "@/lib/site";

export async function Footer() {
  "use cache";

  return (
    <footer className="mt-auto border-t border-border">
      <div className="page-container flex flex-col gap-8 py-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {site.description}
          </p>
        </div>
        <div className="flex gap-16 text-sm">
          <nav aria-label="Company" className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} variant="muted">
                {item.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Legal" className="flex flex-col gap-2">
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
