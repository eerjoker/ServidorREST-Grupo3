import { crearServidorFactory } from "./compartido/servidor/servidorFactory.js";

const servidor = crearServidorFactory().conectarServidor();

await servidor.desconectar()