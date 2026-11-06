import type { APIRoute } from "astro";
import { site } from "@/lib/site";

export const prerender = false;

export const GET: APIRoute = ({ url }) => {
  const source = url.searchParams;
  const target = new URL(site.bookingUrl);
  for (const key of ["name", "email", "service"]) {
    const value = source.get(key);
    if (value) target.searchParams.set(key, value);
  }
  const notes = [
    ["Service", source.get("service")],
    ["Company website", source.get("website")],
    ["Monthly new leads", source.get("volume")],
    ["CRM", source.get("crm")],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  if (notes) target.searchParams.set("notes", notes);
  return new Response(null, {
    status: 307,
    headers: {
      Location: target.toString(),
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
};
