import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

export default [
  { ignores: ["dist/", ".astro/", ".wrangler/"] },
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  reactHooks.configs.flat.recommended,
];
