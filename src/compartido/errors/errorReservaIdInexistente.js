function crearErrorIdInexistente(message) {
  const error = new Error(message);
  error.type = "ERROR_ID_INEXISTENTE";
  return error;
}

export { crearErrorIdInexistente };
