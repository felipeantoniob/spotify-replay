import type { Config } from "tailwindcss";

import baseConfig from "@spotify-replay/tailwind-config";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...baseConfig.content,
    "app/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {
    extend: {},
  },
} satisfies Config;