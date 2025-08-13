import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "evan.muti12@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-6" data-aos="fade-up">Contact</h2>

        <form data-aos="fade-up" className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900" action="https://formsubmit.co/evan.muti12@gmail.com" method="POST" target="_blank">
          <input type="hidden" name="_captcha" value="false" />
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="font-semibold">Name</span>
              <input name="name" type="text" required className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-transparent focus:ring-2 focus:ring-blue-500" />
            </label>
            <label className="block">
              <span className="font-semibold">Email</span>
              <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-transparent focus:ring-2 focus:ring-blue-500" />
            </label>
          </div>

          <label className="block mt-6">
            <span className="font-semibold">Message</span>
            <textarea name="message" rows="6" required className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-transparent focus:ring-2 focus:ring-blue-500" />
          </label>

          <div className="mt-6 flex items-center gap-4">
            <button type="submit" className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700">Send Message</button>

            <button type="button" onClick={copyEmail} className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700">
              {copied ? <FaCheck /> : <FaCopy />} {copied ? "Copied!" : "Copy Email"}
            </button>

            <div className="ms-auto flex items-center gap-5 text-2xl">
              <a href={`mailto:${email}`} aria-label="Email"><FaEnvelope /></a>
              <a href="https://linkedin.com/in/evanson-murimi-51a771125" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://github.com/evanson96" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
