// components/LanguageSwitcher.tsx

"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher({ isMenuOpen }: { isMenuOpen: boolean }) {
  const [language, setLanguage] = useState<"GEO" | "ENG">("GEO");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="border border-[#6A04FE]">
        <button
          className={` ${
            isMenuOpen ? "w-full h-full" : "w-[86px] h-[44px]"
          } flex items-center gap-2 justify-between  text-[#6A04FE] font-medium text-base px-3 py-[10px] rounded-[48px]`}
        >
          {language}
          <ChevronDown className="w-5 h-5" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-[calc(100vw-32px)] md:w-24 mt-2"
      >
        <DropdownMenuItem onClick={() => setLanguage("GEO")}>
          GEO
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ENG")}>
          ENG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
