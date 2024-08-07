import { z } from "astro:content";

export const blogSchema = z
  .object({
    author: z.string().optional(),
    // pubDatetime: z.string(),
    pubDatetime: z.date().transform(val => val.toLocaleString()),
    title: z.string(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: z.string().optional(),
    description: z.string(),
  })
  .strict();

export type BlogFrontmatter = z.infer<typeof blogSchema>;

export const albumSchema = z
  .object({
    author: z.string().optional(),
    // pubDatetime: z.string(),
    pubDatetime: z.date().transform(val => val.toLocaleString()),
    title: z.string(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    photos: z.array(z.string()),
    description: z.string(),
  })
  .strict();

export type AblumFrontmatter = z.infer<typeof albumSchema>;
