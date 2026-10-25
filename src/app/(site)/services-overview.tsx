import { services } from "@/lib/site";

export function ServicesOverview() {
  return (
    <section className="border-t border-border">
      <div className="page-container pb-24 pt-16">
        <h2 className="text-3xl font-semibold tracking-tight">What we build</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-ui border border-border p-6"
            >
              <h3 className="font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
