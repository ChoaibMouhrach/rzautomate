import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { authors, type AuthorId } from "@/lib/authors";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    excerpt: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readingMinutes: z.number().int().positive(),
    author: z.enum(Object.keys(authors) as [AuthorId, ...AuthorId[]]),
    image: z.string().startsWith("/"),
    imageAlt: z.string(),
    service: z.string().optional(),
    related: z.array(z.string()).default([]),
    faq: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
  }),
});

export const collections = { blog };
