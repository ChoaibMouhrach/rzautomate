import type { Post } from "@/lib/blog";
import { FeaturedPost } from "@/components/pages/blog/featured-post";
import { PostCard } from "@/components/site/post-card";

export const PostList = ({ posts }: { posts: readonly Post[] }) => {
  const [featured, ...rest] = posts;

  if (!featured) {
    return (
      <div className="rounded-3xl bg-muted p-12 text-center text-muted-foreground">
        No posts yet. Check back soon.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      <FeaturedPost post={featured} />
      {rest.length > 0 && (
        <ul className="grid gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.id} className="flex">
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
