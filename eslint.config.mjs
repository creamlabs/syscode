// eslint.config.mjs
import eslintPluginPrettier from "eslint-plugin-prettier";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    ignores: ["node_modules", ".next", "dist"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      prettier: eslintPluginPrettier,
      "@next/next": nextPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "off",
      "@typescript-eslint/no-explicit-any": "off",
      // Add Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "error",
    },
    settings: {
      next: {
        rootDir: ".",
      },
      react: {
        version: "detect",
      },
    },
  },
];
