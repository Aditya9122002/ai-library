import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
colors: {
  ink: "#16213E",
  gold: {
    DEFAULT: "#B8923F",
    light: "#E4D3A8",
  },
  teal: {
    DEFAULT: "#1F6F63",
    dark: "#164F46",
  },
  surface: {
    DEFAULT: "#FBF9F5",
    muted: "#F1ECE0",
    dark: "#16213E",
  },
},
    fontFamily: {
  sans: ["var(--font-inter)", "sans-serif"],
  serif: ["var(--font-fraunces)", "serif"],
  mono: ["var(--font-jetbrains-mono)", "monospace"],
},
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;