import { crearCuCrearReserva } from './crearReserva.js'
import { crearCUEnviarRecordatorios } from './enviarRecordatoriosReservas.js'
import { crearDaoReservasCache } from '../persistencia/daoReservasCache.js'
import { crearDaoUsuariosCache } from '../../usuarios/persistencia/daoUsuariosCache.js'
import { crearMailer } from '../../compartido/services/mail/factoryMailer.js'

const mailer = crearMailer()
const daoReservas = crearDaoReservasCache()
const daoUsuarios = crearDaoUsuariosCache()

function crearFactoryCU() {

    return {
        crearCU_confirmarReserva() { 
            const CU_reserva = crearCuCrearReserva(daoReservas, mailer)
            return CU_reserva
        },
        crearCUEnviarRecordatorios () {
            const CUEnviarRecordatorios = crearCUEnviarRecordatorios(mailer, daoReservas, daoUsuarios)     
            return CUEnviarRecordatorios
        }
    }
}

export {
    crearFactoryCU
}