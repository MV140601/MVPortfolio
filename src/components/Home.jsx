import React from "react";
import { motion } from "framer-motion"; // fixed import here
import myimg from "../utils/1edited.png";
import bg from "../utils/dottedbg.png";
import AnimatedLines from "./AnimatedLines";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "react-scroll";
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
  return (
    <div id="Home" className="relative h-screen overflow-hidden pt-24 bg-inherit">
  <div className="h-full w-full flex md:flex-row flex-col">
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
            <span className="mt-5">
             I'm a</span> 
            <h6 className="text-lg md:text-4xl my-5 font-bold">
           {' '}
            <Typewriter
          words={['Software Developer', 'Tech Explorer', 'Creative Coder']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={70}
          delaySpeed={1000}
        />
            </h6>
            <p className="text-md md:text-lg italic">
              A passionate Software Developer who loves turning ideas into
              functional, elegant code. With a strong grip on modern tech
              stacks, I enjoy building clean, user-focused digital experiences.
            </p>
            <div className="flex justify-evenlym space-x-3 md:w-[30%] w-[80%] mt-3">
             <a href="https://www.linkedin.com/in/mayuresh-veeramallu14/" target="blank" className="p-4 rounded-xl bg-[#021b2f] text-white hover:border-[0.5px]  hover:border-red-900  hover:scale-[1.11]  shadow-[#8c98a41a]  shadow-md  text-center "><GrLinkedin /></a>
             <a href="https://github.com/MV140601" target="blank" className="p-4 rounded-xl bg-[#021b2f]  shadow-[#8c98a41a] hover:scale-[1.11]  shadow-md text-white hover:border-[0.5px] hover:border-red-900  text-center"><FaGithub/></a>
             <a href="https://x.com/MAYURESH_2001" target="blank" className="p-4 rounded-xl bg-[#021b2f]  shadow-[#8c98a41a] hover:scale-[1.11] shadow-md text-white hover:border-[0.5px] hover:border-red-900 text-center"><FaXTwitter/></a>
             <a 
  href="Mayuresh_Veeramallu_7738539467.pdf" 
  download="Mayuresh_Veeramallu_Resume.pdf"
  className="text-center p-4 rounded-xl bg-red-500 text-white italic hover:scale-[1.02] font-semibold inline-block"
>
  Resume
</a>
            </div>
            <div></div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-full md:w-[50%]  h-full flex justify-center md:flex-col flex-row items-start relative">
          <img
            src={myimg}
            alt="Mayuresh"
            className="md:w-[90%] md:h-[90%] w-[70%] h-[70%] object-contain z-0   "
          />
        </div>
      </div>
    </div>  </div>
  );
};

export default Home;
