import {crearServidor} from './servidor.js'

function crearServidorFactory() {
  const port = 8080
  
  return {
    crearServidor: async () => {
      await crearServidor(port)
    }
  }
}

export { crearServidorFactory }