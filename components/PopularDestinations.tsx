import React from "react";
import PlanCard from "./PlanCard";

const PopularDestinations = () => {
  return (
    <section className="w-full bg-[#F9F5FF] py-20">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-[#252324] text-[36px] font-semibold">
          პოპულარული მიმართულებები
        </h3>
        <p className="text-lg font-normal text-[#6E7375]">
          ჩვენ ვატარებთ ყველა ტიპის ავტომობილს სპეციალიზებული გადამზიდავებით
          მაქსიმალური უსაფრთხოებისთვის
        </p>
      </div>

      <div className="mt-[42px] flex items-center gap-8">
        <PlanCard
          fromLocation="ფოთი"
          toLocation="თბილისი"
          distance={350}
          arrivalTime="1-2 დღე"
          service="ყოველდღიური"
          price={350}
          bgColor="#EEE1FE"
          iconColor="#6A04FE"
        />
        <PlanCard
          fromLocation="ფოთი"
          toLocation="თბილისი"
          distance={350}
          arrivalTime="1-2 დღე"
          service="ყოველდღიური"
          price={350}
          bgColor="#E5F0FF"
          iconColor="#0A69FA"
        />
        <PlanCard
          fromLocation="ფოთი"
          toLocation="თბილისი"
          distance={350}
          arrivalTime="1-2 დღე"
          service="ყოველდღიური"
          price={350}
          bgColor="#D7F5E5"
          iconColor="#038557"
        />
      </div>
    </section>
  );
};

export default PopularDestinations;
