import React, { useState } from "react";
// 1. Importamos el JSON (asegúrate de que la ruta sea correcta)
import datosPlatos from "../components/platos.json"; 
import { Boton } from '../components/Boton';
import Card from '../components/Card';

function Carta() {
  // 2. Usamos la primera categoría del JSON como estado inicial
  const categorias = Object.keys(datosPlatos); // ['picar', 'platos', 'postres']
  const [categoria, setCategoria] = useState(categorias[0]);
  const [platoSeleccionado, setPlatoSeleccionado] = useState(null);

  return (
    <div className="flex flex-col items-center py-12 px-6 text-white min-h-screen bg-slate-900">
      <h1 className="text-4xl font-black mb-10 uppercase tracking-tighter">
        Nuestra <span className="text-indigo-500">Carta</span>
      </h1>

      {/* 3. Renderizamos los botones basados en las llaves del JSON */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categorias.map((cat) => (
          <Boton 
            key={cat}
            texto={cat} 
            onClick={() => {
              setCategoria(cat);
              setPlatoSeleccionado(null);
            }}
            className={categoria === cat ? "bg-indigo-600 shadow-lg" : "bg-slate-800"}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        
        {/* LADO IZQUIERDO: LISTA DINÁMICA */}
        <div className="flex flex-col border-t border-white/10">
          {datosPlatos[categoria].map((plato, index) => (
            <div 
              key={index}
              onClick={() => setPlatoSeleccionado(plato)}
              className="group flex justify-between items-center py-6 px-4 border-b border-white/10 hover:bg-white/5 cursor-pointer transition-all"
            >
              <div>
                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors uppercase">
                  {plato.nombre}
                </h3>
                <p className="text-indigo-500 font-mono text-sm">{plato.precio}</p>
              </div>
              <span className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                VER →
              </span>
            </div>
          ))}
        </div>

        {/* LADO DERECHO: TU CARD RECIBIENDO DATOS DEL JSON */}
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
              <div className="w-[350px] h-[400px] border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-slate-600 p-8 text-center italic">
                <p>Explora el menú de Casa Sergio</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Carta;