import { crearRouterRegistro } from "../../usuarios/ruteo/registroRouter.js";
import { crearRouterReserva } from "../../reservas/ruteo/reservaRouter.js";
import { crearRouterRecordatorios } from "../../reservas/ruteo/recordatoriosRouter.js";
import { crearServidor } from './servidor.js';

function crearServidorFactory() {
  const routerUsuarios = crearRouterRegistro()
  const routerReservas = crearRouterReserva()
  const routerRecordatorios = crearRouterRecordatorios()
  
  return {
    crearServidor: () => {
      const servidor = crearServidor({ 
        routerUsuarios,
        routerReservas,
        routerRecordatorios
      })

      return servidor
    }
  }
}

export { crearServidorFactory }