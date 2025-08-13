import React from "react";
import { FaAward, FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <figure className="justify-self-center" data-aos="zoom-in">
          <img
            src="/images/image.png"
            alt="Evanson Munene professional headshot"
            className="w-48 h-48 rounded-full object-cover ring-4 ring-blue-500/30 shadow-lg"
          />
          <figcaption className="sr-only">Evanson Munene</figcaption>
        </figure>

        <div data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300">
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I am a versatile full-stack developer and data professional passionate about
            crafting responsive front-end experiences with React and building scalable backends
            and APIs using Node.js/Express or Python. In monitoring & evaluation settings, I convert
            complex data into actionable insights leveraging Pandas and Power BI.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <FaAward className="text-2xl text-yellow-500" />
              <p className="mt-2 font-semibold">15+ Projects</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Web, APIs & Dashboards</p>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <FaBriefcase className="text-2xl text-green-500" />
              <p className="mt-2 font-semibold">M&E Experience</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Field data systems & reporting</p>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <FaGraduationCap className="text-2xl text-blue-500" />
              <p className="mt-2 font-semibold">Continuous Learning</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Distributed systems, APIs, analytics
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 mt-12" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6">Journey & Professional Highlights</h3>
          <ol className="relative border-l border-gray-200 dark:border-gray-800 pl-6 space-y-8">
            <li>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-blue-600"></div>
              <h4 className="font-bold">Scalable Backend Systems</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Designed RESTful APIs and WebSocket services for real-time features (auth, rate limiting,
                pagination).
              </p>
            </li>

            <li>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-teal-600"></div>
              <h4 className="font-bold">Data Engineering & Dashboards</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built ETL pipelines and dashboards using Python (Pandas) and Power BI; automated reporting and validations.
              </p>
            </li>

            <li>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-purple-600"></div>
              <h4 className="font-bold">Cloud & DevOps Practices</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Containerized services with Docker and created repeatable builds; integrated simple CI checks and health endpoints.
              </p>
            </li>

            <li>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-emerald-600"></div>
              <h4 className="font-bold">Security & Data Privacy</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Implemented JWT authentication, role-based access controls, and secure transmission practices to safeguard sensitive data.
              </p>
            </li>

            <li>
              <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full bg-orange-500"></div>
              <h4 className="font-bold">Testing & Observability</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Added unit and integration tests, logging, and monitoring to reduce bugs and improve release quality.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
