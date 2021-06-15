import { crearRouterRegistro } from "../../usuarios/ruteo/registroRouter.js";
import { crearRouterReserva } from "../../reservas/ruteo/reservaRouter.js";
import { crearRouterRecordatorios } from "../../reservas/ruteo/recordatoriosRouter.js";
import express from "express";

function crearServidor(port) {
  const app = express();

  app.use(express.json());

  app.use('/usuarios', crearRouterRegistro())
     .use('/reserva', crearRouterReserva())
     .use('/recordatorios', crearRouterRecordatorios())

  return new Promise((resolve, reject) => {
    const server = app
      .listen(port)
      .once("error", () => {
        reject(new Error("error al conectarse al servidor"));
      })
      .once("listening", () => {
        server.port = server.address().port;
        resolve(server);
      });
  });
}

export { crearServidor };
