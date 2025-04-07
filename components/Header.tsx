"use client";

import Image from "next/image";
import React, { useState } from "react";
import NavItems from "./NavItems";
import { LanguageSwitcher } from "./LanguageSwitcher";
import MobileNav from "./MobileNav";
import { navLinks } from "@/constants";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-30">
      {/* HEADER */}
      <header className="w-full py-5 bg-white bg-opacity-90 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Image
            src="/assets/Logo.png"
            alt="header logo"
            width={170}
            height={20}
            className="cursor-pointer"
          />

          <div className="md:hidden">
            <MobileNav
              isOpen={isMenuOpen}
              toggle={() => setIsMenuOpen((prev) => !prev)}
            />
          </div>

          <NavItems />

          <div className="hidden md:block">
            <LanguageSwitcher isMenuOpen={false} />
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="w-full bg-white md:hidden">
          <nav className="flex flex-col max-w-7xl mx-auto py-5">
            {navLinks.map(({ label, href }) => (
              <div
                className="flex items-center justify-between hover:bg-[#F0EDFF] text-[#252324] hover:text-[#6A04FE] transition-colors cursor-pointer px-4"
                key={label}
              >
                <a
                  key={href}
                  href={href}
                  className="py-3 rounded-[99px] text-base font-medium  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
                <div className="w-4 h-4 items-center justify-center flex">
                  <MdKeyboardArrowRight size={16} />
                </div>
              </div>
            ))}
          </nav>
          <div className="w-full border-t border-[#E9EAEB] px-4 py-6">
            <LanguageSwitcher isMenuOpen />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
