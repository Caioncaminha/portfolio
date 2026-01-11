"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-secondary/80 transition-colors text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <LuSun className="w-5 h-5" /> : <LuMoon className="w-5 h-5" />}
    </button>
  );
}
