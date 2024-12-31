import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navlist() {
  const navigate = useNavigate();
  return (
    
    <motion.div
      className="relative min-h-screen bg-slate-900 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className=" md:w-[12rem] md:h-[12rem] lg:w-[16rem] lg:h-[16rem] rounded-full bg-white text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-white-glow cursor-pointer"
        initial={{ scale: 0}}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        
        onClick={() => navigate("/whyme")}
      >
        <p className="text-2xl font-semibold">Why me?</p>
      </motion.div>
      <motion.div
        className="absolute md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-sky-glow cursor-pointer md:top-[36%] md:left-[15%] lg:top-[24%] lg:left-[28%]"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        // style={{ top: '36%', left: '15%' }}
        
        onClick={() => navigate("/about")}
      >
        <p className="text-2xl font-semibold text-white">About me</p>
      </motion.div>
      <motion.div
        className="absolute md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-teal-700 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-green-glow cursor-pointer md:top-[22%] lg:top-[3%]"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        // style={{ top: '22%',  }}
        
        onClick={() => navigate("/contact")}
      >
        <p className="text-2xl font-semibold text-white">Contact me</p>
      </motion.div>
      <motion.div
        className="absolute md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-green-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-green-glow cursor-pointer md:top-[36%] md:right-[15%] lg:top-[24%] lg:right-[28%]"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.4 }}
        // style={{ top: '36%', right: '15%' }}
        
        onClick={() => navigate("/education")}
      >
        <p className="text-2xl font-semibold text-white">Education</p>
      </motion.div>
      <motion.div
        className="absolute md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-red-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-red-glow cursor-pointer md:bottom-[26%] md:left-[23%] lg:bottom-[12%] lg:left-[32%]"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.6 }}
        // style={{ bottom: '26%', left: '23%' }}

        onClick={() => navigate("/skill")}
      >
        <p className="text-2xl font-semibold text-white">Skills</p>
      </motion.div>
      <motion.div
        className="absolute md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-pink-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-pink-glow cursor-pointer md:bottom-[26%] md:right-[23%] lg:bottom-[12%] lg:right-[32%]"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.8 }}
        // style={{ bottom: '26%', right: '23%' }}
        
        onClick={() => navigate("/experience")}
      >
        <p className="text-2xl font-semibold text-white">Experience</p>
      </motion.div>
    </motion.div>
  );
}

export default Navlist;