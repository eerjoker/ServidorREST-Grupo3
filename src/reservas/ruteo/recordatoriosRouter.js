import { crearFactoryCU } from '../negocio/factoryCUReservas.js'
import express from 'express'

const factoryCU = crearFactoryCU()

function crearRouterRecordatorios() {
  const router = express.Router()
  
  router.post('/', async (req, res, next) => {
    try {
      const CU_EnviarRecordatorios = factoryCU.crearCUEnviarRecordatorios()
      await CU_EnviarRecordatorios.ejecutar(req.body.cantDias)
      res.status(200).json({ message: 'Recordatorios enviados' })
    } catch (err) {
      next(err)
    }
  })

  router.use((err, req, res, next) => {
    if(err.type === 'ERROR_DATOS_INVALIDOS') {
      res.status(400)
    } else if(err.type === 'ERROR_MAIL_NO_ENVIADO') {
      res.status(500)
    } else {
      res.status(500)
    }
    res.json({ message: err.message })
  })

  return router
}

export { crearRouterRecordatorios }