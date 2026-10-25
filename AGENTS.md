<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Code comments

Do not add comments unless they are required: for example a TODO, a warning about placeholder content, or a non-obvious reason that the code cannot express itself. Do not add comments that describe what the code does.

## Component placement

A component used by only one page lives next to that page's `page.tsx` and is imported with a relative path. A component used by more than one page lives in `src/components`: design-system primitives in `ui/`, site-specific shared components in `site/`. When a colocated component is needed by a second page, move it to `src/components` as part of the same change, and update the imports.

## Page files

A `page.tsx` contains only the structure of the page: metadata, loading data from `params` (including `notFound()`), and composing components and layout wrappers. It must not contain body content: no copy, no data arrays, no list rendering, and no multi-element markup. Put that content in components next to the page, or in a `content.ts` file next to the page for plain data. This keeps each page readable as an outline of its sections, and keeps content and markup edits away from routing, metadata and data loading.
