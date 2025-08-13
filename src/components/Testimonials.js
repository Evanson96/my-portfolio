import React from "react";

const TESTIMONIALS = [
  {
    name: "Jane Doe — Program Lead",
    role: "HIV Prevention Program",
    text: "Evanson delivered a clean, usable dashboard that transformed monthly reporting. Data quality improved and turnaround time shortened.",
  },
  {
    name: "John Smith — Product Manager",
    role: "Web App",
    text: "Reliable APIs and thoughtful front-end components. Evanson communicates well and produces maintainable code.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center mb-8" data-aos="fade-up">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700" data-aos="fade-up">
              <p className="text-gray-700 dark:text-gray-300">“{t.text}”</p>
              <footer className="mt-4 text-sm text-gray-500 dark:text-gray-400">— {t.name}, {t.role}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
