import { getMode, getCnxStr } from "../../compartido/config.js";

async function getDaoReservas() {
  if (getMode() !== "PROD") {
    const { crearDaoReservasCache } = await import("./daoReservasCache.js");
    const daoReservas = crearDaoReservasCache();
    return daoReservas;
  }
  const { crearMongoClient } = await import("../../compartido/persistencia/mongo/mongoClient.js");
  const { crearDaoReservasMongo } = await import("./daoReservaMongo.js");

  const mongoClient = crearMongoClient(getCnxStr());
  const db = await mongoClient.connect();
  const daoReservas = crearDaoReservasMongo(db);
  return daoReservas;
}

export { getDaoReservas };
