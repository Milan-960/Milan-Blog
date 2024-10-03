import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography"; // Proper ES6 import for the plugin

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [typography], // Use the imported typography plugin
};

export default config;
