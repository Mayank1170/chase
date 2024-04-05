'use client'

import React from "react";
import { useRouter } from "next/navigation";

interface FeaturesProps {
  bgColor: string;
}

const PlayButton: React.FC<FeaturesProps> = ({ bgColor }) => {
  const router = useRouter();
  
  return (
    <div
    onClick={() => {
      router.push("/click-the-circle");
    }}
      style={{
        boxShadow: "inset 0px 0px 50px 2px #000",
        backgroundColor: bgColor,
      }}
      className={`z-[1000] flex flex-col justify-center items-center h-[200px] w-[80px] mx-5 my-2 bg-${bgColor} rounded-full shadow-inner shadow-black hover:cursor-pointer`}
    >
      <button
        className="w-full h-full rounded-full hover:cursor-pointer"
        
      >
        <h1 className="text-lg font-semibold text-">S</h1>
        <h1 className="text-lg font-semibold text-">T</h1>
        <h1 className="text-lg font-semibold text-">A</h1>
        <h1 className="text-lg font-semibold text-">R</h1>
        <h1 className="text-lg font-semibold text-">T</h1>
      </button>
    </div>
  );
};

export default PlayButton;
