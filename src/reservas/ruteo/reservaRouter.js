import express from 'express'
import crearFactoryCU from '../CUFactory.js'

const factoryCU = crearFactoryCU()

function crearRouterReserva() {
    const router = express.Router()

    router.post('/', async (req, res) => {
        const CU_confirmarReserva = factoryCU.crearCU_confirmarReserva()
        const reserva = await CU_confirmarReserva.ejecutar(req.body)
        res.json({reserva})
    })

    return router
}

export { crearRouterReserva }