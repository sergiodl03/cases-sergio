import React, { useState, useEffect } from "react";
function Reservar() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: "1",
  });

  const hoy = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const reservas = JSON.parse(localStorage.getItem("misReservas"))|| [];
    if(reservas){
      const reservaFiltradas = reservas.filter((reserva) => reserva.fecha >= hoy)
      localStorage.setItem("misReservas", JSON.stringify(reservaFiltradas));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosFormulario({ ...datosFormulario, [name]: value });
  };

  const handleEnviar = (e) => {
    e.preventDefault();

    const reservasActuales =
    JSON.parse(localStorage.getItem("misReservas")) || [];

    const yaEstaOcupado = reservasActuales.some(
      (reserva) =>
        reserva.fecha === datosFormulario.fecha &&
        reserva.hora === datosFormulario.hora,
    );

    if (yaEstaOcupado) {
      alert(
        "Lo sentimos, ya hay una reserva para ese día y hora. Por favor, elige otro momento.",
      );
      return;
    }

    const nuevaReserva = {
      ...datosFormulario,
      id: Date.now(),
    };

    const listaActualizada = [...reservasActuales, nuevaReserva];
    localStorage.setItem("misReservas", JSON.stringify(listaActualizada));

    alert("¡Reserva confirmada!");

    setDatosFormulario({
      nombre: "",
      apellidos: "",
      email: "",
      telefono: "",
      fecha: "",
      hora: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-gray-900 shadow-2xl">
      <form className="space-y-8" onSubmit={handleEnviar}>
        <h2 className="text-3xl font-bold text-white text-center mb-8 border-b border-gray-700 pb-4">
          Reserva en Nuestro Restaurante
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nombre"
              className="text-sm font-semibold text-gray-400"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={datosFormulario.nombre}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="apellidos"
              className="text-sm font-semibold text-gray-400"
            >
              Apellidos:
            </label>
            <input
              type="text"
              id="apellidos"
              name="apellidos"
              value={datosFormulario.apellidos}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-400"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={datosFormulario.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="telefono"
              className="text-sm font-semibold text-gray-400"
            >
              Teléfono:
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={datosFormulario.telefono}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fecha */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fecha"
              className="text-sm font-semibold text-gray-400"
            >
              Fecha:
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              min={hoy}
              value={datosFormulario.fecha}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white outline-none [color-scheme:dark]"
            />
          </div>

          {/* Hora (usando type="time") */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="hora"
              className="text-sm font-semibold text-gray-400"
            >
              Hora:
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              value={datosFormulario.hora}
              onChange={handleChange}
              className="bg-gray-800 border border-gray-700 rounded-lg p-3 text-white outline-none [color-scheme:dark]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div className="flex flex-col gap-2 text-white">
            <label
              htmlFor="personas"
              className="text-sm font-semibold text-gray-400"
            >
              Nº de Comensales:
            </label>
            <select
              id="personas"
              name="personas"
              value={datosFormulario.personas}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-orange-500 outline-none appearance-none cursor-pointer"
            >
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
              <option value="4">4 Personas</option>
              <option value="5">5+ Personas</option>
            </select>
          </div>

          <div className="flex flex-col gap-2"></div>
        </div>

        {/* Botón de Enviar */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-max px-12 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-orange-500/20 uppercase tracking-wider"
          >
            Confirmar Reserva
          </button>
        </div>
      </form>
    </div>
  );
}
export default Reservar;
