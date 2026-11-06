import { handle } from "@astrojs/cloudflare/handler";

const aiAgentPattern =
  /GPTBot|ChatGPT-User|OAI-SearchBot|ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai|PerplexityBot|Perplexity-User|CCBot|Amazonbot|Bytespider|cohere-ai|Meta-ExternalAgent|MistralAI-User|DuckAssistBot|YouBot|Applebot-Extended/i;

const securityHeaders = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

const onDemandRoutes = /^\/(book|api\/.*)$/;

function quality(accept: string, type: string) {
  const entry = accept
    .split(",")
    .map((part) => part.trim().split(";"))
    .find(([mediaType]) => mediaType.trim().toLowerCase() === type);
  if (!entry) return 0;
  const q = entry.slice(1).find((param) => param.trim().startsWith("q="));
  return q ? Number(q.trim().slice(2)) : 1;
}

function wantsMarkdown(request: Request) {
  const accept = request.headers.get("accept") ?? "";
  if (quality(accept, "text/markdown") > quality(accept, "text/html")) {
    return true;
  }
  return aiAgentPattern.test(request.headers.get("user-agent") ?? "");
}

function withHeaders(response: Response, headers: Record<string, string>) {
  const next = new Response(response.body, response);
  for (const [key, value] of Object.entries(headers)) {
    next.headers.set(key, value);
  }
  return next;
}

function markdownPath(pathname: string) {
  return pathname === "/" ? "/index.md" : `${pathname}.md`;
}

function isPage(pathname: string) {
  return !/\.[^/]+$/.test(pathname) || pathname.endsWith(".md");
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    if (onDemandRoutes.test(pathname)) {
      return withHeaders(await handle(request, env, ctx), securityHeaders);
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      return env.ASSETS.fetch(request);
    }

    if (isPage(pathname) && !pathname.endsWith(".md") && wantsMarkdown(request)) {
      const markdown = await env.ASSETS.fetch(
        new Request(new URL(markdownPath(pathname), url), request),
      );
      if (markdown.ok) {
        return withHeaders(markdown, {
          ...securityHeaders,
          "Content-Type": "text/markdown; charset=utf-8",
          Vary: "Accept, User-Agent",
        });
      }
    }

    const response = await env.ASSETS.fetch(request);
    const headers: Record<string, string> = { ...securityHeaders };
    if (isPage(pathname) && !pathname.endsWith(".md") && response.ok) {
      headers.Link = `<${markdownPath(pathname)}>; rel="alternate"; type="text/markdown"`;
      headers.Vary = "Accept, User-Agent";
    }
    if (pathname.endsWith(".md")) {
      headers["Content-Type"] = "text/markdown; charset=utf-8";
    }
    return withHeaders(response, headers);
  },
} satisfies ExportedHandler<Env>;
