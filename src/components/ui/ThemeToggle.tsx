"use client";
import { useTheme } from "@/contexts/ThemeProvider";
import Button from "./Button";
import { LuMoon, LuSun } from "react-icons/lu";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      icon={isDark ? <LuSun /> : <LuMoon />}
      ariaLabel={isDark ? "Ícone de Sol" : "Ícone de Lua"}
      className="text-2xl text-light rounded-md"
    />
  );
}
