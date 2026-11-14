import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const ModelBreadcrumbs = ({ name, provider }: { name: string; provider: string }) => (
  <div className="page-container pb-24">
    <Breadcrumbs
      items={[
        { label: "Home", href: "/" },
        { label: "AI Models", href: "/models" },
        { label: provider, href: `/models?provider=${encodeURIComponent(provider)}#models` },
        { label: name },
      ]}
    />
  </div>
);
