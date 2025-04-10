import React, { useState } from 'react';
import {motion} from 'framer-motion';
import emailjs from 'emailjs-com';
const Contactme = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const serviceID = 'service_7sgqq7g';
        const templateID = 'your_template_id';
        const publicKey = 'Xp9avJYMXCMSzc50L';
    
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        };
    
        emailjs.send(serviceID, templateID, templateParams, publicKey)
          .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          })
          .catch((err) => {
            console.error('FAILED...', err);
            alert('Failed to send message.');
          });
      };
    
  return (
    <motion.div className="relative overflow-hidden bg-inherit flex flex-col items-center py-10 px-4 space-y-6">
    <motion.div className="md:text-5xl text-3xl text-white flex items-center space-x-2">
      <motion.div className="text-red-500">---</motion.div>
      <span className="text-white text-shadow-lg ">Contact me </span>
      <motion.div className="text-red-500">---</motion.div>
    </motion.div>

    <motion.div className="max-w-[90%] mx-auto bg-[#0e0d23] shadow-lg rounded-2xl p-8  mt-10">
       <form onSubmit={handleSubmit} className="space-y-4 text-white">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full border text-white border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </motion.div>
   </motion.div>
  );
};

export default Contactme;