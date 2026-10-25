import { slugify, type Post } from "@/lib/blog";
import { PostHeading } from "./post-heading";

export function PostBody({ post }: { post: Post }) {
  return (
    <div className="prose prose-lg max-w-none">
      {post.body.map((block, index) => {
        const Heading = `h${block.level ?? 2}` as const;
        return (
          <section key={index}>
            {block.heading && (
              <PostHeading as={Heading} id={slugify(block.heading)}>
                {block.heading}
              </PostHeading>
            )}
            <p>{block.text}</p>
          </section>
        );
      })}
    </div>
  );
}
