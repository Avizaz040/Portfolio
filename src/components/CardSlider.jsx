import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const skills = [
  {
    title: "Frontend Web Development",
    description: "Proficient in creating dynamic and user-friendly web applications using ReactJS and modern frameworks.",
  },
  {
    title: "ReactJS",
    description: "Skilled in building scalable, high-performance web applications with ReactJS and its ecosystem.",
  },
  {
    title: "TailwindCSS",
    description: "Expert in designing sleek and responsive user interfaces with TailwindCSS for efficient development.",
  },
  {
    title: "JavaScript",
    description: "Comprehensive knowledge of JavaScript for interactive and feature-rich web development.",
  },
  {
    title: "HTML & CSS",
    description: "Experienced in crafting well-structured and visually appealing web pages using HTML5 and CSS3.",
  },
  {
    title: "Computer Hardware & Networking",
    description: "In-depth expertise in computer hardware troubleshooting and network setup and optimization.",
  },
  {
    title: "MS Excel",
    description: "Advanced proficiency in MS Excel, including data analysis, visualization, and automation with macros.",
  },
  {
    title: "ChatGPT Integration",
    description: "Efficient use of ChatGPT for ideation, problem-solving, and enhancing productivity in development workflows.",
  },
];


const CardSlider = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setSkillIndex(next),
    responsive: [
      {
        breakpoint: 768, // Apply vertical settings for screens smaller than 768px
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto pb-4 mb-8 px-4">
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className={`p-8 h-[28rem] sm:h-[24rem] md:h-[25rem] content-center transform transition-transform duration-300 ${index === skillIndex ? 'scale-125 rounded-2xl ' : 'scale-100'} `}>
            <div className="card bg-white rounded-lg shadow-lg shadow-black p-6 min-h-[20rem] sm:min-h-[16rem] md:min-h-[20rem]  flex flex-col justify-evenly ">
              <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;