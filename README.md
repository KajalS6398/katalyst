# Katerpillar Component Library

## Step 1: Installation

Begin by installing the Katerpillar Component Library via npm:

```bash
npm i @atomos_tech/katerpillar
```

## Step 2: Import CSS

Import the library's CSS in your root page to apply the default styles:

```typescript
import "@atomos_tech/katerpillar/style";
```

**Make sure to import it right above your global.css file to override the default colour palette!**

For example:

```typescript
import "@atomos_tech/katerpillar/style";
import "./globals.css";
```

## Step 3: Configure Tailwind

You can set up the Tailwind CSS configuration in your tailwind.config.ts or tailwind.config.js and copy the theme styling below:

```
import type { Config } from "tailwindcss";

const config: Config = {
  content: [ ...your-pages ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
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
    },
  },
  plugins: [],
};
export default config;
```

## Step 4: Define Global Styles

Add the following CSS to your `global.css` file to define the theme variables and styles:

```css
@layer base {
  :root {
    /* primary */
    --primary-25: #f5faff;
    --primary-50: #ecf3fe;
    --primary-100: #d9e7fd;
    --primary-200: #b3cefb;
    --primary-300: #8eb6f8;
    --primary-400: #689df6;
    --primary-500: #4285f4;
    --primary-600: #356ac3;
    --primary-700: #285092;
    --primary-800: #1a3562;
    --primary-900: #0d1b31;

    /* gray */
    --gray-25: #ffffff;
    --gray-50: #fefefe;
    --gray-100: #f8f8f8;
    --gray-200: #f2f2f2;
    --gray-300: #e4e4e4;
    --gray-400: #c0c0c0;
    --gray-500: #a2a2a2;
    --gray-600: #797979;
    --gray-700: #656565;
    --gray-800: #464646;
    --gray-900: #252525;

    /* secondary colors */
    --light: #ffffff;
    --dark: #070707;
    --error: #ea4335;
    --success: #34a853;
    --warning: #fbbc05;
  }
}
```

## Step 5: Usage

With the library set up, you can start using the provided components. Below are examples of how to implement the Button and Chip components.

### Import Components

Import the required components from the `@atomos_tech/katerpillar` package:

```typescript
import { Button, Chip } from "@atomos_tech/katerpillar";
```

### Example Usage

Here is how you can integrate the Button and Chip into your page:

```typescript
<Button variant="filled" intent="primary">
    Primary
</Button>
<Chip intent="primary" size="lg">
    Primary
</Chip>
```

## Example Page

Here's an example of how you might set up a simple page using the library:

```typescript
import { Button, Chip } from "@atomos_tech/katerpillar";

export default function ExamplePage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Atomos Katerpillar Example</h1>
      <div className="mb-4">
        <Button variant="filled" intent="primary">
          Primary Button
        </Button>
      </div>
      <div>
        <Chip intent="primary" size="lg">
          Primary Chip
        </Chip>
      </div>
    </div>
  );
}
```

## Adding Interactivity

You can enhance the user experience by adding more interactive components and styles. Here's an example with a form and some interactive elements:

```typescript
import { Button, Chip } from "@atomos_tech/katerpillar";
import { useState } from "react";

export default function InteractivePage() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        Interactive Atomos Katerpillar Example
      </h1>

      <div className="mb-4">
        <Button
          variant="filled"
          intent="primary"
          onClick={() => setButtonClicked(!buttonClicked)}
        >
          {buttonClicked ? "Clicked!" : "Click Me"}
        </Button>
      </div>

      <div className="mb-4">
        <Chip intent="primary" size="lg">
          {buttonClicked ? "Active Chip" : "Inactive Chip"}
        </Chip>
      </div>
    </div>
  );
}
```

These instructions will help you effectively integrate and utilize the `@atomos_tech/katerpillar` library in your web applications, providing a consistent and visually appealing user interface.
