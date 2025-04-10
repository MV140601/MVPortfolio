import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "OneChat",
    description: "A fully responsive chat application using SOCKET.IO for instant one-to-one and group messaging, ensuring a seamless and interactive real-time experience.Users can create chat groups, upload/download files, and maintain organized conversations with state management handled via Zustand for optimal performance.",
    tech:"ReactJs ,NodejJs ,ExpressJs ,MongoDb ,Redux-Toolkit ,Socket.IO ,ShadCN",
    link: "#"
  },
  {
    title: "CabXpress",
    description: "A Cab Booking Website with a complete registration & login and auth system allowing users to sign up either as a Passenger or Captain (Driver), managing role-specific dashboards and functionalities.Passengers can book rides, while captains can accept/reject requests. Real-time ride updates and status changes are handled via SOCKET.IO, ensuring smooth ride flow.",
    tech:"ReactJs , NodejJs , ExpressJs , MongoDb , Redux-Toolkit , Socket.IO , TailwindCss,",
    link: "#"
  },
  {
    title: "EchoNet",
    description: "A Social Media site where Users can create posts (ECHO/tweets), like/unlike, and follow/unfollow others—mimicking the essential interactions of modern social platforms.Built-in JWT-based authentication ensures protected routes and user sessions, with a smooth sign-up/sign-in experience.Developed using  modern UI practices to ensure smoothness and scalability.",
    tech:"ReactJs , NodejJs , ExpressJs , MongoDb , Redux-Toolkit , TailwindCss " ,
    link: "#"
  },
  {
    title: "My Perfect Stay",
    description: "A Rental Booking Platform   where users can list their properties for rent and browse available stays.Guests can view detailed property information, check availability, and make bookings.The platform includes secure login, profile management, and an intuitive user interface for smooth interactions.",
    tech:"ReactJs , NodejJs , ExpressJs , MongoDb , Redux-Toolkit , TailwindCss",
    link: "#"
  },
  {
    title: "Life By Blood",
    description: "An AI tool that reads API documentation and provides endpoint recommendations.",
    tech:"ReactJs , NodejJs , ExpressJs , MongoDb , Redux-Toolki t ,TailwindCss",
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
            className="bg-[#0e0d23] border-[0.5px] border-white rounded-2xl p-6 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-white flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-red-500 mb-2">{project.title}</h3>
            <p className="text-sm text-gray-300 flex-grow">{project.description}</p>
            <p className="text-sm text-white mt-3 flex-grow font-bold "><span className='text-red-400'>Tech Stack:-</span><span className='italic'>{project.tech}</span></p>
            <motion.a href={`https://github.com/MV140601/${project.title}`} target='blank' className="mt-4 text-blue-400 underline text-sm mx-auto">Github</motion.a>
            </motion.a>
        ))}
      </motion.div>

      <motion.a   href='https://github.com/MV140601?tab=repositories' target='blank' className="mt-4 text-blue-400 underline text-sm">View More</motion.a>
    </motion.div>
  );
};
