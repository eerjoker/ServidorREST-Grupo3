// Antonella Castellano

import Reserva from '../modelos/Reserva.js'
import generarPDF from '../../compartido/services/generadorPDF/generarPDF.js'

function crearCuCrearReserva(daoReserva, mailer) {
    return {
       async ejecutar (datos){
            const reserva = new Reserva(datos)
            await daoReserva.guardar(reserva)
            await generarPDF(reserva)
            await mailer.enviarConAdjunto(reserva.email , `Reserva Confirmada!`, `Adjunto datos de su reserva`, `${reserva.nombre}.pdf`,`./${reserva.nombre}.pdf`)
        }
    }
}

export {crearCuCrearReserva}