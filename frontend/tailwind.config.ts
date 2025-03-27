import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        "primary-red": "#c82f31",
        "primary-blue": "#b1edf8",
        "secondary-blue": "#3300CC",
      },
    },
  },
  plugins: [],
} satisfies Config;
