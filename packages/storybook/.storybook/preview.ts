import type { Preview } from "@storybook/react";

import "../tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "primary",
      values: [
        {
          name: "primary",
          value: "#fff",
        },
      ],
    },
  },
};

export default preview;