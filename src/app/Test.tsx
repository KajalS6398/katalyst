"use client";

import { useTheme } from "@/context/ThemeContext";
import React from "react";

const Test = () => {
  const { theme, switchDark, switchLight } = useTheme();

  return (
    <div className="p-4 bg-light dark:bg-black h-[100vh]">
      <header className="p-4 transition-colors duration-300 flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-25">Katalyst:</h2>
        <p className="mb-4 dark:text-gray-25 text-gray-900">
          Current theme: {theme}
        </p>
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
    </div>
  );
};

export default Test;
