import { NodeHtmlMarkdown } from "node-html-markdown";
import { site } from "@/lib/site";

const converter = new NodeHtmlMarkdown({
  ignore: ["script", "style", "svg", "template", "noscript"],
  maxConsecutiveNewlines: 2,
});

const entities: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#x27;": "'",
  "&#39;": "'",
  "&apos;": "'",
};

function decodeEntities(text: string) {
  return text.replace(/&(?:amp|lt|gt|quot|apos|#x27|#39);/g, (m) => entities[m]);
}

function metaContent(html: string, name: string) {
  const tag = html.match(
    new RegExp(`<meta[^>]*name="${name}"[^>]*>`, "i"),
  )?.[0];
  const content = tag?.match(/content="([^"]*)"/i)?.[1];
  return content ? decodeEntities(content) : undefined;
}

export function isNotFoundPage(html: string) {
  return /<meta[^>]*name="robots"[^>]*content="noindex/i.test(html);
}

export function pageToMarkdown(html: string, pageUrl: URL) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  const description = metaContent(html, "description");
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? html;

  const cleaned = main
    .replace(/<input[^>]*readonly[^>]*>/gi, (input) => {
      const value = input.match(/value="([^"]*)"/i)?.[1];
      return value ? `<p>${value}</p>` : "";
    })
    .replace(/<span[^>]*aria-hidden="true"[^>]*>[^<]*<\/span>/gi, " ")
    .replace(/<span[^>]*role="status"[^>]*>[\s\S]*?<\/span>/gi, "")
    .replace(/<span[^>]*class="[^"]*sr-only[^"]*"[^>]*>[\s\S]*?<\/span>/gi, "");

  const body = converter
    .translate(cleaned)
    .replace(/\]\((\/(?!\/)[^)]*)\)/g, (_, path) => `](${pageUrl.origin}${path})`)
    .replace(/(\]\([^)]*\))(\[)/g, "$1\n$2")
    .replace(/!\[\]\([^)]*\)\n*/g, "");

  return {
    title: title ? decodeEntities(title) : undefined,
    description,
    body: body.trim(),
  };
}

export function htmlToMarkdown(html: string, pageUrl: URL) {
  const { title, description, body } = pageToMarkdown(html, pageUrl);

  const frontMatter = [
    "---",
    title ? `title: ${JSON.stringify(title)}` : undefined,
    description ? `description: ${JSON.stringify(description)}` : undefined,
    `url: ${pageUrl.toString()}`,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return `${frontMatter}\n\n${body}\n`;
}

export function trustedOrigin(requestUrl: URL) {
  const trustedHosts = new Set(
    [
      "localhost",
      "127.0.0.1",
      new URL(site.url).hostname,
      process.env.VERCEL_URL,
      process.env.VERCEL_BRANCH_URL,
    ].filter(Boolean),
  );

  return trustedHosts.has(requestUrl.hostname)
    ? requestUrl.origin
    : new URL(site.url).origin;
}

export async function fetchPageHtml(pageUrl: URL) {
  const response = await fetch(pageUrl, {
    headers: { Accept: "text/html", "x-markdown-source": "1" },
  });
  const html = await response.text();

  return response.ok && !isNotFoundPage(html) ? html : undefined;
}
