"use client";

import { ReservationModal } from "./ReservationModal";
import { Dialog, DialogTrigger } from "./ui/dialog";

const ReservationBtn = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-[#6A04FE] hover:bg-[#6A04FE] text-white px-8 py-4 rounded-full mt-7 text-base font-medium cursor-pointer">
        დაჯავშნა
      </DialogTrigger>
      <ReservationModal />
    </Dialog>
  );
};

export default ReservationBtn;
