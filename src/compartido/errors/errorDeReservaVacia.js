function crearErrorDeReservaVacia(message) {
    const error = new Error(message)
    error.type = 'ERROR_RESERVA_VACIA'
    return error
  }
  
  export { crearErrorDeReservaVacia }