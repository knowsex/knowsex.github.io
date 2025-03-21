// 从 `astro:content` 导入辅助工具
import { z, defineCollection } from "astro:content";
// 为每一个集合定义一个 `type` 和 `schema`
const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.array(z.string()),
    translator: z.array(z.string()).optional(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string()
    // }),
    tags: z.array(z.string()),
  }),
});

const mainCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    enTitle: z.string(),
    desc: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    bgPath: z.string().optional(),
    author: z.array(z.string()).optional(),
    review: z.array(z.string()).optional(),
    ifIndex: z.boolean().optional(),
    isRoot: z.boolean().optional(),
  }),
});

const generalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    enTitle: z.string().optional(),
    desc: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    bgPath: z.string().optional(),
    author: z.array(z.string()).optional(),
    review: z.array(z.string()).optional(),
    removeCover: z.boolean().optional(),
  }),
});

// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
  article: articleCollection,
  main: mainCollection,
  general: generalCollection,
};
