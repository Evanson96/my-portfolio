import React, { useState } from "react";

const Navbar = ({ activeSection, onNavClick }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 bg-white/80 backdrop-blur z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1
          className="text-xl font-bold text-blue-600 font-montserrat cursor-pointer"
          onClick={() => onNavClick("home")}
        >
          Evanson M.M.
        </h1>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-blue-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => onNavClick(id)}
                className={`px-3 py-1 rounded-md font-semibold transition ${
                  activeSection === id
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <ul className="md:hidden bg-white px-4 py-4 flex flex-col items-center gap-3 shadow-lg">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => {
                  onNavClick(id);
                  setOpen(false);
                }}
                className={`px-4 py-2 rounded-md font-semibold transition ${
                  activeSection === id
                    ? "bg-blue-600 text-white"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
