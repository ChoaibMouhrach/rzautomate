import type { NextRequest } from "next/server";
import { htmlToMarkdown, isNotFoundPage } from "@/lib/markdown";
import { site } from "@/lib/site";

const markdownHeaders = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept, User-Agent",
};

function trustedOrigin(request: NextRequest) {
  const trustedHosts = new Set(
    [
      "localhost",
      "127.0.0.1",
      new URL(site.url).hostname,
      process.env.VERCEL_URL,
      process.env.VERCEL_BRANCH_URL,
    ].filter(Boolean),
  );

  const { hostname, origin } = request.nextUrl;
  return trustedHosts.has(hostname) ? origin : new URL(site.url).origin;
}

export async function GET(
  request: NextRequest,
  context: RouteContext<"/md/[[...path]]">,
) {
  const { path = [] } = await context.params;

  const pageUrl = new URL(trustedOrigin(request));
  pageUrl.pathname = `/${path.map(encodeURIComponent).join("/")}`;

  const response = await fetch(pageUrl, {
    headers: { Accept: "text/html", "x-markdown-source": "1" },
  });
  const html = await response.text();

  if (!response.ok || isNotFoundPage(html)) {
    return new Response(`# Not found\n\nNo page exists at ${pageUrl.pathname}.\n`, {
      status: 404,
      headers: markdownHeaders,
    });
  }

  return new Response(htmlToMarkdown(html, pageUrl), {
    headers: {
      ...markdownHeaders,
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
