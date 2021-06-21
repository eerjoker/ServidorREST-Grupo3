import { crearServidorFactory } from "./compartido/servidor/servidorFactory.js";

const port = 8080
const servidor = crearServidorFactory().crearServidor();

await servidor.conectar(port)