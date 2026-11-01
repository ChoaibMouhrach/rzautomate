import { pageSocial } from "@/lib/metadata";
import { models } from "@/lib/models";
import { ModelsDirectory } from "./models-directory";

export const metadata = {
  ...pageSocial({
    title: "Compare AI Models: API Pricing & Context Windows",
    description:
      `Compare ${models.length} AI models from OpenAI and Anthropic. API prices per 1M tokens, context windows and features. Manually checked; last updated Nov 1, 2026.`,
    path: "/models",
  }),
  alternates: { canonical: "/models" },
};

export default function ModelsPage() {
  return <ModelsDirectory />;
}
