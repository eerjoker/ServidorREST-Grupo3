import { crearCuCrearReserva } from '../../src/reservas/crearReserva.js'
import { crearDaoReservasCache } from '../../src/reservas/persistencia/daoReservasCache.js'
import { crearEnviadorDeMails } from '../../src/compartido/mail/enviadorDeMails.js'

const mailer = crearEnviadorDeMails("clubortemail@gmail.com", "wmhxyrhimevxswoz")

const dao = crearDaoReservasCache()
 
const cu = crearCuCrearReserva(dao, mailer)

const datos = { nombre: 'antonella' , fechaHora: new Date(2021, 6, 30, 10), cancha: 'numero 15' , email:'antonellacastellano97@gmail.com', activa: true, idUsuario: 1}

await cu.ejecutar(datos)
console.log(dao)