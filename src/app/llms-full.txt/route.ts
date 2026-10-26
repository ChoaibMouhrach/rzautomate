import { connection, type NextRequest } from "next/server";
import { company, site } from "@/lib/site";
import { pagePaths } from "@/lib/pages";
import { fetchPageHtml, pageToMarkdown, trustedOrigin } from "@/lib/markdown";

export async function GET(request: NextRequest) {
  await connection();

  const origin = trustedOrigin(request.nextUrl);

  const pages = await Promise.all(
    pagePaths().map(async (path) => {
      const pageUrl = new URL(path, origin);
      const html = await fetchPageHtml(pageUrl);
      return html
        ? `Source: ${pageUrl.toString()}\n\n${pageToMarkdown(html, pageUrl).body}`
        : undefined;
    }),
  );

  const content = [
    `# ${site.name}\n\n> ${company.description}`,
    ...pages.filter(Boolean),
  ].join("\n\n---\n\n");

  return new Response(`${content}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
