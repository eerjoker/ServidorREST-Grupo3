import axios from 'axios';

function crearCliente(ruta) {
  return {
    post: async (params) => {
      try {
        return await axios.post(ruta, params)
      } catch (err) {
        throw err.response
      }
    }
  }
}

export { crearCliente }