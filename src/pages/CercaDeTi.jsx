import { useState, useEffect } from "react"; // Quitamos 'React' de aquí, no es necesario
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import datosSedes from "../components/sedes.json";

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

  // Calcula la distancia en km entre dos puntos geográficos
const calcularDistancia = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radio de la Tierra en km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
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
        console.error(error);
        setCoordinates([41.6488, -0.8891]);
        setLoading(false);
      },
    );
  }, []);

  if (loading) return <p className="p-4">Obteniendo ubicación...</p>;


  // Si no hay coordenadas todavía, usamos las sedes tal cual
let sedesOrdenadas = [...sedes];

if (coordinates) {
  sedesOrdenadas = [...sedes].sort((a, b) => {
    const distA = calcularDistancia(coordinates[0], coordinates[1], a.coordenadas.latitud, a.coordenadas.longitud);
    const distB = calcularDistancia(coordinates[0], coordinates[1], b.coordenadas.latitud, b.coordenadas.longitud);
    return distA - distB;
  });
}
  return (
    <div className="p-4">
      {coordinates && (
        /* He subido la altura a h-80 (320px) para que se vea mejor */
        <div className="w-full h-80 mt-3 rounded-lg overflow-hidden shadow-md border relative z-0">
          <MapContainer
            center={coordinates}
            zoom={7} // Zoom 5 es muy lejos (se ve casi toda Europa), 13 es nivel ciudad
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }} // Asegura que el mapa llene el div
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates}>
              <Tooltip permanent>Estás aquí</Tooltip>
            </Marker>
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
      <div className="mt-4">
      <p className="text-white text-2xl md:text-4xl font-bold text-center drop-shadow-lg italic">Estos son los locales mas cercanos a ti</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        
        {sedesOrdenadas.map((sede, index) => (
          <div
            key={sede.id}
            className="p-4 bg-slate-800 rounded-lg border border-slate-700 shadow-lg text-white"
          >
            <h3 className="text-xl font-bold text-indigo-400">
              {index + 1}. {sede.nombre}
            </h3>
            <p className="text-sm text-slate-300 italic mb-2">
              {sede.ciudad} - {sede.direccion}
            </p>
            <p className="text-sm leading-relaxed">{sede.descripcion}</p>
            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${sede.coordenadas.latitud},${sede.coordenadas.longitud}`,
                  "_blank",
                )
              }
              className="mt-3 text-xs bg-indigo-600 hover:bg-indigo-500 py-1 px-3 rounded transition-colors"
            >
              Cómo llegar
            </button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default CercaDeTi;
