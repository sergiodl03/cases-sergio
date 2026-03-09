import React, { useState, useEffect } from "react";
import { Boton } from "../components/Boton";
import Card from "../components/Card";
import { useTranslation } from "react-i18next";

function Carta() {
  const { t, i18n } = useTranslation("platos");

  // 1. Intentamos obtener los datos del sistema de traducción
  const datosTraducidos = i18n.getResourceBundle(i18n.language, "platos");

  // 2. Si datosTraducidos es un string (que dice "platos") o está vacío,
  // usamos el JSON importado como base. Si es un objeto real, usamos la traducción.

  // 3. Sincronizamos cuando la traducción termine de cargar

  // 4. Categorías seguras
  const categorias = Object.keys(datosTraducidos);
  const [categoria, setCategoria] = useState(categorias[0]);
  const [platoSeleccionado, setPlatoSeleccionado] = useState(null);

  // 5. Si cambias de pestaña (categoría) y los datos cambian, reseteamos selección
  useEffect(() => {
    if (!categorias.includes(categoria)) {
      setCategoria(categorias[0]);
    }
  }, [datosTraducidos]);

  return (
    <div className="flex flex-col items-center py-12 px-6 text-white min-h-screen bg-slate-900">
      <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">
        Nuestra <span className="text-indigo-500">Carta</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categorias.map((cat) => (
          <Boton
            key={cat}
            // Usamos cat (la llave) para la lógica, pero t() para el texto visual
            texto={t(`translation:categorias.${cat}`, { defaultValue: cat })}
            onClick={() => setCategoria(cat)}
            className={categoria === cat ? "bg-indigo-600" : "bg-slate-800"}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="flex flex-col border-t border-white/10">
          {/* Usamos el operador ? para evitar errores de lectura */}
          {datosTraducidos[categoria]?.map((plato, index) => (
            <div
              key={index}
              onClick={() => setPlatoSeleccionado(plato)}
              className="group flex justify-between items-center py-6 px-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-all"
            >
              <div>
                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors uppercase">
                  {plato.nombre}
                </h3>
                <p className="text-indigo-500 font-mono text-sm">
                  {plato.precio}
                </p>
              </div>
              <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-all font-bold">
                {i18n.language === "es" ? "VER →" : "VIEW →"}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex justify-center">
          <div className="sticky top-32 h-fit">
            {platoSeleccionado ? (
              <div className="animate-in fade-in zoom-in duration-300">
                <Card
                  imagen={platoSeleccionado.imagen}
                  nombre={platoSeleccionado.nombre}
                  descripcion={platoSeleccionado.descripcion}
                  precio={platoSeleccionado.precio}
                />
              </div>
            ) : (
              <div className="w-[350px] h-[400px] border-2 border-dashed border-white/5 rounded-3xl flex items-center justify-center text-slate-600 p-8 text-center italic">
                <p>Menú estelar de Casa Sergio</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carta;
