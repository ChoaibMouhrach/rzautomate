import { LinkButton } from "@/components/ui/link";
import { LogoChip } from "../section";
import { ToolLogo } from "../tool-logo";
import type { ToolPage } from "@/lib/tool-pages/types";

const tones = ["bg-primary text-primary-foreground", "bg-muted", "bg-tint", "bg-ink text-paper"];
const mutedTones = ["text-primary-foreground/85", "text-muted-foreground", "text-muted-foreground", "text-paper/70"];

export const ToolHero = ({ page }: { page: ToolPage }) => (
  <header className="page-container pb-10 pt-12 md:pb-14 md:pt-20">
    <div className="animate-fade-slide-in">
      <LogoChip className="size-16 bg-muted"><ToolLogo tool={page} className="size-10" /></LogoChip>
      <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl">{page.hero.h1}</h1>
      {page.hero.notice && <p className="mt-6 inline-block max-w-2xl rounded-2xl bg-primary/10 px-5 py-3 text-sm font-medium text-primary">{page.hero.notice}</p>}
      <p className="mt-6 max-w-3xl text-lg text-muted-foreground">{page.hero.summary}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton href={page.hero.primary.href} size="lg">{page.hero.primary.label}</LinkButton>
        <LinkButton href={page.hero.secondary.href} size="lg" variant="ghost">{page.hero.secondary.label}</LinkButton>
      </div>
      <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {page.hero.tiles.map((tile, index) => (
          <div key={tile.label} className={`flex min-h-44 flex-col justify-between gap-8 rounded-3xl p-6 md:p-8 ${tones[index % tones.length]}`}>
            <dt className={`text-sm font-medium ${mutedTones[index % tones.length]}`}>{tile.label}</dt>
            <dd className="text-2xl font-semibold leading-tight tracking-tighter md:text-3xl">{tile.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </header>
);
