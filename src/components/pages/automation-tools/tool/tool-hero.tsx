import { LinkButton } from "@/components/ui/link";
import { ToolLogo } from "../tool-logo";
import type { ToolPage } from "@/lib/tool-pages/types";

export const ToolHero = ({ page }: { page: ToolPage }) => (
  <header className="page-container pb-10 pt-12 md:pb-14 md:pt-20">
    <div className="animate-fade-slide-in">
      <ToolLogo tool={page} className="size-14" />
      <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">{page.hero.h1}</h1>
      {page.hero.notice && <p className="mt-6 inline-block max-w-2xl rounded-2xl bg-primary/10 px-5 py-3 text-sm font-medium text-primary">{page.hero.notice}</p>}
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{page.hero.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={page.hero.primary.href} size="lg">{page.hero.primary.label}</LinkButton>
        <LinkButton href={page.hero.secondary.href} size="lg" variant="ghost">{page.hero.secondary.label}</LinkButton>
      </div>
      <dl className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {page.hero.tiles.map((tile) => (
          <div key={tile.label} className="rounded-3xl bg-muted p-6">
            <dt className="text-sm font-medium text-muted-foreground">{tile.label}</dt>
            <dd className="mt-3 text-2xl font-semibold tracking-tight">{tile.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </header>
);
