import { crearRouterRegistro } from "../../usuarios/ruteo/registroRouter.js";
import { crearRouterReserva } from "../../reservas/ruteo/reservaRouter.js";
import { crearRouterRecordatorios } from "../../reservas/ruteo/recordatoriosRouter.js";
import {crearServidor} from './servidor.js'

function crearServidorFactory(port = 8080) {
  const routerUsuarios = crearRouterRegistro()
  const routerReservas = crearRouterReserva()
  const routerRecordatorios = crearRouterRecordatorios()

  const servidor = crearServidor({ 
    routerUsuarios,
    routerReservas,
    routerRecordatorios
  })
  
  return {
    conectarServidor: async () => {
      try {
        await servidor.conectar(port)
      } finally {
        return servidor
      }
    }
  }
}

export { crearServidorFactory }