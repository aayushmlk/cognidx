import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          deep: "#2d1b69",
          mid: "#5b2d8e",
          light: "#8b5cf6",
          pale: "#ede9fe",
          50: "#faf5ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
        gold: "#f59e0b",
        cognidx: {
          deep: "#2d1b69",
          mid: "#5b2d8e",
          light: "#8b5cf6",
          pale: "#ede9fe",
        },
      },
      fontFamily: {
        playfair: ["Raleway", "system-ui", "sans-serif"],
        raleway: ["Raleway", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "banner-shift": "bannerShift 4s ease infinite",
        "pulse-slow": "pulse 2s ease infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        bannerShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
