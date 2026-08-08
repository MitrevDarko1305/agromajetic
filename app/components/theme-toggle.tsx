"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDarkMode = stored === "dark";
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-background cursor-pointer transition-colors"
    >
      {isDark ? (
        <Sun size={18} className="text-primary" />
      ) : (
        <Moon size={18} className="text-foreground/70" />
      )}
    </button>
  );
}