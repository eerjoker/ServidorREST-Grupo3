import { crearRouterRegistro } from "../../usuarios/ruteo/registroRouter.js";
import { crearRouterReserva } from "../../reservas/ruteo/reservaRouter.js";
import { crearRouterRecordatorios } from "../../reservas/ruteo/recordatoriosRouter.js";
import express from "express";

function crearServidor() {
  const app = express();

  app.use(express.json());

  app.use('/usuarios', crearRouterRegistro())
     .use('/reserva', crearRouterReserva())
     .use('/recordatorios', crearRouterRecordatorios())

  let server = null

  return {
    conectar: (port) => {
      return new Promise((resolve, reject) => {
        if (server) {
          reject(new Error("Servidor ya conectado"))
        } else {
          server = app
            .listen(port, () => {
              resolve()
            })
            .on("error", (err) => {
              reject(new Error("Error al conectarse al servidor: " + err));
            })
        }
      });
    },
    desconectar: () => {
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            reject(err)
          } else {
            server = null
            resolve()
          }
        })
      })
    }
  }
}

export { crearServidor };
