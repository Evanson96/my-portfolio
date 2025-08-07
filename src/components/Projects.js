import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Sales Dashboard",
    tools: "Python, Pandas, Matplotlib, Power BI",
    description:
      "Analyze sales performance across months, best-selling products, and trends.",
    github: "https://github.com/evanson/sales-dashboard",
    live: "https://sales-dashboard.vercel.app",
    image: "/images/premium_photo-e commerce.jpeg",
    color: "border-blue-600",
  },
  {
    id: 2,
    title: "Data Leakage Detection System",
    tools: "ReactJS, JavaScript, CSS",
    description:
      "Visualizes access logs and flags suspicious data usage patterns.",
    github: "https://github.com/evanson/leakage-detection",
    live: "https://leakage-detection.vercel.app",
    image: "/images/data-leakage-detection.png",
    color: "border-green-600",
  },
  {
    id: 3,
    title: "Task Manager REST API",
    tools: "Node.js, Express, MongoDB",
    description: "Secure REST API for managing user tasks with JWT authentication and CRUD operations.",
    github: "https://github.com/evanson/task-manager-api",
    live: "https://task-manager-api.vercel.app",
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
    live: "https://evanson-portfolio.vercel.app",
    image: "https://via.placeholder.com/400x250/f9ca24/ffffff?text=Project+Image+4",
    color: "border-yellow-500",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      tabIndex={-1}
      className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-24 font-roboto animate-fade-in-up"
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
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400"
                    aria-label={`GitHub repository for ${title}`}
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                )}
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-5 py-2 bg-green-500 text-white rounded-full font-semibold shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-400"
                    aria-label={`Live demo of ${title}`}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
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

export default Projects;