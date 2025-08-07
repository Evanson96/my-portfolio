import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        action="https://formsubmit.co/evan.muri12@gmail.com"
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
          href="mailto:evan.muri12@gmail.com"
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

export default Contact;