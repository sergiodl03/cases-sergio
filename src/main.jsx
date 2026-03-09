import React, { Suspense } from 'react' // 1. Importamos Suspense
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import './i18n' // 2. ¡IMPORTANTE! Importamos la configuración de i18n

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 3. Envolvemos con Suspense para que no salga "navbar.carta" mientras carga */}
      <Suspense fallback={<div className="bg-slate-900 text-white h-screen flex items-center justify-center">Cargando...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)