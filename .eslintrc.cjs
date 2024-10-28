module.exports = {
  extends: [
    "next",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,

  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": [
      "error", // or "error"
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],

    "@typescript-eslint/no-empty-function": [
      "error",
      {
        allow: ["arrowFunctions"],
      },
    ],
  },
};