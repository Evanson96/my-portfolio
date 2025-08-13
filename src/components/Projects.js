import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Sales Dashboard",
    tools: ["Python", "Pandas", "Matplotlib", "Power BI"],
    img: "/images/premium_photo-e commerce.jpeg",
    desc: "Interactive dashboard for sales analytics and trend detection.",
    details: "ETL pipelines, aggregation, scheduled reports, filterable visuals.",
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Data Leakage Detection System",
    tools: ["React", "Node.js", "Elasticsearch"],
    img: "/images/data-leakage-detection.png",
    desc: "Real-time log visualization and anomaly detection for suspicious access.",
    details: "Streaming logs, alerts, pattern-matching rules, basic ML scoring.",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Task Manager REST API",
    tools: ["Node.js", "Express", "MongoDB", "JWT"],
    img: "/images/rest-api-model.webp",
    desc: "Secure REST API for task CRUD with auth and pagination.",
    details: "JWT auth, validation, pagination, role-based access, tests (Jest).",
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "Real-time Chat Server (WebSocket)",
    tools: ["Node.js", "Socket.IO", "Redis", "Docker"],
    img: "/images/chatserver.png",
    desc: "Horizontally-scalable chat server with rooms, presence, and typing indicators.",
    details:
`Architecture:
- Node.js + Socket.IO for connection handling
- Redis (pub/sub) for multi-instance broadcasting
- JWT for authentication
- Dockerized deployment
Key features: room join/leave, message persistence, presence, basic rate-limiting`,
    github: "#",
    live: "#",
  },
  {
    id: 5,
    title: "Distributed Task Queue & Worker",
    tools: ["Python", "Redis", "Celery", "Postgres", "Docker"],
    img: "/images/task.png",
    desc: "Background processing for heavy ETL tasks, image processing, and scheduled jobs.",
    details:
`Architecture:
- Celery workers with Redis broker and Postgres results
- Docker-compose orchestration
- Retries, idempotency, scheduled tasks
Use cases: CSV ingestion, image processing, scheduled reporting`,
    github: "#",
    live: "#",
  },
  {
    id: 6,
    title: "This Portfolio (Refactor)",
    tools: ["React", "Tailwind", "AOS"],
    img: "/images/image.png",
    desc: "Refactored portfolio with SEO, dark mode and accessibility improvements.",
    details: "Responsive layout, AOS animations, project modals, dark-mode state persistence.",
    github: "https://github.com/evanson96",
    live: "#",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-8" data-aos="fade-up">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p) => (
            <article key={p.id} data-aos="fade-up" className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-xl transition">
              <button onClick={() => setActive(p)} className="text-left w-full">
                <img src={p.img} alt={`${p.title} screenshot`} className="w-full h-44 object-cover group-hover:scale-[1.02] transition" />
                <div className="p-5">
                  <h3 className="font-bold text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tools.map((t) => <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{t}</span>)}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
