function crearErrorUsuarioNoEncontrado() {
    const err = new Error('usuario no encontrado')
    err.type = 'ERR_USER_NOT_FOUND'
    return err
  }
  
  export { crearErrorUsuarioNoEncontrado }