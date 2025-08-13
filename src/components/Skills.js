import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";

const GROUPS = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, note: "Component-driven UI, hooks, context", icon: <FaReact /> },
      { name: "JavaScript (ES6+)", level: 88, note: "Async, fetch, patterns" },
      { name: "HTML5 & CSS3/Tailwind", level: 95, note: "Semantic HTML & responsive CSS", icon: null },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js & Express", level: 85, note: "REST APIs, middleware, JWT auth", icon: <FaNodeJs /> },
      { name: "PostgreSQL / MongoDB", level: 80, note: "Relational design & NoSQL usage", icon: <FaDatabase /> },
      { name: "Redis (caching/queues)", level: 72, note: "Caching, pub/sub, rate limiting" },
    ],
  },
  {
    title: "DevOps & Data",
    skills: [
      { name: "Docker", level: 75, note: "Containerization & dev env", icon: <FaDocker /> },
      { name: "Python (Pandas)", level: 78, note: "ETL & data cleaning", icon: <FaPython /> },
      { name: "Git & Testing", level: 85, note: "Version control & tests", icon: <FaGitAlt /> },
    ],
  },
];

function Bar({ level }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
      <div className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all" style={{ width: `${level}%` }} />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-8" data-aos="fade-up">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {GROUPS.map((g) => (
            <div key={g.title} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800" data-aos="fade-up">
              <h3 className="font-bold text-xl mb-4">{g.title}</h3>
              <ul className="space-y-4">
                {g.skills.map((s) => (
                  <li key={s.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-2 font-semibold">
                        <span className="text-lg">{s.icon}</span> {s.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{s.level}%</span>
                    </div>
                    <Bar level={s.level} />
                    <p className="opacity-0 group-hover:opacity-100 transition text-sm text-gray-500 dark:text-gray-400 mt-1">{s.note || `How I use ${s.name}.`}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
