import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import datosSedes from "../components/sedes.json";

// Configuración del icono por defecto para Leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function CercaDeTi() {
  const [coordinates, setCoordinates] = useState(null);
  const [loading, setLoading] = useState(true);
  const sedes = datosSedes.sedes;

  // Función matemática: Fórmula de Haversine para calcular distancia real en km
  const calcularDistancia = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates([position.coords.latitude, position.coords.longitude]);
        setLoading(false);
      },
      (error) => {
        console.error("Error obteniendo ubicación:", error);
        // Ubicación por defecto (Zaragoza) si el usuario deniega el permiso
        setCoordinates([41.6488, -0.8891]);
        setLoading(false);
      }
    );
  }, []);

  // Pantalla de carga mejorada (Estética espacial)
  if (loading) {
    return (
      <div className="w-full h-screen bg-slate-950 flex flex-col items-center justify-center space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-indigo-400 font-medium animate-pulse tracking-widest uppercase text-sm">
          Rastreando señal GPS...
        </p>
      </div>
    );
  }

  // Ordenamos las sedes por cercanía si tenemos las coordenadas del usuario
  let sedesOrdenadas = [...sedes];
  if (coordinates) {
    sedesOrdenadas = [...sedes].sort((a, b) => {
      const distA = calcularDistancia(
        coordinates[0],
        coordinates[1],
        a.coordenadas.latitud,
        a.coordenadas.longitud
      );
      const distB = calcularDistancia(
        coordinates[0],
        coordinates[1],
        b.coordenadas.latitud,
        b.coordenadas.longitud
      );
      return distA - distB;
    });
  }

  return (
    <div className="p-4 bg-slate-900 min-h-screen text-white">
      {/* SECCIÓN DEL MAPA */}
      {coordinates && (
        <div className="w-full h-80 mt-3 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative z-0">
          <MapContainer
            center={coordinates}
            zoom={7}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marcador del Usuario */}
            <Marker position={coordinates}>
              <Tooltip permanent direction="top" offset={[0, -10]}>
                Estás aquí
              </Tooltip>
            </Marker>
            
            {/* Marcadores de las Sedes */}
            {sedes.map((sede) => (
              <Marker
                key={sede.id}
                position={[sede.coordenadas.latitud, sede.coordenadas.longitud]}
              >
                <Tooltip>
                  <strong>{sede.nombre}</strong>
                  <br />
                  {sede.ciudad}
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* LISTADO DE SEDES */}
      <div className="mt-10">
        <h2 className="text-white text-3xl md:text-5xl font-black text-center drop-shadow-lg italic mb-8 uppercase tracking-tighter">
          Locales <span className="text-indigo-500">cercanos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sedesOrdenadas.map((sede, index) => {
            const km = coordinates
              ? calcularDistancia(
                  coordinates[0],
                  coordinates[1],
                  sede.coordenadas.latitud,
                  sede.coordenadas.longitud
                ).toFixed(1)
              : null;

            return (
              <div
                key={sede.id}
                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:bg-slate-800 hover:border-indigo-500/50 relative flex flex-col justify-between"
              >
                {km && (
                  <span className="absolute top-4 right-4 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-indigo-500/20">
                    A {km} km
                  </span>
                )}
                
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors pr-16">
                    {index + 1}. {sede.nombre}
                  </h3>
                  <p className="text-xs text-indigo-300/80 uppercase tracking-widest font-semibold mt-1">
                    {sede.ciudad}
                  </p>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {sede.descripcion}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    📍 {sede.direccion}
                  </p>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${sede.coordenadas.latitud},${sede.coordenadas.longitud}`,
                      "_blank"
                    )
                  }
                  className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20"
                >
                  Trazar ruta estelar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CercaDeTi;