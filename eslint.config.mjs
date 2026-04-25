import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import * as mdxPlugin from "eslint-plugin-mdx";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**", "**/*.md"],
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooksPlugin.configs.flat["recommended-latest"],
  jsxA11y.flatConfigs.recommended,
  mdxPlugin.flat,
  prettierRecommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
    extends: [...tseslint.configs.recommended],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["**/*.config.ts", "tests/**/*.ts", "tests/**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
  {
    files: ["**/*.mdx"],
    rules: {
      "no-unused-expressions": "off",
      "react/no-unknown-property": "off",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
);
