import React, { useRef } from "react";
import PageHeader from "../components/PageHeader";
import experienceImg from "../Assets/Images/experienceImg.png";
import BackButton from "../components/BackButton";
import { animateScroll as scroll } from "react-scroll";

function ExperiencePage() {
  const scrollRef = useRef(null);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      scroll.scrollMore(100, {
        containerId: "scroll-container",
        duration: 500,
        smooth: "easeInOutQuad",
      });
    } else {
      scroll.scrollMore(-100, {
        containerId: "scroll-container",
        duration: 500,
        smooth: "easeInOutQuad",
      });
    }
  };

  const experienceCard = [
    {
      title: "Frontend Developer (Trainee)",
      company_name: "Biswas Company",
      date: "2024 - Present",
      description:
        "Undergoing training in ReactJS, TailwindCSS, JavaScript, HTML, CSS, Git, GitHub, and other frontend development tools for the past six months.",
    },
    {
      title: "Data Entry Operator",
      company_name: "Irrigation & Waterways Dept, WB Govt",
      date: "2019 - Present",
      description:
        "Responsible for typing official government orders, mailing, scanning, preparing PowerPoint presentations when required, assisting with calculations, and preparing billing using MS Excel.",
    },
    {
      title: "EDP Executive",
      company_name: "Bhandari Automobiles Pvt. Ltd.",
      date: "2017 - 2019",
      description:
        "Prepared daily MIS reports on sales productivity as required. Managed the Data Management System (ERP), documentation, vehicle insurance processes, communication and support for sales and other departments, timeline management, sales certificate preparation, FASTag activation and assignment, and handled customer queries.",
    },
    {
      title: "MIS Coordinator",
      company_name: "Abybaby Events Pvt. Ltd.",
      date: "2016 - 2017",
      description:
        "Prepared detailed and consolidated daily, weekly, and monthly reports in MS Excel as required. Coordinated and followed up with concerned departments and prepared presentations in MS PowerPoint for various projects.",
    },
    {
      title: "Data Entry Operator",
      company_name: "Pamac Finserve Pvt. Ltd.",
      date: "2014 - 2016",
      description:
        "Performed pure data entry and online form filling using soft copies of small loan application forms.",
    },
  ];
  
  return (
    <div className="min-h-screen bg-[#1f242d] flex flex-col items-start justify-start ">
      <BackButton />
      <PageHeader image={experienceImg} title={"Experience"} />
      <div className="h-[16rem]">

      </div>
      <div
        id="scroll-container"
        ref={scrollRef}
        onWheel={handleScroll}
        className="mx-auto  w-full max-w-4xl lg:h-[500px] md:h-[50rem]  px-4 sm:px-8 lg:px-16 xl:px-24 lg:pb-8 overflow-hidden transition-all duration-500 ease-in-out"
        style={{ 
          overflowY: "scroll",
          scrollbarWidth: "none", /* Firefox */
          msOverflowStyle: "none", /* IE and Edge */
         }}
      >
        <style>
          {`
            #scroll-container::-webkit-scrollbar {
              display: none; /* Safari and Chrome */
            }
          `}
        </style>
        <div className=" flex flex-col space-yb-8 ">
          {experienceCard.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg shadow-black p-6 my-4 "
            >
              <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
              <h4 className="text-xl font-semibold">{card.company_name}</h4>
              <p className="text-gray-700">{card.date}</p>
              <p className="mt-4">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
