import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { Link, LinkButton } from "@/components/ui/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { services } from "@/lib/services";
import { nav } from "@/lib/site";

const [servicesLink, ...otherLinks] = nav.slice(0, -1);

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="page-container flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Link href="/" className="font-semibold tracking-tight no-underline">
            <Logo />
          </Link>
          <div className="hidden text-sm sm:block">
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  {servicesLink.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid w-[44rem] max-w-full grid-cols-3 gap-2">
                  <ul className="col-span-2 grid grid-cols-2 gap-1">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <NavigationMenuLink
                          href={`/services/${service.slug}`}
                          variant="item"
                          className="h-full"
                        >
                          <span className="block font-medium text-foreground">
                            {service.title}
                          </span>
                          <span className="mt-1 line-clamp-2 text-muted-foreground">
                            {service.description}
                          </span>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col justify-between gap-6 rounded-ui bg-muted p-5">
                    <div>
                      <p className="font-medium text-foreground">Services</p>
                      <p className="mt-2 text-muted-foreground">
                        AI agents and automation workflows that take repetitive
                        work off your team.
                      </p>
                    </div>
                    <Link
                      href={servicesLink.href}
                      className="inline-flex items-center gap-1 self-start font-medium text-foreground no-underline"
                    >
                      View all services
                      <ArrowRight aria-hidden className="size-4" />
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {otherLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href}>
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenu>
          </div>
        </div>
        <LinkButton href="/contact" size="sm">
          Book a free call
        </LinkButton>
      </div>
    </header>
  );
}
