// Esteban Rivera

import { crearErrorDatosInvalidos } from '../../compartido/errors/errorDatosInvalidos.js'
import { crearMailRecordatorioReservas } from '../modelos/MailRecordatorioReservas.js'

function crearCUEnviarRecordatorios (mailer, daoReservas, daoUsuarios) {

  function validarDias(dias) {
    dias = parseInt(dias)
    if(isNaN(dias)){
      throw crearErrorDatosInvalidos('La cantidad de días de contemplación no es válida.')
    }
    return dias
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
    async ejecutar(data) {

      const diasAContemplar = validarDias(data.dias)
      
      const reservasProximas = await daoReservas.getReservasActivasProximas(diasAContemplar)

      enviarMailsPorUsuario(reservasProximas, daoUsuarios)
    }
  }
}

export { crearCUEnviarRecordatorios }