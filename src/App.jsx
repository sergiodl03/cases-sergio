import { Routes, Route } from 'react-router-dom'; // <--- Importamos las piezas

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Carta from './pages/Carta';
import Reservar from './pages/Reservar';
import CercaDeTi from './pages/CercaDeTi';
import Instalaciones from './pages/Instalaciones';
import { useTranslation } from "react-i18next";


const misEnlaces = [
  { labelKey: 'navbar.inicio', url: '/' },
  { labelKey: 'navbar.carta', url: '/carta' },
  { labelKey: 'navbar.cerca de ti', url: '/cercaDeTi' }, 
  { labelKey: 'navbar.instalaciones', url: '/instalaciones' },
  { labelKey: 'navbar.reservar', url: '/reservar', isButton: true }
];

function App() {

const { t, i18n } = useTranslation();


return (
<div className="flex flex-col min-h-screen">
<Header links={misEnlaces} />
<div className="flex-grow pt-20 bg-slate-900">
<Routes>
{/* Definimos las rutas */}
<Route path="/" element={<Home />} />
<Route path="/carta" element={<Carta />} />
<Route path="/reservar" element={<Reservar />} />
<Route path="/cercaDeTi" element={<CercaDeTi />} />
<Route path="/instalaciones" element={<Instalaciones />} />
{/* Ruta para error 404 (opcional) */}
<Route path="*" element={<h1>404 - Página no encontrada</h1>} />
</Routes>
</div>
<Footer logo="CASA SERGIO"/>
</div>
);
}
export default App;