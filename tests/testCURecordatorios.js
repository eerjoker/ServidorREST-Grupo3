import crearFactoryCU from '../src/FactoryEnviarRecordReservas.js'

const factory = crearFactoryCU()

const CU = factory.crearCU()

CU.ejecutar(2)