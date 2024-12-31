import React from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import BackButton from "../components/BackButton";
import whyMeImg from "../Assets/Images/whyMeImage.png";
import DemoImg from "../Assets/Images/DemoImg.jpg";
import { motion } from "framer-motion";

function WhyMePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#1f242d] flex flex-col items-center justify-start">
      <BackButton />
      <PageHeader image={whyMeImg} title={"Why me?"} />

      <div class="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white mt-[18rem] py-10 px-6 mb-8 flex flex-col items-center ">
        <h1 class="text-4xl font-bold text-center pb-4 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-600">
          Why Recruit Me?
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
          {/* <!-- Section: Passion for Development --> */}
          <motion.div class="flex flex-col items-center text-center bg-slate-700 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          
          >
            <img
              src={DemoImg}
              alt="Creative Design"
              class="w-24 h-24 rounded-full mb-4 border-4 border-purple-500"
            />
            <h2 class="text-2xl font-semibold mb-2">Creative Developer</h2>
            <p class="text-gray-300">
              I have a passion for creating modern and user-friendly websites.
              My proficiency in ReactJS and TailwindCSS ensures high-quality and
              visually appealing web applications.
            </p>
          </motion.div>

          {/* <!-- Section: Team Player --> */}
          <motion.div class="flex flex-col items-center text-center bg-slate-700 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          >
            <img
              src={DemoImg}
              alt="Teamwork"
              class="w-24 h-24 rounded-full mb-4 border-4 border-cyan-500"
            />
            <h2 class="text-2xl font-semibold mb-2">Team Player</h2>
            <p class="text-gray-300">
              With years of experience in diverse roles, I excel at working
              collaboratively and supporting team goals, ensuring efficient and
              successful project delivery.
            </p>
          </motion.div>

          {/* <!-- Section: Quick Learner --> */}
          <motion.div class="flex flex-col items-center text-center bg-slate-700 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          >
            <img
              src={DemoImg}
              alt="Quick Learner"
              class="w-24 h-24 rounded-full mb-4 border-4 border-green-500"
            />
            <h2 class="text-2xl font-semibold mb-2">Quick Learner</h2>
            <p class="text-gray-300">
              I am highly motivated to learn new skills and adapt to emerging
              technologies, ensuring I stay ahead in the fast-evolving tech
              landscape.
            </p>
          </motion.div>

          {/* <!-- Section: Diverse Skill Set --> */}
          <motion.div class="flex flex-col items-center text-center bg-slate-700 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          >
            <img
              src={DemoImg}
              alt="Skills"
              class="w-24 h-24 rounded-full mb-4 border-4 border-pink-500"
            />
            <h2 class="text-2xl font-semibold mb-2">Diverse Skill Set</h2>
            <p class="text-gray-300">
              From frontend development with ReactJS to advanced MS Excel
              proficiency and computer hardware expertise, my versatile skill
              set adds immense value.
            </p>
          </motion.div>
        </div>

        <div class="mt-10">
          <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-lg rounded-full shadow-lg hover:from-purple-500 hover:to-cyan-500 transition duration-300">
            Let's Collaborate
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyMePage;
