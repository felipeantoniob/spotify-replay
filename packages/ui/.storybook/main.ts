import { dirname, join, resolve } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.ts",
    "../src/components/**/*.stories.tsx",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  core: {},

  async viteFinal(config) {
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "storybook",
            replacement: resolve(__dirname, "../../../packages/storybook"),
          },
        ],
      },
    };
  },

  docs: {
    autodocs: true,
  },
};

export default config;
