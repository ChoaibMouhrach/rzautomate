import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export interface PostFaq {
  question: string;
  answer: string;
}

export const faqHeading = "FAQ";

export const getPosts = async () => {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
};

export const postPath = (post: Post) => `/blog/${post.id}`;

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

export const lastModified = (post: Post) =>
  isoDate(post.data.updated ?? post.data.date);

export const formatPostDate = (date: Date) =>
  date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export const plainText = (markdown: string) =>
  markdown.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export const getPostFaq = (post: Post): PostFaq[] =>
  post.data.faq.map((item) => ({
    question: item.question,
    answer: plainText(item.answer),
  }));

export const getPostsForService = async (slug: string) =>
  (await getPosts()).filter((post) => post.data.service === slug);

export const getRelatedPosts = async (post: Post) => {
  const posts = await getPosts();
  return post.data.related.flatMap((id) => {
    const match = posts.find((candidate) => candidate.id === id);
    return match ? [match] : [];
  });
};
