import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import ReservationBtn from "./ReservationBtn";

const Hero = () => {
  return (
    <section className="w-full py-20 pt-40 flex items-center justify-between">
      <div className=" flex-1">
        <div className="max-w-[560px]">
          <h2 className="text-[54px] font-semibold text-[#252324]">
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

      <div className="flex-1 relative flex justify-center items-center">
        <Image
          src="/assets/map.png"
          alt="Map"
          width={800}
          height={480}
          className="relative z-10 w-full max-w-[600px] h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
