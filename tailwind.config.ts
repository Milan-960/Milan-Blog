import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "var(--foreground)",
            h1: {
              color: "var(--foreground)",
              fontWeight: "700",
            },
            h2: {
              color: "var(--foreground)",
              fontWeight: "600",
            },
            p: {
              marginTop: "1.5em",
              marginBottom: "1.5em",
            },
            blockquote: {
              borderLeftColor: "var(--primary)",
              fontStyle: "italic",
            },
            pre: {
              backgroundColor: "#2d2d2d",
              color: "#f8f8f2",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflow: "auto",
            },
            code: {
              backgroundColor: "#2d2d2d",
              color: "#f8f8f2",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
            },
            "code::before": false,
            "code::after": false,
          },
        },
        dark: {
          css: {
            color: "#ffffff",
            pre: {
              backgroundColor: "#2d2d2d",
            },
            code: {
              color: "#f8f8f2",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [typography],
};

export default config;
