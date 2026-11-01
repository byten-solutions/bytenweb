"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@/components/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    const currentlyDark = document.documentElement.classList.contains("dark");
    setTheme(currentlyDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Dark theme"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Sun size={18} className="theme-toggle__sun" />
      <Moon size={18} className="theme-toggle__moon" />
    </button>
  );
}
