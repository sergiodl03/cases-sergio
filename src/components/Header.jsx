import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-black tracking-tighter text-white"
        >
          CASA<span className="text-indigo-500">SERGIO</span>
        </Link>

        {/* --- MENÚ DESKTOP --- */}
        <div className="hidden lg:flex gap-10 items-center">
          {links.map((link, index) =>
            // Cambiamos la condición: ahora preguntamos si es botón
            link.isButton ? (
              <Link
                key={index}
                to={link.url}
                className="px-6 py-2.5 bg-indigo-600 text-white font-bold rounded-full 
                          hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] 
                          transition-all duration-300 tracking-widest uppercase text-xs"
              >
                {t(link.labelKey)} {/* Usamos la traducción */}
              </Link>
            ) : (
              <Link
                key={index}
                to={link.url}
                className="py-2.5 text-white font-medium hover:text-indigo-400 transition-colors 
                          tracking-widest uppercase text-sm"
              >
                {t(link.labelKey)} {/* Usamos la traducción */}
              </Link>
            ),
          )}

          {/* Selector de idiomas */}
          <div className="flex gap-2 ml-4">
            <button
              className={`text-xs ${i18n.language === "en" ? "text-indigo-400" : "text-white"}`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
            <span className="text-white/20">|</span>
            <button
              className={`text-xs ${i18n.language === "es" ? "text-indigo-400" : "text-white"}`}
              onClick={() => i18n.changeLanguage("es")}
            >
              ES
            </button>
             <span className="text-white/20">|</span>
            <button
              className={`text-xs ${i18n.language === "ca" ? "text-indigo-400" : "text-white"}`}
              onClick={() => i18n.changeLanguage("ca")}
            >
              CA
            </button>
          </div>
        </div>

        {/* Botón Hamburguesa */}
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

      {/* --- MENÚ MÓVIL --- */}
      <div
        className={`${isOpen ? "flex" : "hidden"} lg:hidden flex-col bg-slate-900 border-b border-white/10 py-8 gap-6 text-center shadow-2xl`}
      >
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-semibold tracking-[0.2em] uppercase ${
              link.isButton ? "text-indigo-400" : "text-white"
            }`}
          >
            {t(link.labelKey)}
          </Link>
        ))}
        {/* Idiomas en móvil */}
        {/* Selector de idiomas Desktop */}
        <div className="flex gap-2 ml-4">
          <button
            className={`text-xs font-bold transition-colors ${
              i18n.resolvedLanguage === "en"
                ? "text-indigo-400 underline underline-offset-4"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
          <span className="text-white/20">|</span>
          <button
            className={`text-xs font-bold transition-colors ${
              i18n.resolvedLanguage === "es"
                ? "text-indigo-400 underline underline-offset-4"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
          <span className="text-white/20">|</span>
          <button
            className={`text-xs font-bold transition-colors ${
              i18n.resolvedLanguage === "ca"
                ? "text-indigo-400 underline underline-offset-4"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => i18n.changeLanguage("ca")}
          >
            CA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
