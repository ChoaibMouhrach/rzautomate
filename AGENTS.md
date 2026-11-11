## Code comments

Do not add comments unless they are required: for example a TODO, a warning about placeholder content, or a non-obvious reason that the code cannot express itself. Do not add comments that describe what the code does.

## Component placement

A component used by only one page lives in `src/components/pages/<route>/` and is imported with that path. A component used by more than one page lives in `src/components`: design-system primitives in `ui/`, site-specific shared components in `site/`. When a colocated component is needed by a second page, move it to `src/components` as part of the same change, and update the imports.

## Page files

A file in `src/pages` contains only the structure of the page: SEO props, loading data (`getStaticPaths` and props), and composing components and layout wrappers. It must not contain body content: no copy, no data arrays, no list rendering, and no multi-element markup. Put that content in components in `src/components/pages/<route>/`, or in a `content.ts` file there for plain data. This keeps each page readable as an outline of its sections, and keeps content and markup edits away from routing, SEO and data loading.

## Stack

The site is Astro with React islands, deployed to Cloudflare through `@astrojs/cloudflare`. Components render to static HTML by default; add a `client:*` directive in the `.astro` page only for the outermost interactive component, because nested React components do not hydrate on their own. `src/worker.ts` negotiates Markdown for AI agents and sets security headers, and `src/integrations/markdown-pages.ts` generates the `.md` files and `llms-full.txt` at build time.

## Functions

Use arrow functions wherever possible, including React components (`export const Button = ({ ... }: Props) => { ... }`), helpers and callbacks. Use a `function` declaration only when an arrow function cannot work, for example a generator, or code that needs hoisting or its own `this`.

## Canonical URLs

Every indexable page must emit a self-referencing `<link rel="canonical">` for its own clean URL, without query parameters. `src/layouts/BaseHead.astro` derives the canonical from the page URL and omits it for `noindex` pages. Never set a canonical on a `noindex` page, and never point it at another page unless that page is a true duplicate. When adding a page or changing its URL, check that its rendered canonical is correct.

## Git

Never commit, push or otherwise change git history unless the user explicitly asks for it in that message. Finishing a task, or being asked to "publish" or "put live", is not a request to commit. Leave changes in the working tree and say so.

## CTA copy

In any call to action that says "free" or "no commitment" (for example "free, no-commitment discovery call"), that wording must be set in the primary colour (`text-primary`), so it stands out from the surrounding text. Inside buttons, apply this only to non-primary buttons (secondary, ghost): a primary button already has the primary colour as its background, so leave its text plain.

## Borders

Do not put a border on every card, panel or container. A border is the exception, not the default: use it only where it does a job, such as separating a form field, a table or an input from its surroundings. For cards and grouped content, create separation with spacing, a subtle background tint (`bg-muted`), or typography instead. When designing a new card, section or component, start without a border and add one only if the layout is unclear without it.
