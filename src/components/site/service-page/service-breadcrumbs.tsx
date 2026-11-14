import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const ServiceBreadcrumbs = ({ name, className = "pt-8" }: { name?: string; className?: string }) => (
  <div className={`page-container pb-16 ${className}`}>
    <Breadcrumbs
      items={[
        { label: "Home", href: "/" },
        name ? { label: "Services", href: "/services" } : { label: "Services" },
        ...(name ? [{ label: name }] : []),
      ]}
    />
  </div>
);
