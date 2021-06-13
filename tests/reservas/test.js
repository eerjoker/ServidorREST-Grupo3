import { crearCuCrearReserva } from '../../src/reservas/crearReserva.js'
import { crearDaoReservasCache } from '../../src/reservas/persistencia/daoReservasCache.js'
import { crearEnviadorDeMails } from '../../src/compartido/mail/crearEnviadorDeMails.js'

const mailer = crearEnviadorDeMails("clubortemail@gmail.com", "wmhxyrhimevxswoz")

const dao = crearDaoReservasCache()
 
const cu = crearCuCrearReserva(dao, mailer)

const datos = { nombre: 'antonella' , dia: '30/06/2021' , cancha: 'numero 15' , tiempo: '2hs', email:'antonellacastellano97@gmail.com'}

await cu.ejecutar(datos)
console.log(dao)