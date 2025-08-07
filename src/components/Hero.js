import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ onViewProjects }) => {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white px-6
                 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"
    >
      <div className="absolute inset-0 z-0 opacity-20 animate-bg-pan">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blue-300 rounded-full mix-blend-overlay blur-3xl opacity-50 animate-pulse-slow-reverse"></div>
      </div>
      
      <div className="relative z-10 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold font-montserrat mb-4 drop-shadow-lg">
          Evanson Munene Murimi
        </h1>
        <p className="text-xl md:text-2xl font-roboto italic mb-6">
          <Typewriter
            words={[
              "Frontend Developer & Data Enthusiast",
              "ReactJS | Python | Power BI",
              "Building Beautiful Dashboards",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <button
          onClick={onViewProjects}
          className="mt-4 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full
                     shadow-lg hover:bg-blue-50 hover:scale-105 transform transition-transform
                     focus:outline-none focus:ring-4 focus:ring-white animate-bounce-on-load"
        >
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;