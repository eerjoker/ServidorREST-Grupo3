import { crearRouterRegistro } from "../../usuarios/ruteo/registroRouter.js";
import { crearRouterReserva } from "../../reservas/ruteo/reservaRouter.js";
import { crearRouterRecordatorios } from "../../reservas/ruteo/recordatoriosRouter.js";
import { crearClimaRoute } from "../../clima/ruteo/climaRouter.js"
import { crearServidor } from './servidor.js';

function crearServidorFactory() {
  const routerUsuarios = crearRouterRegistro()
  const routerReservas = crearRouterReserva()
  const routerRecordatorios = crearRouterRecordatorios()
  const routerClima = crearClimaRoute()
  
  return {
    crearServidor: () => {
      const servidor = crearServidor({ 
        routerUsuarios,
        routerReservas,
        routerRecordatorios,
        routerClima
      })

      return servidor
    }
  }
}

export { crearServidorFactory }