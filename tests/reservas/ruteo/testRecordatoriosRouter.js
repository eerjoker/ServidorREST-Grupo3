import { crearServidorFactory } from '../../../src/compartido/servidor/servidorFactory.js'
import { crearCliente } from '../../clientePruebas.js'

const port = 3000
const servidorFactory = crearServidorFactory(port)
const cliente = crearCliente(`http://localhost:${port}/recordatorios`)
const diasParaRecordatorio = 2

let servidor;

// se comenta porque envia mails a los usuarios

// try {
//   servidor = await servidorFactory.conectarServidor()
//   const { data } = await cliente.post({ cantDias: diasParaRecordatorio })
//   console.log(data);
// } catch(err) {
//   console.error(err)
// } finally {
//   await servidor.desconectar()
// }