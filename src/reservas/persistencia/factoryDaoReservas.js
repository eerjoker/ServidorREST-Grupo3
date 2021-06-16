import { crearDaoReservasCache } from "./daoReservasCache.js";

const daoReservas = crearDaoReservasCache()

function getDaoReservas() {
  return daoReservas
}

export { getDaoReservas }