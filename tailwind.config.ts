import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
};
export default config;
