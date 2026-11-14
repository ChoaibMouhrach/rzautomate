import { Check, X } from "lucide-react";
import { LineParts } from "./line-parts";
import { fitLineFor } from "./service-links";
import { DirectorySection } from "@/components/site/directory";
import type { ToolPage } from "@/lib/tool-pages/types";

export const FitSection = ({ page }: { page: ToolPage }) => {
  const { fit } = page;
  const fitLine = fitLineFor(page.slug, page.name);
  return (
    <DirectorySection title={fit.heading}>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-3xl bg-muted p-8">
          <h3 className="font-semibold">{fit.goodTitle}</h3>
          <ul className="mt-5 space-y-4">{fit.good.map((item) => <li key={item} className="flex gap-3"><Check aria-hidden className="mt-1 size-5 shrink-0 text-primary" />{item}</li>)}</ul>
        </div>
        <div className="rounded-3xl bg-muted p-8">
          <h3 className="font-semibold">{fit.notTitle}</h3>
          <ul className="mt-5 space-y-4">{fit.not.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><X aria-hidden className="mt-1 size-5 shrink-0" />{item}</li>)}</ul>
        </div>
      </div>
      <p className="max-w-3xl text-lg"><span className="font-semibold">Our take. </span><span className="text-muted-foreground">{fit.ourTake}</span></p>
      {fitLine && <p className="max-w-3xl text-lg text-muted-foreground"><LineParts parts={fitLine} /></p>}
    </DirectorySection>
  );
};
