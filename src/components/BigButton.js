import React from "react";

export default function BigButton({ label }) {
  return (
    <div className="flex justify-center items-center w-[362px] h-[362px] rounded-full hover:bg-white hover:bg-opacity-25 transition-all">
      <button className="font-bellefair text-[2rem] uppercase w-[274px] h-[274px] bg-white text-black rounded-full">
        {label}
      </button>
    </div>
  );
}
