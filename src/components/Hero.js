import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center text-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl px-6 text-white" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-extrabold">Evanson Munene Murimi</h1>

        <h2 className="mt-4 text-xl md:text-2xl font-semibold">
          <Typewriter
            words={[
              "Frontend React Developer",
              "Backend & API Engineer",
              "Data Analyst & Dashboard Builder",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={55}
            deleteSpeed={40}
            delaySpeed={1400}
          />
        </h2>

        <p className="mt-6 text-white/90 leading-relaxed">
          I build production-ready web applications and robust backend systems — React for the client, Node/Express or Python for the server, and SQL/NoSQL where it matters.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 rounded-full bg-white text-blue-700 font-bold shadow hover:scale-[1.02] transition" onClick={(e)=>e.preventDefault()}>View Projects</a>
          <a href="#contact" className="px-6 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition" onClick={(e)=>e.preventDefault()}>Hire Me</a>
        </div>
      </div>
    </section>
  );
}
