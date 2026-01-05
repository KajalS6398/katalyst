import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backdrop: "rgba(0, 0, 0, 0.5)",
        light: "var(--light)",
        dark: "var(--dark)",
        error: "var(--error)",
        success: "var(--success)",
        warning: "var(--warning)",

        gray: {
          25: "var(--gray-25)",
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },

        primary: {
          25: "var(--primary-25)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
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
      animation: {
        "spin-slow": "spin-slow 1.5s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
