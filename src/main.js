import { crearFactoryCUAgendar } from "./compartido/negocio/factoryCUAgendar.js";
import { crearServidorFactory } from "./compartido/servidor/servidorFactory.js";
import { crearFactoryCU } from "./reservas/negocio/factoryCUReservas.js";

try {
  // Agenda eventos temporizados
  // TODO: hacerlo en aplicacion fuera del main

  const factoryCUAgendar = crearFactoryCUAgendar()
  const factoryCUReservas = crearFactoryCU()
  
  const CU_agendarCuPorHora = factoryCUAgendar.crearCU_agendarCuPorHora()
  const CU_RecordatoriosReservas = factoryCUReservas.crearCUEnviarRecordatorios()

  const hora = 18
  const cantDias = 2

  CU_agendarCuPorHora.ejecutar('CU_RecordatoriosReservas', hora, CU_RecordatoriosReservas, cantDias)

} catch { }

const port = 8080
const servidor = crearServidorFactory().crearServidor();

await servidor.conectar(port)