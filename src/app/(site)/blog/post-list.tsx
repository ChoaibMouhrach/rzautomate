import { posts } from "@/lib/blog";
import { PostCard } from "./post-card";

export function PostList() {
  if (posts.length === 0) {
    return (
      <div className="rounded-ui border border-dashed border-border p-12 text-center text-muted-foreground">
        No posts yet. Check back soon.
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post.slug} className="flex">
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
