import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import Espacio from "../assets/galaxia.webp";
import Card from "../components/Card";

function Home() {
  const { t, i18n } = useTranslation();
 


  return (
    <div className="w-full bg-slate-900 overflow-x-hidden">
      {/* ... (Secciones de Hero y Vía Láctea se mantienen igual) ... */}
      <div
        className="w-full bg-cover bg-center h-150 flex items-center justify-center"
        style={{ backgroundImage: `url(${Espacio})` }}
      >
        <div className="max-w-2xl mx-auto px-6 py-8">
          <motion.p
            className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg italic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {t('home.inicio')}
          </motion.p>
        </div>
      </div>

      <div className="w-full h-[500px] flex items-center justify-center overflow-hidden bg-black">
        <div
          className="w-[70%] h-full bg-cover bg-center flex items-center justify-center relative group"
          style={{ backgroundImage: `url("/via-lactea1.avif")` }}
        >
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500"></div>
          <p className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-2xl italic z-10 relative">
            {t('home.70')}
          </p>
        </div>
        <div
          className="w-[30%] h-full bg-cover bg-center flex items-center justify-center relative group "
          style={{ backgroundImage: `url("/tierra1.avif")` }}
        >
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500"></div>
          <p className="text-white text-2xl md:text-5xl font-bold text-center drop-shadow-2xl italic z-10 relative px-4">
            {t('home.30')}
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
