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
        className="w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] md:w-[12rem] md:h-[12rem] lg:w-[16rem] lg:h-[16rem] rounded-full bg-white text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-white-glow cursor-pointer p-2"
        initial={{ scale: 0}}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        
        onClick={() => navigate("/whyme")}
      >
        <p className="text-sm md:text-2xl font-semibold">Why me?</p>
      </motion.div>
      <motion.div
        className="absolute w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-sky-glow cursor-pointer top-[40%] left-[12%] sm:top-[40%] sm:left-[20%] md:top-[36%] md:left-[15%] lg:top-[28%] lg:left-[18%] xl:top-[30%] xl:left-[27%] p-2"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        
        onClick={() => navigate("/about")}
      >
        <p className="text-sm md:text-2xl font-semibold text-white">About me</p>
      </motion.div>
      <motion.div
        className="absolute w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-teal-700 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-green-glow cursor-pointer top-[28%] sm:top-[30%]  md:top-[21%] lg:top-[12%] xl:top-[3%] p-2"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.2 }}
        
        onClick={() => navigate("/contact")}
      >
        <p className="text-sm  md:text-2xl font-semibold text-white">Contact me</p>
      </motion.div>
      <motion.div
        className="absolute w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-green-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-green-glow cursor-pointer top-[40%] right-[12%] sm:top-[40%] sm:right-[20%] md:top-[36%] md:right-[15%] lg:top-[28%] lg:right-[18%] xl:top-[30%] xl:right-[27%] p-2"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.4 }}
        
        onClick={() => navigate("/education")}
      >
        <p className="text-sm  md:text-2xl font-semibold text-white">Education</p>
      </motion.div>
      <motion.div
        className="absolute w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-red-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-red-glow cursor-pointer bottom-[32%] left-[20%] sm:bottom-[32%] sm:left-[28%] md:bottom-[26%] md:left-[23%] lg:bottom-[18%] lg:left-[25%] xl:bottom-[11%] xl:left-[32%] p-2"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.6 }}

        onClick={() => navigate("/skill")}
      >
        <p className="text-sm  md:text-2xl font-semibold text-white">Skills</p>
      </motion.div>
      <motion.div
        className="absolute w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem] rounded-full bg-pink-500 text-center content-center transition-shadow duration-300 ease-in-out shadow-lg shadow-black hover:shadow-pink-glow cursor-pointer bottom-[32%] right-[20%] sm:bottom-[32%] sm:right-[28%] md:bottom-[26%] md:right-[23%] lg:bottom-[18%] lg:right-[25%] xl:bottom-[11%] xl:right-[32%] p-1"
        initial={{ scale: 0}}
        animate={{ scale: 1}}
        transition={{ duration: 0.5, delay: 0.8 }}
        
        onClick={() => navigate("/experience")}
      >
        <p className="text-sm md:text-2xl font-semibold text-white">Experience</p>
      </motion.div>
    </motion.div>
  );
}

export default Navlist;