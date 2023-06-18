import Link from "next/link";
import { Logo } from "@/components/logo";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/cn";
import { Search } from "lucide-react";

export const Header: React.FC = () => {
  const { scrollY } = useScroll()
  const [scrollBorder, setScrollBorder] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    latest > 1 ? setScrollBorder(true) : setScrollBorder(false);
  })

  return (
    <header className={cn(
      "sticky z-30 top-0 w-full bg-[rgb(255,255,255,0.8)] dark:bg-[rgb(0,0,0,0.8)] backdrop-blur-sm backdrop-saturate-150 transition-shadow ease-in-out",
      scrollBorder && "shadow-[inset_0_-1px_0_0_rgba(0,0,0,.1)] dark:shadow-[inset_0_-1px_0_0_rgba(255,255,255,.1)]")}>
      <div className="max-w-[120rem] px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-12 md:h-16">
          <Link href="/" className="flex mr-4 shrink-0 flex-1">
            <Logo className="dark:fill-white fill-black w-32 stroke-zinc-300 hover:stroke-white duration-500" />
          </Link>

          <div className="hidden flex-row gap-3 items-center lg:flex">
            <div className="bg-[#111111] rounded-full px-3 py-1.5">
              <p className="tracking-tight text-[#bdbdbd]">Neufahrzeuge</p>
            </div>
            <div className=" px-3 py-1.5">
              <p className="tracking-tight text-[#bdbdbd]">Gebrauchtfahrzeuge</p>
            </div>
            <div className=" px-3 py-1.5">
              <p className="tracking-tight text-[#bdbdbd]">Werkstatt & Services</p>
            </div>
            <div className=" px-3 py-1.5">
              <p className="tracking-tight text-[#bdbdbd]">Unternehmen</p>
            </div>
            <div className=" px-3 py-1.5">
              <p className="tracking-tight text-[#bdbdbd]">Karriere</p>
            </div>

            <div className="bg-[#252525] flex pr-4 lg:pr-4 xl:pr-32 pl-4 py-1 h-10 rounded-sm items-center justify-start gap-1">
              <Search className="h-4 w-4 text-[#bdbdbd]" />
              <p className="tracking-tight text-[#bdbdbd]">Suchbegriff...</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
