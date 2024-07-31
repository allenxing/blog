import { defineCollection } from "astro:content";
import { blogSchema, albumSchema } from "./_schemas";

const blog = defineCollection({
  schema: blogSchema,
});
const album = defineCollection({
  schema: albumSchema,
});

export const collections = { blog, album };
