import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Carga los archivos JSON desde /public/locales
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Conecta con React
  .init({
    fallbackLng: 'es',
    lng: 'es', // Si no encuentra el idioma, usa español
    ns: ['translation', 'platos', 'sedes'],
    defaultNS: 'translation',
    debug: false, // Cámbialo a true si quieres ver qué pasa en la consola
    interpolation: {
      escapeValue: false, // React ya nos protege de XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Ruta a tus archivos
    }
  });

export default i18n;