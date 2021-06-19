import {getMode} from "../../compartido/config.js"

let daoUsuarios

switch (getMode()) {
  case 'PROD':
    const { crearMongoClient } = await import('./mongo/mongoClient.js')
    const { crearDaoUsuariosMongoDb } = await import('./mongo/daoUsuariosMongoDb.js')
    const { getCnxStr } = await import('../../config.js')

    const cnxStr = getCnxStr()
    const mongoClient = crearMongoClient(cnxStr)
    const db = await mongoClient.connect()
    const daoUsuariosMongoDb = crearDaoUsuariosMongoDb(db)
    daoUsuarios = daoUsuariosMongoDb
    break;
  default:
    const { crearDaoUsuarios } = await import('./daoUsuariosCache.js')
    const daoUsuariosCache = crearDaoUsuarios()
    daoUsuarios = daoUsuariosCache
    break;
}

function getDaoUsuarios() {
  return daoUsuarios
}

export default {
  getDaoUsuarios
}