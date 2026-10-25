"use client";

import * as React from "react";
import { useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  }, [setTheme]);

  // Listen for the 'd' keypress to toggle theme (shadcn standard hotkey)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key.toLowerCase() === "d" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement)?.tagName
        ) &&
        !(e.target as HTMLElement)?.isContentEditable
      ) {
        e.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-9 px-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-foreground hover:bg-accent flex items-center gap-1.5 transition-colors cursor-pointer"
      title="Toggle theme (Press 'd')"
      aria-label="Toggle theme"
    >
      <div className="relative size-4 flex items-center justify-center">
        <Sun className="size-4 text-amber-500 rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute size-4 text-sky-400 rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" />
      </div>
      <kbd className="hidden sm:inline-flex h-4 items-center rounded border border-border bg-muted/60 px-1 font-mono text-[10px] text-muted-foreground">
        d
      </kbd>
    </Button>
  );
}
