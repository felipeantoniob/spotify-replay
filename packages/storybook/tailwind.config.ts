import type { Config } from "tailwindcss";

import baseConfig from "@spotify-replay/tailwind-config";

export default {
  content: [...baseConfig.content, "components/**/*.{ts,tsx}"],
  presets: [baseConfig],
} satisfies Config;
