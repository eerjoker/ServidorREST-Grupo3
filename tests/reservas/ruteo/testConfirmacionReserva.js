import { crearServidorFactory } from '../../../src/compartido/servidor/servidorFactory.js'
import { crearCliente } from '../../clientePruebas.js'

const port = 3000
const servidorFactory = crearServidorFactory(port)
const cliente = crearCliente(`http://localhost:${port}/reserva`)

let servidor;
const datos = { nombre: 'anto' , dia: '30/06/2021' , cancha: 'numero 15' , tiempo: '2hs', email:'antonellacastellano97@gmail.com'}

 try {
   servidor = await servidorFactory.conectarServidor()
   const { data } = await cliente.post(datos)
   console.log(data);
} catch(err) {
   console.error(err)
} finally {
  await servidor.desconectar()
}