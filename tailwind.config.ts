import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-cols-[\w\d]+/,
    },
  ],
  variants: {
    extend: {
      opacity: ["group-hover"],
    },
  },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "natural-1": "#FEFEFE",
        "natural-2": "#E8E8E8",
        "natural-3": "#B9B9B9",
        "natural-4": "#979797",
        "natural-5": "#686868",
        "natural-6": "#4A4A4A",
        "natural-7": "#1D1D1D",
        "natural-8": "#1A1A1A",
        "natural-9": "#080808",
        "z-teal": "#61929E",
        "z-indigo": "#BFC5E2",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
