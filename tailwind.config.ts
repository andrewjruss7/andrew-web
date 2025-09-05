import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        ink: "#0e1116",
        muted: "#68707d",
        line: "#eceff3",
        brand: "#111827",
        "brand-ink": "#ffffff",
        accent: "#111827",
        "accent-ink": "#fff",
        soft: "#f6f8fb",
      },
      borderRadius: {
        "custom": "16px",
        "custom-lg": "22px",
      },
      boxShadow: {
        "custom": "0 8px 28px rgba(0,0,0,.08)",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", "Arial", "Apple Color Emoji", "Segoe UI Emoji"],
      },
    },
  },
  plugins: [],
};
export default config;

