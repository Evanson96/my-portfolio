import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

export default Footer;