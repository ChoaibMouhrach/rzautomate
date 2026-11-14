import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/logo";
import { MobileNavigation } from "@/components/site/mobile-navigation";
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

const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(scrollY > 8);
    sync();
    addEventListener("scroll", sync, { passive: true });
    document.addEventListener("astro:page-load", sync);
    return () => {
      removeEventListener("scroll", sync);
      document.removeEventListener("astro:page-load", sync);
    };
  }, []);

  return scrolled;
};

export const Header = () => {
  const solid = useScrolled();

  return <header
      className={`sticky top-0 z-40 transition-[padding] duration-300 ${solid ? "px-6 py-3" : "px-0 py-0"}`}
    >
      <div
        data-nav-anchor
        className={`mx-auto grid grid-cols-[1fr_auto] items-center gap-6 transition-[max-width,height,padding,border-radius,background-color,box-shadow] duration-300 sm:grid-cols-[1fr_auto_1fr] ${
          solid
            ? "h-14 max-w-5xl rounded-full bg-background/80 pl-6 pr-2 shadow-lg shadow-black/5 backdrop-blur-md"
            : "h-20 max-w-6xl rounded-none bg-transparent px-6"
        }`}
      >
          <Link href="/" className="justify-self-start font-semibold tracking-tight no-underline hover:no-underline">
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
                    <NavigationMenuLink
                      href={servicesLink.href}
                      className="inline-flex items-center gap-1 self-start font-medium text-foreground no-underline hover:no-underline"
                    >
                      View all services
                      <ArrowRight aria-hidden className="size-4" />
                    </NavigationMenuLink>
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
        <div className="flex items-center justify-self-end gap-3">
          <LinkButton href="/contact" size="sm" className="h-10 rounded-full px-5">
            Book a free call
          </LinkButton>
          <MobileNavigation />
        </div>
      </div>
    </header>;
};
