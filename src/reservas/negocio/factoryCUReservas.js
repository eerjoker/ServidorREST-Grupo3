import { crearMailer } from "../../compartido/services/mail/factoryMailer.js";
import { crearCuCrearReserva } from "./crearReserva.js";
import { crearCUCancelarReserva } from "./cancelarReserva.js";
import { crearCUEnviarRecordatorios } from "./enviarRecordatoriosReservas.js";
import { getDaoReservas } from "../persistencia/factoryDaoReservas.js";
import { crearDaoUsuariosCache } from "../../usuarios/persistencia/daoUsuariosCache.js";

const mailer = crearMailer();
const daoReservas = await getDaoReservas();
const daoUsuarios = crearDaoUsuariosCache();

function crearFactoryCU() {
  return {
    crearCU_confirmarReserva() {
      const CU_reserva = crearCuCrearReserva(daoReservas, mailer);
      return CU_reserva;
    },
    crearCUEnviarRecordatorios() {
      const CUEnviarRecordatorios = crearCUEnviarRecordatorios(
        mailer,
        daoReservas,
        daoUsuarios
      );
      return CUEnviarRecordatorios;
    },
    crearCUCancelarReserva() {
      const CUCancelarReserva = crearCUCancelarReserva(daoReservas, mailer);
      return CUCancelarReserva;
    },
  };
}

export { crearFactoryCU };
