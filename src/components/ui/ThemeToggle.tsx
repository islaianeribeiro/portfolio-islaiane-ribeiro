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
      ariaLabel={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="text-2xl text-light rounded-md"
    />
  );
}
