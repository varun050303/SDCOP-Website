/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "navy-blue": "#0C2645",
        "dark-blue": "#2E5077",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"], // Font Family for Oswald
        nunito: ["Nunito", "sans-serif"], // Font Family for Nunito
      },
    },
  },
  plugins: [scrollbarHide],
};
