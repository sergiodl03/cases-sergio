import React from 'react';
import Instagram from '../assets/instagram.avif';
import Twitter from '../assets/x.jpg';

function Footer({ logo }) {
  return (
    <footer className="w-full bg-slate-950 border-t border-white/10 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* LOGO (Igual que el Header) */}
          <div className="flex flex-col items-center md:items-start">
            <a className="text-2xl font-black tracking-tighter text-white uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              CASA<span className="text-indigo-500">SERGIO</span>
            </a>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">
              Gastronomía Interestelar
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div className="flex gap-6 items-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
              <img src={Instagram} alt="Instagram" className="w-6 h-6 rounded-md object-cover" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
              <img src={Twitter} alt="Twitter" className="w-6 h-6 rounded-md object-cover" />
            </a>
          </div>

          {/* ENLACES LEGALES */}
          <ul className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium">
            <li className="hover:text-white cursor-pointer transition-colors">Aviso Legal</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacidad</li>
            <li className="hover:text-white cursor-pointer transition-colors">Cookies</li>
          </ul>

        </div>
        
        {/* Copyright final */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} {logo} - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;