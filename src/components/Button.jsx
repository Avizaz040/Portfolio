import React, { useState } from "react";

function Button({ name, link }) {
  const [isPinging, setIsPinging] = useState(false);

  const handleClick = () => {
    // Trigger the ping animation
    setIsPinging(true);

    // Reset the ping animation after 1 second (default duration of `animate-ping`)
    setTimeout(() => {
      setIsPinging(false);
    }, 1000);

    // Call the provided link function if it exists
    setTimeout(() => {
      if (link) {
        link();
      }
    }, 500);
  };

  return (
    <div className="relative inline-block animate-bounce hover:animate-none">
      <button
        className="p-[3px] relative"
        onClick={handleClick}
      >
        {/* Ping Effect */}
        {isPinging && (
          <div className="absolute inset-0 w-full h-full bg-purple-500 rounded-lg animate-ping"></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg " />
        <div className="px-8 py-2 bg-slate-900 rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
          {name}
        </div>
      </button>
    </div>
  );
}

export default Button;
