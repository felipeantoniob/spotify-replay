import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@spotify-replay/tailwind-config";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [
    ...baseConfig.content,
    "../../packages/storybook/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  presets: [baseConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      colors: {
        primary: "#6F43C0",
        "on-primary": "#FFF",
        "primary-container": "#EBDDFF",
        "on-primary-container": "#250059",
        "tertiary-container": "#FFDF9E",
        "on-tertiary-container": "#261A00",
        "error-container": "#ffdad6",
        background: "#fffbff",
        "on-background": "#1D1B1E",
        surface: "#fffbff",
        "on-surface": "#1d1b1e",
        outline: "#7A757F",
        "spotify-green": "#1ED760",
      },
    },
  },
} satisfies Config;
