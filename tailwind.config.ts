import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  important: true, // Ensure Tailwind styles have priority over external styles
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBg: "#000000", // Dark mode background color
        darkFg: "#ffffff", // Dark mode foreground color
      },
    },
  },
  darkMode: "class", // Enable dark mode using a class
  plugins: [typography],
};

export default config;
