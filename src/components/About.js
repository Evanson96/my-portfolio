import React from "react";

const About = () => {
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
};

export default About;