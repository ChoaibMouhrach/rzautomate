import type { APIRoute } from "astro";
import { validateEmail } from "@/lib/newsletter";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json().catch(() => null)) as {
    email?: unknown;
  } | null;
  const result = validateEmail(typeof body?.email === "string" ? body.email : "");

  // TODO: add the address to the mailing list provider.
  return Response.json(result, {
    status: result.ok ? 200 : 400,
    headers: { "Cache-Control": "no-store" },
  });
};
