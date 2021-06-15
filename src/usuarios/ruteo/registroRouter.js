import { crearFactoryCU }  from '../negocio/factoryCUUsuarios.js'
import express from 'express'

const registro = crearFactoryCU().crearCURegistro()

function crearRouterRegistro() {
  const router = express.Router()
   
  router.post('/', async (req, res, next) => {
      try {
      const usuario = await registro.ejecutar(req.body)
       res.status(201).json(usuario)
      } catch (error) {
        next(error)
      }
    })
  
    router.use((error, req, res, next) => {
      if (error.type === 'ERROR_DNI_EN_USO') {
        res.status(400)
      } else if (error.type === 'ERROR_DATOS_INVALIDOS') {
        res.status(400)
      } else {
        res.status(500)
      }
      res.json({ message: error.message })
    })

    return router
}

export { crearRouterRegistro }