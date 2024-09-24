import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import globals from "globals";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import stylistic from "@stylistic/eslint-plugin";
import { config, configs, plugin } from "typescript-eslint";

const compat = new FlatCompat();
export default config(
  eslint.configs.recommended,
  ...configs.recommended,
  {
    ignores: ["node_modules", ".cache", "build", "public/build", ".env"],
  },
  {
    ...eslint.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es6,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "jsx-a11y": jsxA11yPlugin,
      "react-hooks": reactHooksPlugin,
    },
    ...reactRecommended,
    ...reactJSXRuntime,
    extends: [
      ...compat.config(reactHooksPlugin.configs.recommended),
      ...compat.config(jsxA11yPlugin.configs.recommended),
    ],
    languageOptions: {
      ...reactRecommended.languageOptions,
      ...reactJSXRuntime.languageOptions,
    },
    rules: {
      ...reactRecommended.rules,
      ...reactJSXRuntime.rules,
      "newline-before-return": "error",
      "no-console": "error",
      "no-duplicate-imports": "error",
      "no-implicit-coercion": "error",
      "sort-imports": [
        "error",
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
        },
      ],
      "sort-keys": "error",
    },
    settings: {
      formComponents: ["Form"],
      linkComponents: [
        { linkAttribute: "to", name: "Link" },
        { linkAttribute: "to", name: "NavLink" },
      ],
      react: {
        version: "detect",
      },
    },
  },
  {
    extends: [...configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: ["tsconfig.json"],
      },
    },
    plugins: {
      ["@typescript-eslint"]: plugin,
    },
    rules: {
      ...configs.recommended.rules,
      "@typescript-eslint/explicit-function-return-type": ["error"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/require-array-sort-compare": [
        "error",
        {
          ignoreStringArrays: true,
        },
      ],
      "@typescript-eslint/restrict-plus-operands": [
        "error",
        {
          allowAny: false,
          allowBoolean: false,
          allowNullish: false,
          allowNumberAndString: false,
          allowRegExp: false,
        },
      ],
      "@typescript-eslint/strict-boolean-expressions": "error",
      "prefer-template": "error",
    },
    settings: {
      "import/internal-regex": "^~/",
      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    extends: [stylistic.configs["recommended-flat"]],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/arrow-spacing": ["error", { after: true, before: true }],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-newline": [
        "error",
        {
          prevent: true,
        },
      ],
      "@stylistic/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          shorthandFirst: true,
        },
      ],
      "@stylistic/keyword-spacing": ["error", { before: true }],
      "@stylistic/no-multiple-empty-lines": [
        "error",
        {
          max: 1,
        },
      ],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "spaced-comment": ["error", "always"],
    },
  },
  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
