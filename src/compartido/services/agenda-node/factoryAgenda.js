import { crearAgenda } from "./agenda.js"

function crearFactoryAgenda() {
  return {
    crearAgendaBsAs: () => {
      return crearAgenda('America/Argentina/Buenos_Aires')
    }
  }
}

export { crearFactoryAgenda }