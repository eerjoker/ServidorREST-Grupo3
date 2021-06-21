import { crearAgenda } from "../services/agenda-node/agenda.js";
import { crearCUagendarCuPorHora } from "./agendarCuPorHora.js";


const agenda = crearAgenda()

function crearFactoryCUAgendar() {
  return {
    crearCU_agendarCuPorHora() {
      const CUAgendarPorHora = crearCUagendarCuPorHora(agenda)
      return CUAgendarPorHora;
    }
  }
}

export { crearFactoryCUAgendar }