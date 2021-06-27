function crearErrorClimaNoEncontrado(message) {
  const error = new Error(message);
  error.type = "ERROR_CLIMA_NO_ENCONTRADO";
  return error;
}

function crearErrorFormatoFecha(message) {
  const error = new Error(message);
  error.type = "ERROR_FORMATO_FECHA_INCORRECTO";
  return error;
}

export { crearErrorClimaNoEncontrado, crearErrorFormatoFecha };
