import express from "express";

function crearServidor(routers) {
  const app = express();

  app.use(express.json());

  app.use('/usuarios', routers.routerUsuarios)
     .use('/reserva', routers.routerReservas)
     .use('/recordatorios', routers.routerRecordatorios)
     .use('/clima', routers.routerClima)

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
