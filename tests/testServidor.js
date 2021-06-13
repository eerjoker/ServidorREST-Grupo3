import { crearServidor } from '../src/main.js'
import { crearCliente } from './cliente.js'

const port = 3000
const servidor = crearServidor()
const cliente = crearCliente(`http://localhost:${port}/recordatorios`)
const diasParaRecordatorio = 2

try {
  await servidor.conectar(port)
  const { data } = await cliente.post({ dias: diasParaRecordatorio })
  console.log(data);
} catch(err) {
  console.error(err)
}

await servidor.desconectar()