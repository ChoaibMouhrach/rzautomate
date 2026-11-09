import type { Graph, Thing, WithContext } from "schema-dts";

export const JsonLd = ({
  data,
}: {
  data: Graph | WithContext<Thing> | readonly WithContext<Thing>[];
}) => <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />;
