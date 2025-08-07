import React, { useState, useEffect } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChartBar,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

function Navbar({ activeSection, onNavClick }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white bg-opacity-90 backdrop-blur shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div
          tabIndex={0}
          className="text-2xl font-bold text-blue-600 font-montserrat select-none cursor-default"
        >
          Evanson M.M.
        </div>
        <ul className="flex space-x-6">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => onNavClick(id)}
                className={`px-3 py-1 rounded-md font-semibold transition-colors duration-300 focus:outline-none ${
                  activeSection === id
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
                aria-label={`Go to ${label} section`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero({ onViewProjects }) {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white px-6 bg-blue-600"
    >
      <div className="relative z-10">
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
          className="mt-4 px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transform transition-transform focus:outline-none focus:ring-4 focus:ring-white"
        >
          View Projects
        </button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden shadow-md mb-6 md:mb-0 md:mr-10">
          <img src="/images/image.png" alt="Evanson Murimi" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            💡 <strong>Creative problem-solver</strong> using code and data to drive real-world impact. With hands-on experience in <strong>monitoring & evaluation</strong>, <strong>data collection</strong>, and <strong>reporting</strong>, I specialize in building responsive apps and dashboards that deliver insights and automation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            🛠️ <strong>Tech Stack:</strong> React • JavaScript • Python (Pandas) • Power BI • Excel
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            🚀 <strong>What I’ve Built:</strong><br />
            - Interactive dashboards for analyzing e-commerce sales trends<br />
            - RESTful APIs for task and data management<br />
            - Data leakage detection systems with real-time log analysis<br />
            <br />
            I'm driven by turning <strong>raw data into smart decisions</strong> — whether through sleek frontends or powerful analytics pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "ReactJS", proficiency: 85, icon: <FaReact className="text-sky-400" /> },
    { name: "HTML", proficiency: 95, icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", proficiency: 90, icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "JavaScript", proficiency: 88, icon: <FaJs className="text-yellow-400" /> },
    { name: "Python", proficiency: 80, icon: <FaPython className="text-blue-700" /> },
    { name: "Pandas", proficiency: 75, icon: <FaDatabase className="text-green-600" /> },
    { name: "Matplotlib", proficiency: 70, icon: <FaChartBar className="text-red-600" /> },
    { name: "Power BI", proficiency: 78, icon: <FaChartBar className="text-yellow-500" /> },
    { name: "Excel", proficiency: 95, icon: <FaDatabase className="text-green-700" /> },
    { name: "Git", proficiency: 85, icon: <FaCode className="text-orange-600" /> },
    { name: "VS Code", proficiency: 92, icon: <FaCode className="text-blue-600" /> },
    { name: "Linux CLI", proficiency: 75, icon: <FaCode className="text-gray-900" /> },
    { name: "Data Visualization", proficiency: 82, icon: <FaChartBar className="text-indigo-600" /> },
  ];

  function SkillBar({ name, proficiency, icon }) {
    return (
      <div className="flex items-center space-x-4 border-2 border-blue-600 rounded-full px-4 py-2 bg-blue-50 text-blue-700 font-semibold select-none">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center">
            <span>{name}</span>
            <span className="text-sm font-normal">{proficiency}%</span>
          </div>
          <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
            <div
              className="bg-blue-600 h-1 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${proficiency}%` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      id="skills"
      tabIndex={-1}
      className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-24 font-roboto"
    >
      <h2 className="text-4xl font-bold text-blue-600 border-b-4 border-blue-600 pb-2 mb-8 font-montserrat">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Sales Dashboard",
      tools: "Python, Pandas, Matplotlib, Power BI",
      description:
        "Analyze sales performance across months, best-selling products, and trends.",
      github: "#",
      image: "/images/premium_photo-e commerce.jpeg",
      color: "border-blue-600",
    },
    {
      id: 2,
      title: "Data Leakage Detection System",
      tools: "ReactJS, JavaScript, CSS",
      description:
        "Visualizes access logs and flags suspicious data usage patterns.",
      github: "#",
      image: "/images/data-leakage-detection.png",
      color: "border-green-600",
    },
    {
      id: 3,
      title: "Task Manager REST API",
      tools: "Node.js, Express, MongoDB",
      description: "Secure REST API for managing user tasks with JWT authentication and CRUD operations.",
      github: "#",
      live: "#",
      image: "/images/rest-api-model.webp",
      color: "border-purple-600",
    },
    {
      id: 4,
      title: "This Portfolio Website",
      tools: "React, CSS",
      description:
        "Responsive portfolio to showcase my skills, projects, and contact info.",
      github: "https://github.com/evanson/evanson-portfolio",
      live: "#",
      image: "https://via.placeholder.com/400x250/f9ca24/ffffff?text=Project+Image+4",
      color: "border-yellow-500",
    },
  ];

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-24 font-roboto"
    >
      <h2 className="text-4xl font-bold text-blue-600 border-b-4 border-blue-600 pb-2 mb-10 font-montserrat">
        Projects
      </h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {projects.map(({ id, title, tools, description, github, live, color, image }) => (
          <article
            key={id}
            tabIndex={0}
            className={`border-t-8 rounded-2xl shadow-lg flex flex-col justify-between transition-transform duration-300 hover:scale-[1.025] focus:scale-[1.025] outline-none ${color}`}
            aria-label={`Project: ${title}`}
          >
            <img
              src={image}
              alt={`Screenshot of the ${title} project`}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-700 mb-2 font-montserrat">
                {title}
              </h3>
              <p className="italic text-gray-600 mb-3">
                <strong>Tools:</strong> {tools}
              </p>
              <p className="text-gray-800 mb-6">{description}</p>
              <div className="flex space-x-4">
                {github && github !== "#" && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
                    aria-label={`GitHub repository for ${title}`}
                  >
                    GitHub
                  </a>
                )}
                {live && live !== "#" && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-green-500 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400"
                    aria-label={`Live demo of ${title}`}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-24 font-roboto"
    >
      <h2 className="text-4xl font-bold text-blue-600 border-b-4 border-blue-600 pb-2 mb-8 font-montserrat">
        Contact Me
      </h2>
      <form
        className="flex flex-col space-y-6"
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        target="_blank"
        noValidate
      >
        <label className="flex flex-col text-gray-700 font-semibold text-lg">
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="mt-1 rounded-lg border-2 border-gray-300 p-3 focus:border-blue-600 focus:outline-none transition"
          />
        </label>
        <label className="flex flex-col text-gray-700 font-semibold text-lg">
          Email
          <input
            type="email"
            name="email"
            required
            placeholder="your.email@example.com"
            className="mt-1 rounded-lg border-2 border-gray-300 p-3 focus:border-blue-600 focus:outline-none transition"
          />
        </label>
        <label className="flex flex-col text-gray-700 font-semibold text-lg">
          Message
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Write your message here..."
            className="mt-1 rounded-lg border-2 border-gray-300 p-3 resize-none focus:border-blue-600 focus:outline-none transition"
          ></textarea>
        </label>
        <button
          type="submit"
          className="self-start px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-bold shadow-md hover:from-purple-700 hover:to-blue-600 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400"
        >
          Send
        </button>
      </form>

      <div
        className="mt-10 flex justify-center space-x-8 text-3xl text-blue-600"
        aria-label="Social media links"
      >
        <a
          href="mailto:evanson@example.com"
          aria-label="Email Evanson Munene Murimi"
          title="Email"
          className="hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/evanson-murimi-51a771125"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
          className="hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/evanson96"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
          className="hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 font-montserrat select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-center md:text-left text-lg mb-2 md:mb-0">
          © 2025 Evanson Munene Murimi
        </p>
        <div className="flex space-x-8 text-2xl">
          <a
            href="mailto:evanson@example.com"
            aria-label="Email Evanson Munene Murimi"
            className="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/evanson-murimi-51a771125"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/evanson"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-white rounded"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => el.focus(), 600);
    }
  }

  function handleNavClick(id) {
    scrollToSection(id);
  }

  function handleViewProjectsClick() {
    scrollToSection("projects");
  }

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <main className="scroll-smooth pt-20">
        <Hero onViewProjects={handleViewProjectsClick} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;