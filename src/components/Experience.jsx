import React, { useRef } from "react";
import AnimatedLines from "./AnimatedLines";
import AnimatedL2 from "./AnimatedL2";
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  
  return (
    <motion.div id="Experience"  className="relative overflow-hidden bg-inherit flex flex-col items-center space-y-2">
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
                - Implemented AI-powered automation by integrating external APIs ( OpenAI,OLama) to deliver features such as automatic summarization and workflow automation, significantly reducing manual effort and enhancing overall efficiency.{" "}
              </p>
              <p>
                - Built a bulk action capability that enables users to perform operations on multiple records simultaneously, improving productivity and streamlining workflows within the platform.{" "}
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
                Led the migration of a legacy application to a modern full-stack architecture, which involved:<br/>
  -Designing and developing RESTful APIs to support a new, responsive frontend.<br/>
  - Writing optimized database queries and stored procedures for efficient data handling. <br/>
  - Implementing a secure and scalable user authentication system.<br/>
  - Rebuilding UI components using modern frontend frameworks to enhance performance and maintainability.    
            </p><br/>
              <p>
                 Designed and developed a complete module from scratch, which included:  <br/>
  - Building the  backend logic and buiness rules.  <br/>
  - Writing efficient stored procedures for data retrieval and manipulation.  <br/>
  - Developing the frontend UI using JavaScript and Bootstrap, ensuring a seamless user experience.        {" "}
              </p><br/>
              <p>
                 Took ownership of an ongoing module, successfully completing its development by:  <br/>
  - Implementing the required core features.  <br/>
  - Enhancing functionality by adding new features based on client requirements.  
              </p>
              <br/>
              <p>
                 Developed new features and resolved  critical bugs, improving the stability and performance of the company’s product/tool.             </p>
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
                  Remote,India  
                </span>
              </motion.div>
            </motion.div>
            <motion.div className="text-md text-white flex flex-col ">
              <p>
                {" "}
                - Developed a fully responsive web page for a section of itjobxs.com, optimizing the user experience.{" "}
              </p>
              <p>
                - Implemented user authentication and bot detection, tackling security challenges and removing fake bots and posts.{" "}
              </p>
              <p>
                - Integrated Google reCAPTCHA, adding an extra layer of security to protect against automated attacks.
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
