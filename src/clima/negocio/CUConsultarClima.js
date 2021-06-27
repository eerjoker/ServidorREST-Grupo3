import { crearFecha } from "../modelos/fecha.js";

function ConsultarClima(pronosticador) {
  return {
    ejecutar: async (fecha, latitud, longitud) => {
      const fechaClima = crearFecha(fecha);
      return await pronosticador.getWeather(fechaClima, latitud, longitud);
    },
  };
}

export default ConsultarClima;
