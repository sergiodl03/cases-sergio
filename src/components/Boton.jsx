import React from "react";
import { Link } from "react-router-dom";

export const Boton = ({ texto, onClick, to, className = "", type = "button" }) => {
  
  // Estilos base: Eliminamos las variables var() y usamos colores directos de Tailwind
  // He puesto un azul índigo que resalta sobre el slate-900
  const estilosBase = `
    px-6 py-2.5 rounded-xl font-bold tracking-wide transition-all duration-200
    bg-indigo-600 text-white 
    hover:bg-indigo-500 hover:shadow-[0_0_15px_rgba(79,70,229,0.4)]
    active:scale-95 text-center inline-block capitalize
  `;

  const estilos = `${estilosBase} ${className}`;

  if (to) {
    return (
      <Link to={to} className={estilos}>
        {texto}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={estilos}>
      {texto}
    </button>
  );
};