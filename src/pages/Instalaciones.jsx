import React from "react";
import { useTranslation } from "react-i18next";

function Instalaciones() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h2 className="mt-5 text-white text-3xl md:text-5xl font-black text-center drop-shadow-lg italic mb-8 uppercase tracking-tighter">
        {t("instalaciones.titulo1")} <span className="text-indigo-500">{t("instalaciones.titulo2")}</span>
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
           {t("instalaciones.ninos1")}
          </h3>
        </div>
        <div className="w-[50%] h-150 flex flex-col items-end justify-center p-10">
          {/* El div hijo con fondo oscuro y alineación a la derecha */}
          <div className="bg-black/40 p-8 border-indigo-500 text-right max-w-md shadow-2xl backdrop-blur-sm">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              {t("instalaciones.ninos2")}
            </h4>
            <p className="text-white text-lg">
              {t("instalaciones.ninos3")}
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
              {t("instalaciones.perros2")}
            </h4>
            <p className="text-white text-lg">
              {t("instalaciones.perros3")}
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
            {t("instalaciones.perros1")}
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
            {t("instalaciones.exterior1")}
          </h3>
        </div>
        <div className="w-[50%] h-150 flex flex-col items-end justify-center p-10 text-center">
          <div className="bg-black/40 p-8 border-indigo-500 text-right max-w-md shadow-2xl backdrop-blur-sm">
            <h4 className="text-indigo-500 text-2xl font-black uppercase italic mb-4">
              {t("instalaciones.exterior2")}
            </h4>
            <p className="text-white text-lg">
              {t("instalaciones.exterior3")}
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
              {t("instalaciones.interior2")}
            </h4>
            <p className="text-white text-lg">
              {t("instalaciones.interior3")}
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
            {t("instalaciones.interior1")}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Instalaciones;
