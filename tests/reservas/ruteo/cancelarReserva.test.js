import { crearServidorFactory } from "../../../src/compartido/servidor/servidorFactory.js";
import axios from "axios";

(async function main() {
  const port = 8080;
  const servidor = crearServidorFactory().crearServidor();

  await servidor.conectar(port);

  console.log("SERVIDOR LEVANTADO!");
  console.log(
    "Prueba de cancelacion de reserva--------------------------------"
  );
  try {
    const res = await axios.put(`http://localhost:8080/reserva/cancelar/22`);
    console.log("RES: ", res.data);
  } catch (err) {
    console.log("ERROR: ", err.response.data);
  }
  console.log("-------------------------------------------------------------");

  console.log(
    "Prueba de cancelacion de reserva inexistente--------------------------------"
  );
  try {
    const res = await axios.put(`http://localhost:8080/reserva/cancelar/31000`);
    console.log("RES: ", res.data);
  } catch (err) {
    console.log("ERROR: ", err.response.data);
  }
  console.log("-------------------------------------------------------------");

  console.log(
    "Prueba de cancelacion de reserva con ID invalido---------------------"
  );
  try {
    const res = await axios.put(`http://localhost:8080/reserva/cancelar/asd`);
    console.log("RES: ", res.data);
  } catch (err) {
    console.log("ERROR: ", err.response.data);
  }
  console.log("-------------------------------------------------------------");

  await servidor.desconectar();
})();
