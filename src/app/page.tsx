import Image from "next/image";
import Features from "./Components/Common/Features";
import PlayButton from "./Components/Common/PlayButton";

export default function Home() {
  return (
    <div className="flex flex-row w-full h-[100vh]  bg-[#151517] bg-[url('/HomeBg.svg')] bg-contain overflow-hidden">
      <div className="w-[50%] gap-3 justify-start items-center ">
        <h1 className="text-red text-md font-semibold font-[futura] ml-8 mt-5">
          CIRCLEChase
        </h1>
        <div className="mt-[30%]">
          {" "}
          <Features bgColor="#1F2025"/>
        </div>
        <div className="w-[800px] absolute bottom-0 BottomToTop2">
          <p
            style={{ textShadow: "inset 2px 2px 20px 2px #000  " }}
            className="  text-[#1F2025] text-[5em] font-medium mb-0 "
          >
            CH<span className="text-white text-[100px]">A</span>SE THE CIRCLE
          </p>
        </div>
      </div>

      <div className="relative w-[50%] flex items-center overflow-hidden bg-[#1F2025]">
        <div className=" flex w-full justify-end">
          <PlayButton bgColor="#151517"/>
        </div>
        <div className="absolute w-[800px] h-full BottomToTop1">
          <p className="text-black h-full w-full text-[5em] font-outline-4 -rotate-90 ">
            CHASE THE CIRCLE
          </p>
        </div>
      </div>
    </div>
  );
}
