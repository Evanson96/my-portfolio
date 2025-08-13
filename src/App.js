import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css"; // tailwind + smooth scroll

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-quart" });
  }, []);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
