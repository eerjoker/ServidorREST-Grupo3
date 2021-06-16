import { crearAgenda } from "./Agenda.js"

function crearFactoryAgenda() {
  return {
    crearAgendaBsAs: () => {
      return crearAgenda('America/Argentina/Buenos_Aires')
    }
  }
}

export { crearFactoryAgenda }