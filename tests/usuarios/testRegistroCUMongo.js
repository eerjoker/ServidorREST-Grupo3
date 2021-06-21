import { crearServidorFactory } from '../../src/compartido/servidor/servidorFactory.js'
import axios from 'axios'

const port = 8080
const servidor =  crearServidorFactory()
const servidorFinal = servidor.crearServidor()
await servidorFinal.conectar(port)

const socio1 = {
    nombre: 'eze1',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '5',
    password: 'eze1'
  }

  const socio2 = {
    nombre: 'eze2',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '12',
    password: 'eze1'
  }

  try {
      await axios.post(`http://localhost:${port}/usuarios`, socio2)
      console.log('request completada 1')
      await servidorFinal.desconectar()
  } catch (error) {
      throw error
  }

 
