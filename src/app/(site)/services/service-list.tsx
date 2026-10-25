import { services } from "@/lib/site";

export function ServiceList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <li key={service.title} className="rounded-ui border border-border p-8">
          <h2 className="text-xl font-semibold tracking-tight">
            {service.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{service.description}</p>
        </li>
      ))}
    </ul>
  );
}
