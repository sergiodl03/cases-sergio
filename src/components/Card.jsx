import React from "react";

const Card = ({ imagen, nombre, descripcion, precio }) => {
  return (
    <div
      className="bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl p-5 
                 transition-all duration-300 hover:bg-slate-750 
                 w-full max-w-md group h-120"
    >
      {/* Contenedor Imagen con zoom al hacer hover */}
      <div className="overflow-hidden rounded-xl mb-4">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Contenido */}
      <div className="flex flex-col gap-2">
        {/* Tipo / Badge */}
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-indigo-400 bg-indigo-500/10 w-fit px-2 py-1 rounded">
          {precio}
        </span>

        {/* Nombre */}
        <h3 className="capitalize font-bold text-2xl text-white mt-1">
          {nombre}
        </h3>
        
        {/* Descripción */}
        <p className="text-slate-400 text-sm leading-relaxed">
          {descripcion}
        </p>

        {/* Separador decorativo */}
        <div className="h-px w-full bg-slate-700 mt-4 "></div>
      </div>
    </div>
  );
};

export default Card;