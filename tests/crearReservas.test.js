import { crearServidorFactory } from "../src/compartido/servidor/servidorFactory.js";
import axios from "axios";

(async function main() {
  const port = 8080;
  const servidor = crearServidorFactory().crearServidor();

  await servidor.conectar(port);

  console.log("SERVIDOR LEVANTADO!");
  console.log(
    "Prueba de creacion y confirmacion de reserva--------------------------------"
  );
  const body = {
    nombre: "antonella 5",
    fechaHora: new Date(),
    cancha: "6",
    email: "fakita.teve@gmail.com",
    activa: true,
    cancelada: false,
    idUsuario: 39175536,
    idReserva: 19,
  };

  try {
    const res = await axios.post("http://localhost:8080/reserva/crear", body);
    console.log("RES: ", res.data);
  } catch (err) {
    console.log("ERROR: ", err.response.data);
  }
  console.log("-------------------------------------------------------------");

 console.log(
    "Prueba de error en caso de reserva vacia--------------------------------"
  );
  const body2 = {};

  try {
    const res = await axios.post("http://localhost:8080/reserva/crear", body2);
    console.log("RES: ", res.data);
  } catch (err) {
    console.log("ERROR: ", err.response.data);
  }
  console.log("-------------------------------------------------------------");
})();
