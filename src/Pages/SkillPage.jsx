import React from "react";
import PageHeader from "../components/PageHeader";
import skillImg from "../Assets/Images/skillsImg.png";
import BackButton from "../components/BackButton";
import CardSlider from "../components/CardSlider";

function SkillPage() {

  return (
    
      <div className="min-h-screen bg-[#1f242d] flex flex-col items-start justify-start ">
        <BackButton />
        <PageHeader image={skillImg} title={"Skills"} />
        <div className="pt-[18rem] px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-7xl mx-auto">
        <CardSlider />
        </div>
        
      </div>
      
    
  );
}

export default SkillPage;
