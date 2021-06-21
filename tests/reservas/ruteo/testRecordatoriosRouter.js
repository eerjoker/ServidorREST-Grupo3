import { crearServidorFactory } from '../../../src/compartido/servidor/servidorFactory.js'
import { crearCliente } from '../../clientePruebas.js'

const port = 3000
const servidorFactory = crearServidorFactory()
const cliente = crearCliente(`http://localhost:${port}/recordatorios`)
const diasParaRecordatorio = 2

const servidor = servidorFactory.crearServidor()

try {
  await servidor.conectar(port)
  const { data } = await cliente.post({ cantDias: diasParaRecordatorio })
  console.log(data);
} catch(err) {
  console.error(err)
} finally {
  await servidor.desconectar()
}