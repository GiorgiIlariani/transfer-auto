"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {navLinks.map(({ label, href }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`p-3 rounded-[99px] text-base font-medium transition-colors ${
              isActive ? "bg-[#F0EDFF] text-[#6A04FE]" : "text-[#252324]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
