import React from "react";
import BackButton from "../Components/BackButton";
import PageHeader from "../Components/PageHeader";
import contactsImg from "../Assets/Images/ContactImg.png";
import PhoneIcon from "../Assets/Images/Phone.png";
import MailIcon from '../Assets/Images/MailImg.png'
import { motion } from "framer-motion";

function ContactsPage() {
  return (
    <div className="min-h-screen bg-[#1f242d] flex flex-col items-start justify-start ">
      <BackButton />
      <PageHeader image={contactsImg} title={"Contacts"} />
      <div className=" mx-auto flex flex-col items-start text-white text-4xl mt-[18rem] ">
        <motion.div className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        >
          <img src={PhoneIcon} alt="phoneImg" className="w-[6rem] h-[6rem] " />
          <p>+91 7980480198</p>
        </motion.div>
        <motion.div className="flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img src={MailIcon} alt="phoneImg" className="w-[6rem] h-[6rem]" />
          <p>avizaz040@gmail.com</p>
        </motion.div>
        <div className="mx-auto mt-4 space-y-4 content-center">
          <motion.p className="text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          >Also you can find me on</motion.p>
          <motion.div className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          >
            <a href="https://www.linkedin.com/in/avishek-mondal-75aa95113" target="_blank">
              <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" alt="linkedin"  />
            </a>
            <a href="https://github.com/avizaz040" target="_blank">
              <img src="https://img.icons8.com/fluency/48/000000/github.png" alt="github" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
