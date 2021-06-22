function crearErrorIdInvalido(message) {
  const error = new Error(message);
  error.type = "ERROR_ID_INVALIDO";
  return error;
}

export { crearErrorIdInvalido };
