import { getPosts } from "@/lib/blog";
import { buildLlmsTxt } from "@/lib/llms";

export const GET = async () => new Response(buildLlmsTxt(await getPosts()), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
