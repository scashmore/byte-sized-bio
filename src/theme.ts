import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        lavender: {
          50: { value: "#f9f5ff" },
          100: { value: "#f3e8ff" },
          200: { value: "#e9d5ff" },
          300: { value: "#d8b4fe" },
          400: { value: "#c084fc" },
          500: { value: "#a855f7" },
          600: { value: "#9333ea" },
          700: { value: "#7e22ce" },
          800: { value: "#6b21a8" },
          900: { value: "#581c87" },
        },
        gold: {
          500: { value: "#FFD700" },
        },
      },
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'Inter', sans-serif" },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: "{colors.lavender.300}" },
        fg: { value: "#2D1B3C" },
        accent: { value: "{colors.gold.500}" },
      },
    },
  },
  globalCss: {
    "html, body": {
      backgroundColor: "{colors.bg}",
      color: "{colors.fg}",
      fontFamily: "body",
      margin: 0,
      padding: 0,
      minHeight: "100vh",
    },
    "*": {
      boxSizing: "border-box",
    },
    a: {
      color: "{colors.accent}",
      textDecoration: "none",
    },
    "a:hover": {
      textDecoration: "underline",
    },
  },
});

export const system = createSystem(defaultConfig, config);
