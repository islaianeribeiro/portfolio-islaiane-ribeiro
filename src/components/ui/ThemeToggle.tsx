"use client";
import Button from "./Button";
import { useTheme } from "../../contexts/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      text={isDark ? "Modo Claro" : "Modo Escuro"}
      className="fixed top-18 right-1 z-[999] px-4 py-2 bg-accent text-white rounded-md"
    />
  );
}
