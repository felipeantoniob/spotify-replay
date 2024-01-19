import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
