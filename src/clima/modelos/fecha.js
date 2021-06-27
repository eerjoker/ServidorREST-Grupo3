import {
  crearErrorFormatoFecha,
  crearErrorClimaNoEncontrado,
} from "../../compartido/errors/errorClimaApi.js";
import moment from "moment";

function crearFecha(fecha) {
  let nuevaFecha = null;

  const fechaMoment = moment(new Date(fecha));
  const fechaFormateada = fechaMoment.format("dddd DD MMMM");

  const fechaActual = moment(new Date());
  const fechaLimite = moment(new Date()).add(7, "days");

  if (fechaFormateada === "Fecha inválida") {
    throw crearErrorFormatoFecha("Formato de fecha invalido");
  } else if (
    fechaMoment.isBefore(fechaActual) ||
    fechaMoment.isAfter(fechaLimite)
  ) {
    throw crearErrorClimaNoEncontrado(
      "Fecha fuera de rango, clima no encontrado"
    );
  } else {
    nuevaFecha = fechaFormateada;
  }

  return nuevaFecha;
}

export { crearFecha };
