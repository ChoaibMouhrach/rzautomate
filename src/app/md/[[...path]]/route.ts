import type { NextRequest } from "next/server";
import { fetchPageHtml, htmlToMarkdown, trustedOrigin } from "@/lib/markdown";

const markdownHeaders = {
  "Content-Type": "text/markdown; charset=utf-8",
  Vary: "Accept, User-Agent",
};

export async function GET(
  request: NextRequest,
  context: RouteContext<"/md/[[...path]]">,
) {
  const { path = [] } = await context.params;

  const pageUrl = new URL(trustedOrigin(request.nextUrl));
  pageUrl.pathname = `/${path.map(encodeURIComponent).join("/")}`;

  const html = await fetchPageHtml(pageUrl);

  if (!html) {
    return new Response(
      `# Not found\n\nNo page exists at ${pageUrl.pathname}.\n`,
      { status: 404, headers: markdownHeaders },
    );
  }

  return new Response(htmlToMarkdown(html, pageUrl), {
    headers: {
      ...markdownHeaders,
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
