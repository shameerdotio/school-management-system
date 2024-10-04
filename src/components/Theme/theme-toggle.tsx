"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(isMounted && theme === "dark" ? "light" : "dark");
  };

  if (!isMounted) return null;

  return (
    <button
      onClick={handleToggle}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <p className="flex items-center gap-2 sm:flex-row flex-col-reverse">
          <span className="text-[11px] sm:text-xs">Light</span>
          <Sun className="text-sm" aria-hidden="true" />
        </p>
      ) : (
        <p className="flex items-center gap-2 sm:flex-row flex-col-reverse">
          <span className="text-[11px] sm:text-xs">Dark</span>
          <Moon className="text-sm" aria-hidden="true" />
        </p>
      )}
    </button>
  );
}
