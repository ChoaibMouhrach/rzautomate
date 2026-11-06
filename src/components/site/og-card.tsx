import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { site } from "@/lib/site";

const require = createRequire(import.meta.url);

const fonts = Promise.all(
  [400, 700].map(async (weight) => ({
    name: "Geist",
    weight: weight as 400 | 700,
    style: "normal" as const,
    data: await readFile(
      require.resolve(
        `@fontsource/geist/files/geist-latin-${weight}-normal.woff`,
      ),
    ),
  })),
);

export const ogSize = { width: 1200, height: 630 };

export async function ogCard({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const svg = await satori(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 96,
        background: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "Geist",
      }}
    >
      <div style={{ fontSize: 40, opacity: 0.7 }}>{eyebrow}</div>
      <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.1 }}>
        {title}
      </div>
      <div style={{ fontSize: 36, opacity: 0.7 }}>{site.name}</div>
    </div>,
    { ...ogSize, fonts: await fonts },
  );
  const png = new Resvg(svg, { fitTo: { mode: "width", value: ogSize.width } })
    .render()
    .asPng();
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
}
