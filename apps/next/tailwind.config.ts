import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import baseConfig from "@spotify-replay/tailwind-config";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content, "../../packages/ui/**/*.{ts,tsx}"],
  presets: [baseConfig],
  theme: {
    extend: {},
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
} satisfies Config;
