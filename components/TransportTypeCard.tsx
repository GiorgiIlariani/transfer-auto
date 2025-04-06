import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const TransportTypeCard = ({
  transportType,
  text,
  image,
  styles,
}: TransportTypeCardTypes) => {
  return (
    <div className="pt-4 pr-4 pb-4 pl-5 gap-4 rounded-lg border">
      <div className="flex items-center gap-4">
        <div className="max-w-[326px] flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl text-medium text-[#252324]">
              {transportType}
            </h4>
            <p className="text-[#6E7375] text-sm text-normal">{text}</p>
          </div>

          <Button className="bg-[#F0EDFF] hover:bg-[#F0EDFF]  text-[#7500FF] font-bold text-sm py-3 px-[14px] rounded-full flex items-center gap-1 w-fit h-10">
            დაჯავშნა
            <ArrowRight size={16} />
          </Button>
        </div>

        <div
          style={{
            backgroundColor: styles.bg,
          }}
          className="w-[250px] h-[168px] rounded-[12px] flex items-center justify-center"
        >
          <Image src={image} alt="car-img" width={232} height={135} />
        </div>
      </div>
    </div>
  );
};

export default TransportTypeCard;
