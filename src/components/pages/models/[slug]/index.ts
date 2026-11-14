import { anthropicPages } from "./pages/anthropic";
import { googleXaiPages } from "./pages/google-xai";
import { openWeightsPages } from "./pages/open-weights";
import { openaiPages } from "./pages/openai";

export const modelPages = [...anthropicPages, ...openaiPages, ...googleXaiPages, ...openWeightsPages];

export const getModelPage = (slug: string) => modelPages.find((page) => page.slug === slug);
