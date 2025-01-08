import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-25": "var(--primary-25)",
        "primary-50": "var(--primary-50)",
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",

        brand: {
          25: "#f5faff",
          50: "#FFF8E4",
          100: "#FFECBA",
          200: "#FFE08F",
          300: "#FFD665",
          400: "#FFCB4C",
          500: "#FFC342",
          600: "#FFB53D",
          700: "#FFA33A",
          800: "#FD9438",
          900: "#F97835",
        },

        light: "#ffffff",
        dark: "#070707",
        error: "#EA4335",
        success: "#34A853",
        warning: "#FBBC05",

        gray: {
          25: "#fff",
          50: "#FEFEFE",
          100: "#F8F8F8",
          200: "#F2F2F2",
          300: "#E4E4E4",
          400: "#C0C0C0",
          500: "#A2A2A2",
          600: "#797979",
          700: "#656565",
          800: "#464646",
          900: "#252525",
        },
      },
      borderRadius: {
        "radius-sm": "4px",
        "radius-md": "8px",
        "radius-lg": "16px",
        "radius-xl": "32px",
      },
      spacing: {
        "spacing-xxs": "2px",
        "spacing-xs": "4px",
        "spacing-sm": "8px",
        "spacing-md": "16px",
        "spacing-lg": "32px",
        "spacing-xl": "64px",
        "spacing-xxl": "128px",
      },
      fontFamily: {
        karla: "var(--font-karla)",
        montserrat: "var(--font-montserrat)",
      },
      screens: {
        tablet: { max: "800px" },
        mobile: { max: "480px" },
      },
      boxShadow: {
        cardShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
        cardShadowActive: "0px 5px 15px 0px rgba(66, 133, 244, 0.32)",
        innerShadow: "3px 4px 5.3px 0px rgba(13, 51, 116, 0.64) inset",
      },
    },
  },
  plugins: [],
};
export default config;
