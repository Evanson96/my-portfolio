import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Evanson Munene Murimi — All rights reserved.</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Built with React & Tailwind • Optimized for SEO & Accessibility</p>
      </div>
    </footer>
  );
}
