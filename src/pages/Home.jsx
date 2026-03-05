import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Espacio from "../assets/galaxia.webp";
import Card from "../components/Card";
import datosPlatos from "../components/platos.json";

function Home() {
  const [index, setIndex] = useState(0);
  const categoria = datosPlatos.especialidades;
  const [esMovil, setEsMovil] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funciones de navegación
  const nextStep = () => {
    setIndex((prev) => (prev + 1) % categoria.length);
  };

  const prevStep = () => {
    setIndex((prev) => (prev - 1 + categoria.length) % categoria.length);
  };

  const visualizacion = esMovil
    ? [categoria[index % categoria.length]]
    : [
        categoria[index % categoria.length],
        categoria[(index + 1) % categoria.length],
        categoria[(index + 2) % categoria.length],
      ];

  // Auto-play (opcional, puedes comentarlo si prefieres que solo sea manual)
  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [index]);

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
            Casa Sergio una experiencia fuera de este planeta
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
            70% De la Vía Láctea
          </p>
        </div>
        <div
          className="w-[30%] h-full bg-cover bg-center flex items-center justify-center relative group "
          style={{ backgroundImage: `url("/tierra1.avif")` }}
        >
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500"></div>
          <p className="text-white text-2xl md:text-5xl font-bold text-center drop-shadow-2xl italic z-10 relative px-4">
            30% Terrestre
          </p>
        </div>
      </div>

      <div className="w-full py-20 flex flex-col items-center bg-slate-900">
        <p className="text-white text-2xl md:text-3xl font-bold text-center mb-10 italic">
          Estas son las especialidades de la casa
        </p>

        {/* CONTENEDOR RELATIVO */}
        <div className="relative w-full max-w-7xl flex items-center justify-center">
          {/* Flechas en PC (Fuera del área de las cartas) */}
          <button
            onClick={prevStep}
            className="hidden lg:block absolute left-4 z-40 bg-white/10 p-4 rounded-full text-white hover:bg-white/20"
          >
            <span className="text-2xl">&#10094;</span>
          </button>

          {/* ÁREA VISIBLE (Aquí está el secreto) */}
          <div className="w-full overflow-hidden px-4 sm:px-10">
            {/* Usamos justify-center para PC y justify-start para móvil.
         El gap-6 separa las cartas para que no se toquen.
      */}
            <div className="flex justify-center items-start gap-6 min-h-[500px]">
              <AnimatePresence mode="popLayout" initial={false}>
                {visualizacion.map((plato) => (
                  <motion.div
                    key={plato.nombre}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    /* En móvil: w-[calc(100vw-64px)] asegura que la carta sea casi del ancho 
                 de la pantalla pero dejando margen para que se vea ENTERA.
              */
                    className="w-[calc(100vw-64px)] sm:w-[300px] md:w-[350px] flex-shrink-0 flex justify-center"
                  >
                    <div className="w-full max-w-full">
                      <Card
                        imagen={plato.imagen}
                        nombre={plato.nombre}
                        descripcion={plato.descripcion}
                        tipo={plato.tipo}
                        precio={plato.precio}
                        alergeno={plato.alergenos}
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <button
            onClick={nextStep}
            className="hidden lg:block absolute right-4 z-40 bg-white/10 p-4 rounded-full text-white hover:bg-white/20"
          >
            <span className="text-2xl">&#10095;</span>
          </button>
        </div>

        {/* CONTROLES MÓVIL (Indispensables para que la carta no se tape) */}
        <div className="flex gap-12 mt-6 md:hidden">
          <button
            onClick={prevStep}
            className="text-white bg-slate-800 p-4 rounded-full active:scale-90 transition-transform"
          >
            <span className="text-3xl">&#10094;</span>
          </button>
          <button
            onClick={nextStep}
            className="text-white bg-slate-800 p-4 rounded-full active:scale-90 transition-transform"
          >
            <span className="text-3xl">&#10095;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
