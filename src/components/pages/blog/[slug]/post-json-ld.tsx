import { JsonLd } from "@/components/site/json-ld";
import { getPostFaq, postPath, type Post } from "@/lib/blog";
import { blogPostingJsonLd, breadcrumbJsonLd, postFaqJsonLd } from "@/lib/json-ld";

export const PostJsonLd = ({ post }: { post: Post }) => {
  const faq = getPostFaq(post);

  return (
    <JsonLd
      data={[
        blogPostingJsonLd(post),
        ...(faq.length > 0 ? [postFaqJsonLd(post, faq)] : []),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.data.title, path: postPath(post) },
        ]),
      ]}
    />
  );
};
