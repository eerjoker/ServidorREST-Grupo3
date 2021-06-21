// Esteban Rivera

function crearCUagendarCuPorHora(agenda) {
  return {
    ejecutar(nombre, hora, casoDeUso, params) {
      agenda.agendarPorHora(nombre, hora, () => {
        casoDeUso.ejecutar(params)
      })
    }
  }
}

export { crearCUagendarCuPorHora }