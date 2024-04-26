"use client";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

export default function Providers({ children }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(`theme = ${theme}`);
  console.log(`systemTheme = ${systemTheme}`);
  console.log(`currentTheme = ${currentTheme}`);

  return (
    <ThemeProvider defaultTheme="system" attributes="class" enableSystem={true}>
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
