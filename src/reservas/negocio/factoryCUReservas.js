import { crearMailer } from "../../compartido/services/mail/factoryMailer.js";
import { crearCuCrearReserva } from "./crearReserva.js";
import { crearCUCancelarReserva } from "./cancelarReserva.js";
import { crearCUEnviarRecordatorios } from "./enviarRecordatoriosReservas.js";
import { getDaoReservas } from "../persistencia/factoryDaoReservas.js";
import DaoUsuariosFactory from "../../usuarios/persistencia/daoUsuariosFactory.js";

const mailer = crearMailer();
const daoReservas = await getDaoReservas();
const daoUsuarios = DaoUsuariosFactory.getDaoUsuarios();

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
