import React from "react";
import PageHeader from "../components/PageHeader";
import BackButton from "../components/BackButton";
import educationImg from "../Assets/Images/educationImg.png";
import { ExpandableCardDemo } from "../components/ExpendableCards";

function EducationPage() {
  return (
    <div className="min-h-screen bg-[#1f242d] flex flex-col items-start justify-start ">
      <BackButton />
      <PageHeader image={educationImg} title={"Education"} />
      <div className="pt-[18rem] px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-7xl mx-auto">
      <ExpandableCardDemo />
      </div>
      
    </div>
  );
}

export default EducationPage;
