import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = () => {
  return (
    <header className="w-full py-5 fixed bg-white bg-opacity-90 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Image
          src="/assets/Logo.png"
          alt="header logo"
          width={170}
          height={20}
          className="cursor-pointer"
        />

        <NavItems />

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
