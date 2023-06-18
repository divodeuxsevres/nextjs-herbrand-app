"use client";

import { Laptop, Monitor, Moon, Sun } from "lucide-react";
import * as React from "react";
import { IconButton } from "@/components/ui/icon-button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/cn";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-fit justify-center items-center relative rounded-full py-[3px] px-1 bg-white dark:bg-[#111111] shadow-[0_0_0_1px_rgb(0,0,0,0.08)] dark:shadow-[0_0_0_1px_rgb(255,255,255,0.14)] h-10 text-sm">
      <IconButton
        onClick={() => setTheme("light")}
        className={cn(theme == "light" && "bg-[#f2f2f2] dark:bg-[#1a1a1a]")}
        icon={<Sun className="w-4" strokeWidth="1.25px" />}
      />

      <IconButton
        onClick={() => setTheme("dark")}
        className={cn(theme == "dark" && "bg-[#f2f2f2] dark:bg-[#1a1a1a]")}
        icon={<Moon className="w-4" strokeWidth="1.25px" />}
      />

      <IconButton
        onClick={() => setTheme("system")}
        className={cn(theme == "system" && "bg-[#f2f2f2] dark:bg-[#1a1a1a]")}
        icon={<Monitor className="w-4" strokeWidth="1.25px" />}
      />
    </div>
  );
}
