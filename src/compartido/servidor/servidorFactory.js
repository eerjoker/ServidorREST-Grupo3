import {crearServidor} from './servidor.js'

function crearServidorFactory(port = 8080) {
  const servidor = crearServidor()
  
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