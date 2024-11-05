"use client";

import React, { createContext, useState, type ReactNode, useContext } from 'react';

interface ThemeContextProps {
  theme: string;
  switchDark: () => void;
  switchLight: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  const switchDark = () => {
    document.documentElement.classList.add("dark");
    setTheme("dark");
  };

  const switchLight = () => {
    document.documentElement.classList.remove("dark");
    setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, switchDark, switchLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
