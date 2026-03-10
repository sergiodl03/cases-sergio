import React from "react";
import { useTranslation } from "react-i18next";

function Instalaciones() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2 className="mt-5 text-white text-3xl md:text-5xl font-black text-center drop-shadow-lg italic mb-8 uppercase tracking-tighter">
        {t("instalaciones.titulo1")}{" "}
        <span className="text-indigo-500">{t("instalaciones.titulo2")}</span>
      </h2>

      {/* BLOQUE 1 (Versión Responsive sugerida) */}
      <div className="flex flex-col md:flex-row relative overflow-hidden">
        {/* Imagen: En móvil ocupa todo el ancho, en PC el 60% */}
        <div
          className="w-full md:w-[60%] bg-cover bg-center h-80 md:h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/guarderia.avif")`,
          }}
        >
          <h3 className="text-white text-3xl md:text-4xl font-black italic uppercase drop-shadow-lg">
            {t("instalaciones.ninos1")}
          </h3>
        </div>

        {/* Contenido: En móvil sin margen negativo, en PC invade la imagen */}
        <div className="w-full md:w-[40%] md:h-150 flex items-center justify-start md:-ml-32 z-10 p-4 md:p-0">
          <div className="flex flex-col items-center justify-center text-center h-fit min-h-[250px] md:min-h-[300px] bg-black/40 p-8 max-w-md shadow-2xl backdrop-blur-md">
            <h4 className="text-indigo-500 text-xl md:text-2xl font-black uppercase italic mb-4">
              {t("instalaciones.ninos2")}
            </h4>
            <p className="text-white text-base md:text-lg leading-relaxed">
              {t("instalaciones.ninos3")}
            </p>
          </div>
        </div>
      </div>

      <div className="h-30"></div>

      {/* BLOQUE 2: PERROS */}
      <div className="flex flex-col md:flex-row relative overflow-hidden">
        {/* Bloque Contenido (ahora a la izquierda, ocupando el 40% para que la imagen luzca más) */}
        <div className="w-full md:w-[40%] h-150 flex items-center justify-end -mr-32 z-10">
          <div className="flex flex-col items-center justify-center text-center h-fit min-h-[300px] bg-black/40 p-8 max-w-md shadow-2xl backdrop-blur-md">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              {t("instalaciones.perros2")}
            </h4>
            <p className="text-white text-lg leading-relaxed">
              {t("instalaciones.perros3")}
            </p>
          </div>
        </div>

        {/* Bloque Imagen (ahora a la derecha, ocupando el 60%) */}
        <div
          className="w-full md:w-[60%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/perros1.avif")`,
          }}
        >
          <h3 className="text-white text-4xl font-black italic uppercase drop-shadow-lg">
            {t("instalaciones.perros1")}
          </h3>
        </div>
      </div>

      <div className="h-30"></div>

      {/* BLOQUE 3: TERRAZA */}
      <div className="flex flex-col md:flex-row relative overflow-hidden">
        {/* Bloque Imagen (60%) */}
        <div
          className="w-full md:w-[60%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/terraza.avif")`,
          }}
        >
          <h3 className="text-white text-4xl font-black italic uppercase drop-shadow-lg">
            {t("instalaciones.exterior1")}
          </h3>
        </div>

        {/* Bloque Contenido (40%) que invade la imagen desde la derecha */}
        <div className="w-full md:w-[40%] h-150 flex items-center justify-start -ml-32 z-10">
          <div className="flex flex-col items-center justify-center text-center h-fit min-h-[300px] bg-black/40 p-8 max-w-md shadow-2xl backdrop-blur-md">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              {t("instalaciones.exterior2")}
            </h4>
            <p className="text-white text-lg leading-relaxed">
              {t("instalaciones.exterior3")}
            </p>
          </div>
        </div>
      </div>

      <div className="h-30"></div>

      {/* BLOQUE 4: BARRA */}
      <div className="flex flex-col md:flex-row relative overflow-hidden">
        {/* Bloque Contenido (40%) - Invade hacia la derecha */}
        <div className="w-full md:w-[40%] h-150 flex items-center justify-end -mr-32 z-10">
          <div className="flex flex-col items-center justify-center text-center h-fit min-h-[300px] bg-black/40 p-8 max-w-md shadow-2xl backdrop-blur-md">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              {t("instalaciones.interior2")}
            </h4>
            <p className="text-white text-lg leading-relaxed">
              {t("instalaciones.interior3")}
            </p>
          </div>
        </div>

        {/* Bloque Imagen (60%) */}
        <div
          className="w-full md:w-[60%] bg-cover bg-center h-150 flex items-center justify-center text-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/barra.avif")`,
          }}
        >
          <h3 className="text-white text-4xl font-black italic uppercase drop-shadow-lg">
            {t("instalaciones.interior1")}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Instalaciones;
