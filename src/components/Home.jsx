import React from "react";
import { motion } from "framer-motion"; // fixed import here
import myimg from "../utils/1edited.png";
import bg from "../utils/dottedbg.png";
import AnimatedLines from "./AnimatedLines";

const Home = () => {
  return (
    <div className="h-screen relative overflow-hidden bg-inherit pt-24">
      {" "}
      {/* 1. Set overflow-hidden */}
      <AnimatedLines />
      <div className="absolute h-full w-full flex md:flex-row flex-col">
        {/* LEFT SECTION */}
        <div className="w-full md:w-[50%] h-full flex flex-col justify-center items-center px-8 text-white space-y-4 ">
          <div className=" items-start flex flex-col w-[90%]">
            <p className="text-lg md:text-3xl">Hi There, I'm</p>
            <h2 className="text-3xl md:text-6xl inline-block relative pb-8 font-bold ">
              Mayuresh V
              <span className="absolute left-0 bottom-0 w-1/3 h-1 bg-red-500"></span>
            </h2>
            <h6 className="text-lg md:text-2xl my-5 font-bold">
              Software Developer
            </h6>
            <p className="text-md md:text-lg italic">
              A passionate Software Developer who loves turning ideas into
              functional, elegant code. With a strong grip on modern tech
              stacks, I enjoy building clean, user-focused digital experiences.
            </p>
            <div className="flex justify-around md:w-[30%] w-[80%] mt-3">
             <span className="p-4 rounded-full bg-[#021b2f] text-white hover:border-2 hover:border-red-600 text-center">lI</span>
             <span className="p-4 rounded-full bg-[#021b2f] text-white hover:border-2 hover:border-red-600 text-center">gh</span>
             <span className="p-4 rounded-full bg-[#021b2f] text-white hover:border-2 hover:border-red-600 text-center">X</span>
            </div>
            <div></div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[50%]  h-full flex justify-center md:flex-col flex-row items-start relative">
          <img
            src={myimg}
            alt="Mayuresh"
            className="md:w-[90%] md:h-[90%] w-[70%] h-[70%] object-contain md:z-10 z-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
