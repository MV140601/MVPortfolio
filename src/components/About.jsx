import React from "react";
import hiimg from "../utils/2edited.png";

const About = () => {
  return (
    <div className=" overflow-hidden bg-[#011829]">
      <div className=" flex justify-between w-full h-full">
        <div className="w-full h-full flex flex-col">
          <div className="flex md:flex-row flex-col mt-0 md:mt-5  gap-2 p-4">
            <div className="flex flex-col  w-full md:w-[50%]">
              <div className="md:text-lg text-md font-bold border-red-500 border-l-4 px-2 text-white">
                About Me
              </div>
              <div className=" hidden md:block md:text-xl md:tracking-wider text-md text-gray-400 p-2">
              Full-Stack Developer | MERN, Java | Microservices | Cloud Enthusiast <br/>

I’m a results-driven developer with hands-on experience in building scalable web applications using MERN Stack, and Java Spring Boot. From architecting microservices to delivering robust features, I focus on clean, maintainable code and high-performance systems.

With 30+ personal projects on GitHub and over 200 solved DSA problems on platforms like LeetCode and GeeksforGeeks, I’m continuously refining my problem-solving mindset. I also have foundational to intermediate experience in cloud technologies, enabling secure, scalable deployments.

Currently seeking collaborative opportunities to drive innovation and deliver impactful tech solutions.
              </div>
              <div className=" md:hidden block md:text-xl md:tracking-wider text-md text-gray-400 p-2">
              Hey there! I’m a developer who loves turning complex problems into clean, scalable solutions. I work with the MERN stack,  and Java Spring Boot — and I’m big on microservices and cloud tech.

Over time, I’ve built 30+ passion projects, tackled 200+ DSA challenges, and contributed to production-ready features in my current role. Whether it’s designing smooth user experiences or optimizing backend performance, I’m all in.

Always curious, always building. Let’s create something cool together 🚀
              </div>
            </div>
            <div className="flex flex-col md:w-[50%] w-full">
              <div className="text-md md:text-lg font-bold border-red-500 border-l-4 px-2 text-white mt-0 md:mt-3">
                My Tech Arsenal includes
              </div>
              <div className="md:hidden grid w-full  max-h-64 overflow-y-auto grid-cols-2 gap-3 p-2 py-4 mb-6">
                {["JavaScript","TypeScript",
                  "ReactJs",
                  "NodeJs",
                  "ExpressJs",
                  "MongoDB",
                  "Java",
                  "Hibernate",
                  "Spring Boot",
                  "MySQL",
                  "MSSQL SERVER",
                  "C#",
                  ".NET MVC",
                  "Git & GitHub",
                  "AWS-S3",
                  "AWS-EC2",
                  "AWS-API Gateway",
                  "AWS-DynamoDB"
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="p-4 rounded-full bg-[#021b2f] text-white hover:border-2 hover:border-red-600 text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 💻 Desktop Grid Layout */}
              <div className="hidden md:grid md:text-lg text-sm text-gray-400 grid-cols-3 gap-3 p-2 py-4 mb-6">
                {["JavaScript","TypeScript",
                  "ReactJs",
                  "NodeJs",
                  "ExpressJs",
                  "MongoDB",
                  "Java",
                  "Hibernate",
                  "Spring Boot",
                  "MySQL",
                  "MSSQL SERVER",
                  "C#",
                  ".NET MVC",
                  "Git & GitHub",
                  "AWS-S3",
                  "AWS-EC2",
                  "AWS-API Gateway",
                  "AWS-RDS / DynamoDB",
                ].map((tech, idx) => (
                  <span
                    key={idx}
                    className="p-4 rounded-full bg-[#021b2f] text-white hover:border-2 hover:border-red-600 text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
