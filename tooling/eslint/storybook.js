/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:storybook/recommended", "plugin:mdx/recommended"],
  parserOptions: { project: true },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["node_modules/", "dist/", "storybook-static/"],
  rules: {
    "import/no-default-export": "off",
  },
};
