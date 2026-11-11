import { Card, CardDescription, CardEyebrow, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";
import { postPath, type Post } from "@/lib/blog";
import type { Service } from "@/lib/services";

export const PostRelated = ({
  service,
  posts,
}: {
  service?: Service;
  posts: readonly Post[];
}) => {
  if (!service && posts.length === 0) return null;

  return (
    <aside aria-label="Related" className="mt-12 grid gap-4 sm:grid-cols-2">
      {service && (
        <Card interactive className="group relative">
          <CardEyebrow>Related service</CardEyebrow>
          <CardTitle>
            <Link
              href={`/services/${service.slug}`}
              className="no-underline hover:no-underline after:absolute after:inset-0"
            >
              {service.title}
            </Link>
          </CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </Card>
      )}
      {posts.map((post) => (
        <Card key={post.id} interactive className="group relative">
          <CardEyebrow>Keep reading</CardEyebrow>
          <CardTitle>
            <Link
              href={postPath(post)}
              className="no-underline hover:no-underline after:absolute after:inset-0"
            >
              {post.data.title}
            </Link>
          </CardTitle>
          <CardDescription>{post.data.excerpt}</CardDescription>
        </Card>
      ))}
    </aside>
  );
};
