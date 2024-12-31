import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="fixed top-8 left-8 cursor-pointer bg-white rounded-full z-10 group"
      onClick={() => navigate("/navigation")}
    >
      <IoArrowBack style={{ fontSize: "2rem" }} />
      <span className=" absolute left-12 top-1/2 transform -translate-y-1/2 text-black font-semibold bg-white rounded p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Back
      </span>
    </div>
  );
}

export default BackButton;
