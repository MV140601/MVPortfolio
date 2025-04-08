import React, { useRef } from "react";
import AnimatedLines from "./AnimatedLines";
import AnimatedL2 from "./AnimatedL2";
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  
  return (
    <motion.div     className="relative overflow-hidden bg-inherit flex flex-col items-center space-y-2">
      <AnimatedL2></AnimatedL2>
      <motion.div initial={{opacity:0}}
     whileInView={{opacity: 10}} transition={{duration:1}} className="md:text-5xl text-4xl text-white mt-5 mb-5 flex  items-center h-[10%] space-x-2 ">
        <motion.div className="text-red-500">---  </motion.div>
        <span className="text-white text-shadow-lg">My Experience</span>
        <motion.div className="text-red-500">  ---</motion.div>
      </motion.div>
      <motion.div className=" flex flex-col justify-evenly space-y-3 w-full  mt-5 h-[90%] items-center">


        <motion.div  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
   transition={{ duration: 1 }} className="flex flew-row  shadow-[#8c98a41a] border-[0.5px] border-[#8396a91a] shadow-xl h-[30%] w-[80%] bg-[#0e0d23] rounded-xl">
          <motion.div className="w-full flex flex-col px-4 py-2  ">
            <motion.div className=" border-b-2 border-white p-2 flex md:flex-row flex-col justify-between">
              <motion.div className="flex md:w-[30%] flex-row-reverse md:flex-row w-full space-x-3 items-center italic">
                <span className="font-extrabold text-lg text-red-500">
                  Konnect Insights{" "}
                </span>
                <span className="hidden md:block font-bold text-lg text-red-500"> / </span>
                <span className="md:hidden block  font-extrabold text-2xl text-red-500"> -</span>
                <span className="font-semibold text-md text-white">
                  {" "}
                  Software Developer{" "}
                </span>
              </motion.div>
              <motion.div className="flex  flex-row-reverse md:flex-row md:w-[30%] w-full space-x-3 items-center italic">
                <span className="font-bold text-lg text-red-500">
                  Sept2024–Present
                </span>
                <span className="hidden md:block font-bold text-lg text-red-500"> / </span>
                <span className="md:hidden block  font-extrabold text-2xl text-red-500 ml-2"> - </span>              
                  <span className="font-semibold text-md text-white">
                  Mumbai,India  
                </span>
              </motion.div>
            </motion.div>
            <motion.div className="text-md text-white flex flex-col ">
              <p>
                {" "}
                - Integrated AI-powered automation using OpenAI's APIs,
                implementing features like automatic summarization and workflow
                automation, reducing manual effort for clients and increasing
                efficiency.{" "}
              </p>
              <p>
                - Developed a bulk action feature that allows users to perform
                operations on multiple tickets simultaneously, significantly
                improving productivity and streamlining workflow within the
                tool.{" "}
              </p>
              <p>
                - Enhanced the role-based access control system by: <br/>- Developing
                new roles and permissions, enabling clients to define more
                granular restrictions.<br/> - Improving security and flexibility for
                role-wise agent actions, ensuring better compliance and
                controlled access for different user levels.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div  initial={{ x: 100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
   transition={{ duration: 1 }} className="flex flew-row  shadow-[#8c98a41a] border-[0.5px] border-[#8396a91a] shadow-xl h-[30%] w-[80%] bg-[#0e0d23]  rounded-xl">
        <motion.div className="w-full flex flex-col px-4 py-2  ">
            <motion.div className=" border-b-2 border-white p-2 flex md:flex-row flex-col justify-between">
              <motion.div className="flex md:w-[30%] flex-row-reverse md:flex-row w-full space-x-3 items-center italic">
                <span className="font-extrabold text-lg text-red-500">
                  Konnect Insights{" "}
                </span>
                <span className="hidden md:block font-bold text-lg text-red-500"> / </span>
                <span className="md:hidden block  font-extrabold text-2xl text-red-500"> -</span>
                <span className="font-semibold text-md text-white">
                  {" "}
                 Jr. Software Developer{" "}
                </span>
              </motion.div>
              <motion.div className="flex  flex-row-reverse md:flex-row md:w-[30%] w-full space-x-3 items-center italic">
                <span className="font-bold text-lg text-red-500">
                  Aug2023–Aug2024
                </span>
                <span className="hidden md:block font-bold text-lg text-red-500"> / </span>
                <span className="md:hidden block  font-extrabold text-2xl text-red-500 ml-2"> - </span>              
                  <span className="font-semibold text-md text-white">
                  Mumbai,India  
                </span>
              </motion.div>
            </motion.div>
            <motion.div className="text-md text-white flex flex-col ">
              <p>
                {" "}
                - Integrated AI-powered automation using OpenAI's APIs,
                implementing features like automatic summarization and workflow
                automation, reducing manual effort for clients and increasing
                efficiency.{" "}
              </p>
              <p>
                - Developed a bulk action feature that allows users to perform
                operations on multiple tickets simultaneously, significantly
                improving productivity and streamlining workflow within the
                tool.{" "}
              </p>
              <p>
                - Enhanced the role-based access control system by: <br/>- Developing
                new roles and permissions, enabling clients to define more
                granular restrictions.<br/> - Improving security and flexibility for
                role-wise agent actions, ensuring better compliance and
                controlled access for different user levels.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>{" "}


        <motion.div  initial={{ x: -100, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
   transition={{ duration: 1 }} className="flex flew-row  shadow-[#8c98a41a] border-[0.5px] border-[#8396a91a] shadow-xl h-[30%] w-[80%] bg-[#0e0d23]  rounded-xl">
        <motion.div className="w-full flex flex-col px-4 py-2  ">
            <motion.div className=" border-b-2 border-white p-2 flex md:flex-row flex-col justify-between">
              <motion.div className="flex md:w-[30%] flex-row-reverse md:flex-row w-full space-x-3 items-center italic">
                <span className="font-extrabold text-lg text-red-500">
                ITJOBXS{" "}
                </span>
                <span className="hidden md:block font-bold text-lg text-red-500"> / </span>
                <span className="md:hidden block  font-extrabold text-2xl text-red-500"> -</span>
                <span className="font-semibold text-md text-white">
                  {" "}
                  Web Development Intern{" "}
                </span>
              </motion.div>
              <motion.div className="flex  flex-row-reverse md:flex-row md:w-[30%] w-full space-x-3 items-center italic">
                <span className="font-bold text-lg text-red-500">
                  April2023–June2023
                </span>
                <span className="hidden md:block font-bold text-lg text-red-500"> / </span>
                <span className="md:hidden block  font-extrabold text-2xl text-red-500 ml-2"> - </span>              
                  <span className="font-semibold text-md text-white">
                  Mumbai,India  
                </span>
              </motion.div>
            </motion.div>
            <motion.div className="text-md text-white flex flex-col ">
              <p>
                {" "}
                - Integrated AI-powered automation using OpenAI's APIs,
                implementing features like automatic summarization and workflow
                automation, reducing manual effort for clients and increasing
                efficiency.{" "}
              </p>
              <p>
                - Developed a bulk action feature that allows users to perform
                operations on multiple tickets simultaneously, significantly
                improving productivity and streamlining workflow within the
                tool.{" "}
              </p>
              <p>
                - Enhanced the role-based access control system by: <br/>- Developing
                new roles and permissions, enabling clients to define more
                granular restrictions.<br/> - Improving security and flexibility for
                role-wise agent actions, ensuring better compliance and
                controlled access for different user levels.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
