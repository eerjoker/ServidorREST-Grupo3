// Esteban Rivera

import { crearErrorDatosInvalidos } from '../../compartido/errors/errorDatosInvalidos.js'
import { crearMailRecordatorioReservas } from '../modelos/MailRecordatorioReservas.js'

function crearCUEnviarRecordatorios (mailer, daoReservas, daoUsuarios) {

  function validarDias(cantDias) {
    cantDias = parseInt(cantDias)
    if(isNaN(cantDias)){
      throw crearErrorDatosInvalidos('La cantidad de días de contemplación no es válida.')
    }
    return cantDias
  }

  async function enviarMailsPorUsuario(reservasPorUsuario, daoUsuarios) {
    const mails = []
    for(const idUsuario in reservasPorUsuario) {
      const usuario = daoUsuarios.getById(Number(idUsuario))
      if(usuario) {
        const mail = crearMailRecordatorioReservas(usuario, reservasPorUsuario[idUsuario])
        mails.push(mail)
      }
    }
    await mailer.enviarVariosConTexto(mails)
  }

  return {
    async ejecutar(cantDias) {

      const diasAContemplar = validarDias(cantDias)
      
      const reservasProximas = await daoReservas.getReservasActivasProximas(diasAContemplar)

      enviarMailsPorUsuario(reservasProximas, daoUsuarios)
    }
  }
}

export { crearCUEnviarRecordatorios }