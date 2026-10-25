import { Link } from "@/components/ui/link";
import { site } from "@/lib/site";

export function ContactAside() {
  return (
    <aside className="text-sm">
      <h2 className="font-medium">Prefer email?</h2>
      <p className="mt-2 text-muted-foreground">
        <Link href={`mailto:${site.email}`}>{site.email}</Link>
      </p>
    </aside>
  );
}
