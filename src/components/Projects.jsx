import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "OneChat",
    description: "A Twitter clone built with the MERN stack featuring real-time updates and post interactions. Here is the text stack",
    tech:"ReactJs,NodejJs,ExpressJs,MongoDb,Redux-Toolkit,SocketIo,ShadCN",
    link: "#"
  },
  {
    title: "CabXpress",
    description: "An elegant cake shop website showcasing beautiful design and high-quality product presentation.",
    tech:"ReactJs,NodejJs,ExpressJs,MongoDb,Redux-Toolkit,SocketIo,TailwindCss,",
    link: "#"
  },
  {
    title: "EchoNet",
    description: "A ride-hailing app with real-time map integration and driver/rider workflows.",
    tech:"ReactJs,NodejJs,ExpressJs,MongoDb,Redux-Toolkit,TailwindCss",
    link: "#"
  },
  {
    title: "My Perfect Stay",
    description: "A collaborative platform for professionals to connect, refer jobs, and post openings.",
    tech:"ReactJs,NodejJs,ExpressJs,MongoDb,Redux-Toolkit,TailwindCss",
    link: "#"
  },
  {
    title: "Life By Blood",
    description: "An AI tool that reads API documentation and provides endpoint recommendations.",
    tech:"ReactJs,NodejJs,ExpressJs,MongoDb,Redux-Toolkit,TailwindCss",
    link: "#"
  },
];

export const Projects = () => {
  return (
    <motion.div className="relative overflow-hidden bg-[#011829] flex flex-col items-center py-10 px-4 space-y-6">
      <motion.div className="md:text-5xl text-3xl text-white flex items-center space-x-2">
        <motion.div className="text-red-500">---</motion.div>
        <span className="text-white text-shadow-lg">My Projects</span>
        <motion.div className="text-red-500">---</motion.div>
      </motion.div>

      <motion.div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0e0d23] border border-white rounded-2xl p-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-white flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-red-500 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
            <span className="mt-4 text-blue-400 underline text-sm">Github</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.a   href='https://github.com/MV140601?tab=repositories' target='blank' className="mt-4 text-blue-400 underline text-sm">View More</motion.a>
    </motion.div>
  );
};
