import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

export function GET(request: NextRequest) {
  const source = request.nextUrl.searchParams;
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
  ].filter(([, value]) => value).map(([label, value]) => `${label}: ${value}`).join("\n");
  if (notes) target.searchParams.set("notes", notes);
  const response = NextResponse.redirect(target);
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("X-Robots-Tag", "noindex");
  return response;
}
