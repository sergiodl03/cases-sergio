import React from "react";
import Instagram from "../assets/instagram.avif";
import Twitter from "../assets/x.jpg";
import { useTranslation } from "react-i18next";


function Footer({ logo }) {
  const { t, i18n } = useTranslation();
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 backdrop-blur-md py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* GRID PRINCIPAL: 4 COLUMNAS EN ESCRITORIO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <div>
              <a
                className="text-2xl font-black tracking-tighter text-white uppercase cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {t("footer.titulo1")}<span className="text-indigo-500">{t("footer.titulo2")}</span>
              </a>
              <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">
                {t("footer.gastronomia")}
              </p>
            </div>
            {/* REDES SOCIALES ABAJO DEL LOGO */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <img src={Instagram} alt="Instagram" className="w-6 h-6 rounded-md object-cover" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <img src={Twitter} alt="Twitter" className="w-6 h-6 rounded-md object-cover" />
              </a>
            </div>
          </div>

          {/* COLUMNA 2: CONTACTO Y LEGAL */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h3 className="text-indigo-500 font-black italic uppercase mb-3 tracking-wider">{t("footer.contacto")}</h3>
              <p className="text-slate-300 text-sm">{t("footer.ubicacion")}</p>
              <p className="text-slate-300 text-sm font-bold">+34 976 325 164</p>
            </div>
            <ul className="flex flex-col gap-2 text-slate-500 text-xs font-medium uppercase tracking-widest">
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">{t("footer.aviso")}</li>
              <li className="hover:text-indigo-400 cursor-pointer transition-colors">{t("footer.privacidad")}</li>
            </ul>
          </div>

          {/* COLUMNA 3: HORARIOS */}
          <div className="text-center md:text-left">
            <h3 className="text-indigo-500 font-black italic uppercase mb-3 tracking-wider">{t("footer.horarios")}</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex justify-between md:justify-start md:gap-4">
                <span className="text-slate-500 uppercase text-xs font-bold">{t("footer.mediodia")}</span> 
                <span>12:00 - 16:00</span>
              </p>
              <p className="flex justify-between md:justify-start md:gap-4">
                <span className="text-slate-500 uppercase text-xs font-bold">{t("footer.noche")}</span> 
                <span>19:00 - 02:00</span>
              </p>
              <p className="text-indigo-400/60 text-[10px] italic mt-2">{t("footer.horas")}</p>
            </div>
          </div>

          {/* COLUMNA 4: FORMULARIO CV */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md">
            <h3 className="text-indigo-500 font-black italic uppercase mb-2 text-sm">{t("footer.unirte")}</h3>
            <p className="text-[11px] text-gray-400 mb-4 italic leading-tight">
              {t("footer.envio")}
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder={t("footer.nombre")}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <input
                type="email"
                placeholder={t("footer.email")}
                className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <div className="flex flex-col gap-2">
                <label className="text-[9px] text-gray-500 uppercase font-black tracking-widest">{t("footer.pdf")}</label>
                <input
                  type="file"
                  className="text-[10px] text-gray-300 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-bold file:uppercase file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 cursor-pointer transition-all"
                />
              </div>
              <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-black uppercase italic py-2 rounded-lg text-xs transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-500/20">
                {t("footer.cv")}
              </button>
            </form>
          </div>

        </div>

        {/* COPYRIGHT FINAL */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {logo} - {t("footer.derechos")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;