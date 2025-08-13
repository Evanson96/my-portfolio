// src/components/Navbar.js
import React, { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Smooth scroll that accounts for navbar height and updates URL safely
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // height of the navbar so content won't hide under it
    const nav = document.querySelector("nav");
    const navHeight = nav ? nav.getBoundingClientRect().height : 0;

    const top = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
    window.scrollTo({ top, behavior: "smooth" });

    // update the URL hash WITHOUT causing a jump — use window.history.replaceState
    if (window && window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState(null, "", `#${id}`);
    } else {
      // fallback: setting location.hash (may jump in some browsers but is safe)
      window.location.hash = `#${id}`;
    }

    // close mobile menu if open
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "home")}
          className="text-2xl font-extrabold text-blue-700 dark:text-blue-300"
        >
          Evanson M.M.
        </a>

        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l}`}
                  onClick={(e) => scrollTo(e, l)}
                  className="font-semibold text-gray-800 dark:text-gray-100 hover:text-blue-600 transition"
                >
                  {l[0].toUpperCase() + l.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <DarkModeToggle />
          <button
            onClick={() => setOpen((s) => !s)}
            className="px-3 py-2 rounded border border-gray-200 dark:border-gray-700"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l}`}
                  onClick={(e) => scrollTo(e, l)}
                  className="block font-semibold text-gray-800 dark:text-gray-100 py-2"
                >
                  {l[0].toUpperCase() + l.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
