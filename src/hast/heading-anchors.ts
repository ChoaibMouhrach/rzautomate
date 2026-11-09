import { defineHastPlugin } from "satteri";

const anchorClass = [
  "heading-anchor",
  "absolute",
  "-left-10",
  "top-0",
  "flex",
  "h-full",
  "w-10",
  "items-center",
  "justify-end",
  "pr-3",
  "text-muted-foreground",
  "no-underline",
  "opacity-0",
  "transition-opacity",
  "group-hover:opacity-100",
  "focus-visible:opacity-100",
  "hover:text-foreground",
  "[@media(hover:none)]:opacity-100",
];

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .trim()
    .replace(/\s+/g, "-");

export const headingAnchors = () => {
  const seen = new Map<string, number>();
  return defineHastPlugin({
    name: "heading-anchors",
    element: {
      filter: ["h2", "h3", "h4"],
      visit: (node, ctx) => {
        const base = toSlug(ctx.textContent(node));
        const count = seen.get(base) ?? 0;
        seen.set(base, count + 1);
        const id = count === 0 ? base : `${base}-${count}`;

        ctx.setProperty(node, "id", id);
        ctx.setProperty(node, "className", ["group", "relative", "scroll-mt-24"]);
        ctx.prependChild(node, {
          type: "element",
          tagName: "a",
          properties: {
            href: `#${id}`,
            ariaLabel: "Link to this section",
            className: anchorClass,
          },
          children: [{ type: "text", value: "#" }],
        });
      },
    },
  });
};
