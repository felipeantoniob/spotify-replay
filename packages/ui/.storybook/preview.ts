import type { Preview } from "@storybook/react";

import "../tailwind.css";

const preview: Preview = {
  parameters: {
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
          value: "#6F43C0",
        },
      ],
    },
  },

  tags: ["autodocs"],
};

export default preview;
