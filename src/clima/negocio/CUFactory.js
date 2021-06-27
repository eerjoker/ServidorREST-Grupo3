import ConsultarClima from "./CUConsultarClima.js";
import Pronosticador from "../../compartido/services/clima/pronosticador.js";
import { getClimaApiKey } from "../../compartido/config.js";

function crearCU_ConsultarClima() {
  const pronosticador = new Pronosticador(getClimaApiKey());
  const CU_Clima = ConsultarClima(pronosticador);
  return CU_Clima;
}

export default {
  crearCU_ConsultarClima,
};
