import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        "landing-bg-image": "var(--landing-bg-image)",
      }),
      colors: {
        dark: "var(--dark)",
        light: "var(--light)",

        "gray-4": "var(--gray-4)",
        "gray-3": "var(--gray-3)",
        "gray-2": "var(--gray-2)",
        "gray-1": "var(--gray-1)",

        "svg-line": "var(--svg-line)",
      },
    },
  },
  plugins: [],
};
export default config;
