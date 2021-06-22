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
    nombre: "ivan 3",
    fechaHora: new Date(),
    cancha: "1",
    email: "ivan@outlook.com",
    activa: true,
    cancelada: false,
    idUsuario: 38175536,
    idReserva: 17,
  };

  try {
    const res = await axios.post("http://localhost:8080/reserva/crear", body);
    console.log("RES: ", res.data);
  } catch (err) {
    console.log("ERROR: ", err.response.data);
  }
  console.log("-------------------------------------------------------------");
})();
