import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // kalau masih ada folder app
  ],
  theme: {
    extend: {
          boxShadow: {
                 soft: "0 4px 20px rgba(0,0,0,0.2)",
  }
    },
  },
  plugins: [],
};

export default config;
