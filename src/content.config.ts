import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One project = one folder in src/content/projects/<slug>/ containing
 * index.mdx (or index.md) plus any images it uses.
 * The folder name becomes the URL: /projects/<slug>/
 */
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.{md,mdx}',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** One or two sentences. Shown on the projects page and under the title. */
      summary: z.string(),
      /** 'template' marks a placeholder entry and adds a notice to the page. */
      status: z.enum(['template', 'in-progress', 'complete', 'archived']).default('complete'),
      /** When the project was finished or last substantially worked on. */
      date: z.coerce.date(),
      /** Broad areas, e.g. "Agentic AI", "RAG", "LLM evaluation". */
      topics: z.array(z.string()).default([]),
      /** Tools, frameworks and languages. */
      stack: z.array(z.string()).default([]),
      /** Your part in the work, e.g. "Solo project". Optional. */
      role: z.string().optional(),
      /** Links. Leave any of these out and the button disappears. */
      repo: z.url().optional(),
      demo: z.url().optional(),
      docs: z.url().optional(),
      /** Cover image, relative to the project folder, e.g. ./cover.png */
      cover: image().optional(),
      coverAlt: z.string().default(''),
      /** Featured projects are listed first and shown on the resume page. */
      featured: z.boolean().default(false),
      /** Drafts are visible in `npm run dev` but left out of the built site. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
