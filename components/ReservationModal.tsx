import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import { transports } from "@/constants";
import PrivateDetailsForm from "./PrivateDetailsForm";
import { TiLocation } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { calculateProgress, SummaryItem } from "@/utils";

export function ReservationModal() {
  const [selected, setSelected] = useState("sedan");
  const [step, setStep] = useState<
    "select" | "details" | "confirmation" | "summary"
  >("select");

  return (
    <DialogContent className="bg-white min-w-screen h-screen mt-[45px] md:mt-0 sm:min-w-[640px] sm:min-h-[600px] sm:h-auto rounded-[10px] p-6">
      <DialogTitle className="text-left text-base text-[#101828] pb-0 md:pb-6 font-medium max-h-[60px]">
        სერვისის დაჯავშნა
      </DialogTitle>

      {/* Progress bars in a row */}
      <div className="flex gap-2">
        {["select", "details", "summary", "confirmation"].map((s, idx) => (
          <div key={s} className="flex-1">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div
                className="h-full bg-purple-600 rounded-full"
                style={{ width: calculateProgress(step, idx + 1) }}
              />
            </div>
          </div>
        ))}
      </div>

      {step === "select" && (
        <div className="w-full">
          <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
            არჩიე ტრანსპორტის ტიპი
          </h2>

          <div className="space-y-4">
            {transports.map((option) => (
              <div
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={clsx(
                  "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition",
                  selected === option.id
                    ? "border-[#6A04FE] bg-[#F6F1FF]"
                    : "border-[#EAECF0]"
                )}
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width={43}
                    height={25}
                    className="w-[43px] h-[25px] object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-medium">{option.label}</span>
                  <span className="text-sm text-gray-500">{option.desc}</span>
                </div>
                {selected === option.id && (
                  <CheckCircle2 className="ml-auto text-[#7933FF]" />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-10">
            <Button
              className="h-12 bg-[#6A04FE] text-white text-base font-medium px-6 py-4 rounded-full mt-10"
              onClick={() => setStep("details")}
            >
              გაგრძელება
            </Button>
          </div>
        </div>
      )}

      {step === "details" && (
        <div className="w-full">
          <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
            შეავსე პირადი დეტალები
          </h2>
          <PrivateDetailsForm setStep={setStep} />
        </div>
      )}

      {step === "confirmation" && (
        <div className="w-full">
          <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
            სერვისის დაჯავშნა
          </h2>

          <div className="w-full h-[400px] flex flex-col gap-6 items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#D7F5E5] flex items-center justify-center">
              <Image
                src="/assets/check.png"
                alt="check"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <h2 className="text-[#131214] font-semibold text-2xl">
              დაჯავშნა წარმატებით შესრულდა!
            </h2>
            <p className="text-[#6E7375] font-normal text-sm max-w-[408px]">
              თქვენი მოთხოვნა მიღებულია და მუშავდება. ჯავშნის დეტალები
              გამოგზავნილი თქვენს მიერ მითითებულ ელ-ფოსტაზე.
            </p>
          </div>
        </div>
      )}

      {step === "summary" && (
        <div className="w-full">
          <h2 className="text-left text-base text-[#101828] pb-6 font-medium">
            სერვისის დაჯავშნა
          </h2>

          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="font-medium text-[#101828] text-base">
                ჯავშნის დეტალები
              </h3>
              <div className="rounded-[16px] border border-[#E0E0E0] py-1">
                {/* Transport type */}
                <SummaryItem
                  icon={
                    <Image
                      src="/assets/sedan.png"
                      alt="type"
                      width={37}
                      height={21}
                    />
                  }
                  label="ტრანსპორტის ტიპი"
                  value="სედანი"
                />
                <SummaryItem
                  icon={<TiLocation size={20} />}
                  label="მიმართულება"
                  value="ფოთი-თბილისი"
                />
                <SummaryItem
                  icon={<TiLocation size={20} />}
                  label="ჩამოსვლის დრო"
                  value="1-2 დღე"
                />
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <h3>პირადი დეტალები</h3>
              <div className="rounded-[16px] border border-[#E0E0E0] py-1">
                <SummaryItem
                  icon={<IoPerson size={20} />}
                  label="სრული სახელი"
                  value="Giorgi Ilariani"
                />
                <SummaryItem
                  icon={<MdEmail size={20} />}
                  label="ელ-ფოსტა"
                  value="chikhladzegiorgi6@gmail.com"
                />
                <SummaryItem
                  icon={<FaPhone size={20} />}
                  label="მობილურის ნომერი"
                  value="+995568406092"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <h3 className="text-base text-[#101828]">დამატებითი ინფორმაცია</h3>
            <div className="w-full h-[134px] bg-[#E0E0E0] rounded-[16px] py-3 px-4">
              Toyota Prius C 2020 წელი.
            </div>
          </div>

          <div className="flex justify-between items-center mt-10">
            <div className="w-[60px] h-[52px] flex flex-col gap-[6px] text-sm font-medium text-[#6E7375]">
              ფასი:
              <span className="font-bold text-[#6A04FE] text-2xl">$350</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                type="submit"
                className="h-12 text-[#6A04FE] bg-transparent hover:bg-transparent cursor-pointer text-base font-medium px-6 py-4 rounded-full"
                onClick={() => setStep("details")}
              >
                უკან
              </Button>
              <Button
                type="submit"
                className="h-12 bg-[#6A04FE] text-white text-base font-medium px-6 py-4 rounded-full"
                onClick={() => setStep("confirmation")}
              >
                გაგრძელება
              </Button>
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  );
}
