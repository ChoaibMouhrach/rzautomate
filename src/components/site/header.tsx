import { Logo } from "@/components/site/logo";
import { Link, LinkButton } from "@/components/ui/link";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="page-container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight no-underline">
          <Logo />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          <ul className="hidden items-center gap-6 sm:flex">
            {nav.slice(0, -1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} variant="muted">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LinkButton href="/contact" size="sm">
            Book a call
          </LinkButton>
        </nav>
      </div>
    </header>
  );
}
