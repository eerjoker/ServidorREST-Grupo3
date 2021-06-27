import { crearServidorFactory } from "../../src/compartido/servidor/servidorFactory.js";
import axios from "axios";

async function main() {
  const servidor = crearServidorFactory().crearServidor();

  await servidor.conectar(3000);

  const date = new Date(2021, 5, 30);
  const latitud = -36.0;
  const longitud = -60.0;
  const dateFail = "asd";
  const dateOutOfRange = new Date(2021, 6, 30);

  console.log("Clima test exitoso");
  try {
    const { data } = await axios.get(
      `http://localhost:${3000}/clima?date=${date}&lat=${latitud}&long=${longitud}`
    );
    console.log("REST SERVER RESULT: ", data);
  } catch (err) {
    console.log("ERROR", err.response);
  }

  console.log("Clima test fallido");
  try {
    const { data } = await axios.get(
      `http://localhost:${3000}/clima?date=${dateFail}&lat=${latitud}&long=${longitud}`
    );
    console.log("REST SERVER RESULT: ", data);
  } catch (err) {
    console.log({
      message: err.response.data.message,
      status: err.response.status,
    });
  }

  console.log("Clima test fuera de rango");
  try {
    const { data } = await axios.get(
      `http://localhost:${3000}/clima?date=${dateOutOfRange}&lat=${latitud}&long=${longitud}`
    );
    console.log("REST SERVER RESULT: ", data);
  } catch (err) {
    console.log({
      message: err.response.data.message,
      status: err.response.status,
    });
  }
}

main();
