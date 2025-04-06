import Image from "next/image";
import React from "react";
import NavItems from "./NavItems";
import { Separator } from "./ui/separator";

const FooterComponent = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between py-16">
        <Image
          src="/assets/Logo.png"
          alt="header logo"
          width={170}
          height={20}
          className="cursor-pointer"
        />

        <NavItems />

        <div className="flex items-center gap-4">
          <Image
            src="/assets/Twitter.png"
            alt="twitter"
            width={24}
            height={24}
          />
          <Image
            src="/assets/Dribbble.png"
            alt="twitter"
            width={24}
            height={24}
          />
          <Image
            src="/assets/Linkedin.png"
            alt="twitter"
            width={24}
            height={24}
          />
        </div>
      </div>

      <Separator className="text-gray-400" />

      <div className="max-w-7xl mx-auto flex items-center justify-between py-8">
        <span className="text-normal text-[#6E7375]">TransferAuto © 2024</span>
        <p className="text-normal text-[#6E7375]">წესები და პირობები</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
