import React from "react";

function Instalaciones() {
  return (
    <div>
      <h2 className="mt-5 text-white text-3xl md:text-5xl font-black text-center drop-shadow-lg italic mb-8 uppercase tracking-tighter">
        Nuestras <span className="text-indigo-500">instalaciones</span>
      </h2>

      {/* BLOQUE 1: PARQUE DE BOLAS */}
      <div className="flex">
        <div
          className="w-[50%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("/guarderia.avif")`,
          }}
        >
          <h3 className="text-white text-3xl font-black italic uppercase">
            Zona para los niños
          </h3>
        </div>
        <div className="w-[50%] h-150 flex flex-col items-end justify-center p-10">
          {/* El div hijo con fondo oscuro y alineación a la derecha */}
          <div className="bg-black/40 p-8 border-indigo-500 text-right max-w-md shadow-2xl backdrop-blur-sm">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              Diversión Segura
            </h4>
            <p className="text-white text-lg">
              Un espacio diseñado para que los más pequeños disfruten mientras
              tú te relajas.
            </p>
          </div>
        </div>
      </div>

      <div className="h-30"></div>

      {/* BLOQUE 2: PERROS */}
      <div className="flex">
        <div className="w-[50%] h-150 flex flex-col items-start justify-center p-10 text-center text-right">
          <div className="bg-black/40 p-8 border-indigo-500 text-left max-w-md shadow-2xl backdrop-blur-sm">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              Zona para los perros
            </h4>
            <p className="text-white text-lg">
              Tu mejor amigo es bienvenido. Contamos con espacios adaptados para
              que no se quede en casa.
            </p>
          </div>
        </div>
        <div
          className="w-[50%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("/perros1.avif")`,
          }}
        >
          <h3 className="text-white text-3xl font-black italic uppercase">
            Zona para los perros
          </h3>
        </div>
      </div>

      <div className="h-30"></div>

      {/* BLOQUE 3: TERRAZA */}
      <div className="flex">
        <div
          className="w-[50%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("/terraza.avif")`,
          }}
        >
          <h3 className="text-white text-3xl font-black italic uppercase">
            Exterior
          </h3>
        </div>
        <div className="w-[50%] h-150 flex flex-col items-end justify-center p-10 text-center">
          <div className="bg-black/40 p-8 border-indigo-500 text-right max-w-md shadow-2xl backdrop-blur-sm">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              La Terraza
            </h4>
            <p className="text-white text-lg">
              Ambiente al aire libre ideal para disfrutar del sol o de las
              noches estrelladas.
            </p>
          </div>
        </div>
      </div>

      <div className="h-30"></div>

      {/* BLOQUE 4: BARRA */}
      <div className="flex">
        <div className="w-[50%] h-150 flex flex-col items-start justify-center p-10 text-center">
          <div className="bg-black/40 p-8 border-indigo-500 text-left max-w-md shadow-2xl backdrop-blur-sm">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              La barra
            </h4>
            <p className="text-white text-lg">
              Nuestra barra es el alma del local, donde preparamos tus bebidas
              favoritas al momento.
            </p>
          </div>
        </div>
        <div
          className="w-[50%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url("/barra.avif")`,
          }}
        >
          <h3 className="text-white text-3xl font-black italic uppercase">
            Interior
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Instalaciones;
