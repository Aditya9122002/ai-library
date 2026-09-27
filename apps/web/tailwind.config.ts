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
      boxShadow: {
        card: "0 8px 24px -8px rgba(22, 33, 62, 0.18)",
      },
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#16213E",
            "--tw-prose-headings": "#16213E",
            "--tw-prose-links": "#1F6F63",
            "--tw-prose-bold": "#16213E",
            "--tw-prose-quotes": "#16213E",
            "--tw-prose-quote-borders": "#B8923F",
            "--tw-prose-bullets": "#B8923F",
            "--tw-prose-hr": "rgba(22,33,62,0.1)",
            maxWidth: "68ch",
            a: {
              fontWeight: "500",
              textUnderlineOffset: "3px",
              textDecorationColor: "rgba(31,111,99,0.35)",
            },
            "a:hover": {
              textDecorationColor: "#1F6F63",
            },
            blockquote: {
              fontStyle: "normal",
              borderLeftWidth: "2px",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;