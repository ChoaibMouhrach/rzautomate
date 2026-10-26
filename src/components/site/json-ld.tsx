import type { Graph, Thing, WithContext } from "schema-dts";

export function JsonLd({
  data,
}: {
  data: Graph | WithContext<Thing> | readonly WithContext<Thing>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
