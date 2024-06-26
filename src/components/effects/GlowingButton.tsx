"use client";
import { LuArrowUpRight } from "react-icons/lu";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const GlowingButton = () => {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-md"
        as="button"
        className="bg-gradient-to-b from-[#161A42] to-[#161A42]/10 text-[#B1BAED] flex items-center space-x-2"
      >
        <div className="flex justify-center items-center w-full h-full content gap-2">
          <p>Hire me</p>
          <LuArrowUpRight size={18} className="ml-[-5px]" />
        </div>
      </HoverBorderGradient>
    </div>
  );
};


export default GlowingButton;
