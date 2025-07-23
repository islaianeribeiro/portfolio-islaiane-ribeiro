"use client";
import { useTheme } from "./ThemeProvider";

export function ButtonThema() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 m-4 border rounded bg-amber-400"
    >
      {isDark ? "Tema Claro" : "Tema Escuro"}
    </button>
  );
}
