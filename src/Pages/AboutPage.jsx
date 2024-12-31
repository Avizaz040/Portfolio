import React from "react";
import ProfileImage from "../Assets/Images/ProfileImage.png";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import BackButton from "../components/BackButton";

function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1f242d] flex flex-col items-start justify-start ">
      <BackButton />
      <PageHeader image={ProfileImage} title={"About Me"}/>
      <div className="text-white text-justify px-8 pt-[18rem] text-2xl mx-auto max-w-[80rem] flex flex-col gap-6 mb-10">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          >
        
          <span className="font-semibold text-[4rem]">Hi</span>, I’m <span className="font-bold">Avishek Mondal</span>, a passionate <span className="font-bold">Frontend Web Developer </span> 
          specializing in <span className="font-bold">ReactJS </span>and <span className="font-bold">TailwindCSS</span>. Alongside my web development
          expertise, I am an <span className="font-bold">MS Excel Specialist </span>and have a strong foundation in
          <span className="font-bold"> computer hardware and networking</span>. I hold a degree and bring over <span className="font-bold">6
          years </span> of experience working with <span className="font-bold">MS Office tools</span>, showcasing my
          versatility and technical skills.
        
        </motion.p>
        <motion.p className="indent-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}>
          I thrive on creativity and enjoy building innovative, user-friendly
          websites that leave a lasting impression. My curiosity drives me to
          continuously <span className="font-bold">learn new skills </span>and grow both professionally and
          personally. Tackling challenges excites me, and I’m always motivated
          to push my limits and achieve excellence in everything I do.
        </motion.p>
        <motion.p className="indent-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}>
          When I’m not coding, you’ll often find me exploring my hobbies like
          <span className="font-bold"> photography, listening to music</span>, and <span className="font-bold">cooking</span>. These interests help
          fuel my creativity and bring a fresh perspective to my work.
        </motion.p>
        <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        >Let’s connect and create something extraordinary together!</motion.p>
      </div>
      <div className="w-[10rem] h-[1px] bg-white mx-auto my-4"></div>
    </div>
  );
}

export default AboutPage;
