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
  // Mostramos 3 platos a la vez.
  // Usamos el módulo (%) para que cuando llegue al final, vuelva al principio sin romperse.
  const visualizacion = esMovil
  ? [
      categoria[index % categoria.length],
      categoria[(index + 1) % categoria.length],
    ]
  : [
      categoria[index % categoria.length],
      categoria[(index + 1) % categoria.length],
      categoria[(index + 2) % categoria.length],
    ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % categoria.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  

  return (
    <div className="w-full bg-slate-900 overflow-x-hidden">
      
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

      {/* SECCIÓN DE ESPECIALIDADES - CARRUSEL TRIPLE */}
      <div className="w-full py-20 space-y-8 flex flex-col items-center">
        <p className="text-white text-2xl md:text-3xl font-bold text-center drop-shadow-lg italic">
          Estas son las especialidades de la casa
        </p>

        {/* CONTENEDOR DE LAS 3 CARDS */}
        <div className="flex justify-center gap-6 w-full max-w-6xl px-4 overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visualizacion.map((plato, i) => (
              <motion.div
                key={plato.nombre} // El nombre es la clave para la animación
                layout // Esto hace que las cartas se deslicen suavemente a su nueva posición
                initial={{ opacity: 0, x: 100 }} // Aparecen por la derecha
                animate={{ opacity: 1, x: 0 }} // Se quedan en el centro
                exit={{ opacity: 0, x: -100 }} // Desaparecen por la izquierda
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-1/2 md:w-1/3 flex-shrink-0"
              >
                <Card
                  imagen={plato.imagen}
                  nombre={plato.nombre}
                  descripcion={plato.descripcion}
                  tipo={plato.tipo}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* INDICADORES */}
        <div className="flex gap-2">
          {categoria.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "bg-blue-500 w-8" : "bg-slate-700 w-2"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
