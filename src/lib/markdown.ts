import { NodeHtmlMarkdown } from "node-html-markdown";

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

export function htmlToMarkdown(html: string, pageUrl: URL) {
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

  const frontMatter = [
    "---",
    title ? `title: ${JSON.stringify(decodeEntities(title))}` : undefined,
    description ? `description: ${JSON.stringify(description)}` : undefined,
    `url: ${pageUrl.toString()}`,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  return `${frontMatter}\n\n${body.trim()}\n`;
}
