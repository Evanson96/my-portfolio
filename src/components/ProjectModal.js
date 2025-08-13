import React from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const { title, tools, img, desc, github, live, details } = project;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-3xl w-full overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
        <img src={img} alt={`${title} screenshot`} className="w-full h-56 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-extrabold">{title}</h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">{desc}</p>
          {details && <pre className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm overflow-auto"><code>{details}</code></pre>}
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => <span key={t} className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{t}</span>)}
          </div>
          <div className="mt-6 flex gap-3">
            {github && github !== "#" && (<a href={github} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900">GitHub</a>)}
            {live && live !== "#" && (<a href={live} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full bg-blue-600 text-white">Live Demo</a>)}
            <button onClick={onClose} className="ms-auto px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
