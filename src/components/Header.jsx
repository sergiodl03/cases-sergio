import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          CASA<span className="text-indigo-500">SERGIO</span>
        </Link>

        <div className="hidden lg:flex gap-10">
          {links.map((link, index) =>
            link.label == "Reservar" ? (
              <Link
                key={index}
                to={link.url}
                className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-full 
                          hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] 
                          transition-all duration-300 tracking-widest uppercase text-xs"
              >
                {link.label}
              </Link>
            ) : (
              <Link
                key={index}
                to={link.url}
                className=" py-2.5 text-white font-medium hover:text-indigo-400 transition-colors 
                          tracking-widest uppercase text-sm"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`${isOpen ? "flex" : "hidden"} lg:hidden flex-col bg-slate-900 border-b border-white/10 py-8 gap-6 text-center shadow-2xl`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-semibold tracking-[0.2em] uppercase ${
              link.label === "Reservar" ? "text-indigo-400" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Header;
