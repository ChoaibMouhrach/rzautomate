import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const aiAgentPattern =
  /GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai|PerplexityBot|Perplexity-User|CCBot|Amazonbot|Bytespider|cohere-ai|Meta-ExternalAgent|MistralAI-User|DuckAssistBot|YouBot|Applebot-Extended/i;

function quality(accept: string, type: string) {
  const entry = accept
    .split(",")
    .map((part) => part.trim().split(";"))
    .find(([mediaType]) => mediaType.trim().toLowerCase() === type);
  if (!entry) return 0;
  const q = entry.slice(1).find((param) => param.trim().startsWith("q="));
  return q ? Number(q.trim().slice(2)) : 1;
}

function wantsMarkdown(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  if (quality(accept, "text/markdown") > quality(accept, "text/html")) {
    return true;
  }
  return aiAgentPattern.test(request.headers.get("user-agent") ?? "");
}

function markdownPath(pathname: string) {
  return pathname === "/" ? "/md" : `/md${pathname}`;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.headers.has("x-markdown-source")) {
    return NextResponse.next();
  }

  const varyHeaders = { Vary: "Accept, User-Agent" };

  if (pathname.endsWith(".md")) {
    const page = pathname.slice(0, -3);
    const target = page === "/index" || page === "" ? "/" : page;
    return NextResponse.rewrite(new URL(markdownPath(target), request.url), {
      headers: varyHeaders,
    });
  }

  if (wantsMarkdown(request)) {
    return NextResponse.rewrite(new URL(markdownPath(pathname), request.url), {
      headers: varyHeaders,
    });
  }

  const response = NextResponse.next();
  response.headers.set(
    "Link",
    `<${pathname === "/" ? "/index.md" : `${pathname}.md`}>; rel="alternate"; type="text/markdown"`,
  );
  return response;
}

export const config = {
  matcher: ["/((?!_next/|api/|md(?:/|$)|.*\\.(?!md$)[^/]*$).*)"],
};
