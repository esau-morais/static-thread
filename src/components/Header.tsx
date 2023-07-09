"use client";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ThreadsLogo } from "./TheadsLogo";

export const Header = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <header className="w-full flex items-center justify-center h-[4.5rem]">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <ThreadsLogo className="fill-foreground w-6 h-6 aspect-square hover:scale-105 hover:transition-all cursor-pointer" />
      </Button>
    </header>
  );
};
