import React from "react";

const POSTS = [
  { id: 1, title: "Building a Resilient Node.js API", excerpt: "Tips for writing reliable endpoints, handling errors, and paginating large datasets.", slug: "#" },
  { id: 2, title: "From CSV to Dashboard: ETL with Pandas", excerpt: "Practical steps to clean, aggregate, and visualize data for reporting.", slug: "#" },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8" data-aos="fade-up">Insights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {POSTS.map((p) => (
            <article key={p.id} className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800" data-aos="fade-up">
              <h3 className="font-bold text-xl"><a href={p.slug} className="hover:text-blue-600">{p.title}</a></h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.excerpt}</p>
              <a href={p.slug} className="mt-4 inline-block text-sm text-blue-600">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
