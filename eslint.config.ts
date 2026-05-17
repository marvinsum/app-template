import eslintReact from "@eslint-react/eslint-plugin";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        files: ["**/*.ts", "**/*.tsx"],
        extends: [eslintConfigPrettier, eslintReact.configs["recommended-typescript"], tseslint.configs.recommended],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        plugins: {
            "@stylistic": stylistic,
            prettier,
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "@stylistic/eol-last": ["error", "always"],
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
            "prettier/prettier": "error",
            "simple-import-sort/exports": "error",
            "simple-import-sort/imports": "error",
        },
    },
]);
