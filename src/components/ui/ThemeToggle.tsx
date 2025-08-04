"use client";
import { useTheme } from "@/contexts/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-6 flex items-center dark:bg-light bg-dark rounded-full px-1 transition-colors duration-300"
      aria-label="Alternar tema"
    >
      <div
        className={`w-4 h-4 bg-accent rounded-full shadow-md transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
}
