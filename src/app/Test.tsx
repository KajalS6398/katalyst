"use client";

import { Caption, Paragraph, Typography } from "@/components";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Test = () => {
  const { theme, switchDark, switchLight } = useTheme();

  return (
    <div className="p-4 bg-light dark:bg-black min-h-screen">
      <header className="p-4 transition-colors duration-300 flex justify-between items-center">
        <Typography variant={"h6"}>Katalyst:</Typography>
        <Paragraph variant={"b2"}>Current theme: {theme}</Paragraph>
        <div className="space-x-2">
          <button
            onClick={switchLight}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Light Mode
          </button>
          <button
            onClick={switchDark}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Dark Mode
          </button>
        </div>
      </header>
      <main className="space-y-5">
        <Typography variant="h1">H1 Headline</Typography>
        <Typography variant="h2">H2 Headline</Typography>
        <Typography variant="h3">H3 Headline</Typography>
        <Typography variant="h4">H4 Headline</Typography>
        <Typography variant="h5">H5 Headline</Typography>
        <Typography variant="h6">H6 Headline</Typography>
        <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
        <Paragraph variant="b2">
          The quick brown fox jumps over the lazy dog
        </Paragraph>
        <Paragraph variant="b3">
          The quick brown fox jumps over the lazy dog
        </Paragraph>
        <Paragraph variant="b4">
          The quick brown fox jumps over the lazy dog
        </Paragraph>
        <Caption variant="md">
          The quick brown fox jumps over the lazy dog
        </Caption>
        <br />
        <Caption>The quick brown fox jumps over the lazy dog</Caption>
      </main>
    </div>
  );
};

export default Test;
