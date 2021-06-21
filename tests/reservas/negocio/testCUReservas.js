import { crearFactoryCU } from '../../../src/reservas/negocio/factoryCUReservas.js'

const factory = crearFactoryCU()

const CUEnviarRecordatorios = factory.crearCUEnviarRecordatorios()
CUEnviarRecordatorios.ejecutar(2)