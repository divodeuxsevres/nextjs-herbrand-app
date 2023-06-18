"use client";

import { useEffect } from "react";
import { Header } from "@/components/landing/header";

import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />

      <main className="grow min-h-[auto] relative">{children}</main>

      <footer className="bg-[#fdfdfd] dark:bg-[#080808] border-t border-[#eaeaea] dark:border-[#1a1a1a] pt-24 pb-7" aria-labelledby="footer-heading">
        <div className="flex w-full justify-between items-center px-20 dark:text-[#888] text-[#666]">
          <p className="tracking-tight">© 2023 Herbrand Inc.</p>

          <div className="flex justify-end items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </footer>
    </>
  );
}
