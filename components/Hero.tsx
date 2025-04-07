import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ReservationBtn from "./ReservationBtn";

const Hero = () => {
  return (
    <section className="w-full py-20 pt-40 flex flex-col md:flex-row gap-[30px] md:gap-0 items-center justify-between px-4">
      <div className="flex-1">
        <div className="max-w-[560px]">
          <h2 className="text-[36px] md:text-[54px] font-semibold text-[#252324]">
            ჩვენ გთავაზობთ სისწრაფეს და{" "}
            <span className="text-[#6A04FE]">სანდოობას</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            ჩვენ შემოგთავაზებთ იმპორტირებულ მანქანებს უსაფრთხოდ და საიმედოდ.
            პორტიდან თქვენს კარამდე - ენდეთ პროფესიონალებს.
          </p>

          <ReservationBtn />
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center overflow-hidden">
        <div className="relative w-[500px] md:w-[800px] rotate-[7.27deg]">
          <Image
            src="/assets/map.png"
            alt="Map"
            width={800}
            height={480}
            className="relative z-10 w-[500px] md:w-[800px]"
          />
        </div>

        {/* Blur Overlay for both sides */}
        <div className="absolute md:hidden left-0 top-0 h-full w-[150px] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-[150px] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;
