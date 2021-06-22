import { getMode } from "../../compartido/config.js";

let daoUsuarios;

switch (getMode()) {
  case "PROD":
    const { crearMongoClient } = await import(
      "../../compartido/persistencia/mongo/mongoClient.js"
    );
    const { crearDaoUsuariosMongoDb } = await import("./daoUsuariosMongoDb.js");
    const { getCnxStr } = await import("../../compartido/config.js");

    const cnxStr = getCnxStr();
    const mongoClient = crearMongoClient(cnxStr);
    const db = await mongoClient.connect();
    const daoUsuariosMongoDb = crearDaoUsuariosMongoDb(db);
    daoUsuarios = daoUsuariosMongoDb;
    break;
  default:
    const { crearDaoUsuariosCache } = await import("./daoUsuariosCache.js");
    const daoUsuariosCache = crearDaoUsuariosCache();
    daoUsuarios = daoUsuariosCache;
    break;
}

function getDaoUsuarios() {
  return daoUsuarios;
}

export default {
  getDaoUsuarios,
};
