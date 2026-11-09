import {
  Section,
  SectionContent,
  SectionHeader,
  SectionTitle,
} from "@/components/site/section";
import { PostCard } from "@/components/site/post-card";
import type { Post } from "@/lib/blog";

export const ServicePosts = ({ posts }: { posts: readonly Post[] }) => {
  if (posts.length === 0) return null;

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>From the blog</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id} className="flex">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </SectionContent>
    </Section>
  );
};
