import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC93E",
        secondary: "#111D5E",
        // Blue1: "#8F67FF",

        // Red4: "#FFBC55",
        // Red5: "#FE4D00",

        // Green8: "#CAFA02",
        // Green9: "#EDF6C3",
      },
    },
  },
  plugins: [],
};
export default config;
