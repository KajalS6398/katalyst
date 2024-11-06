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

        brand: {
          25: "#f5faff",
          50: "#ECF3FE",
          100: "#D9E7FD",
          200: "#B3CEFB",
          300: "#8EB6F8",
          400: "#689DF6",
          500: "#4285F4",
          600: "#356AC3",
          700: "#285092",
          800: "#1A3562",
          900: "#0D1B31",
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
        "cardShadow": "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
        'cardShadowActive': '0px 5px 15px 0px rgba(66, 133, 244, 0.32)',
      }
    },
  },
  plugins: [],
};
export default config;
