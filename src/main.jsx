import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // <--- 1. Importamos
import App from './App.jsx'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
{/* 2. Envolvemos la App. Ahora toda la app tiene "poderes" de navegación */}
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>,
)