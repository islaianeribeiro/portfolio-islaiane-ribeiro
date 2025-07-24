"use client";
import Button from "./Button";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      text={isDark ? "Modo Claro" : "Modo Escuro"}
      className="px-4 py-2 bg-accent text-white rounded-md"
    />
  );
}
