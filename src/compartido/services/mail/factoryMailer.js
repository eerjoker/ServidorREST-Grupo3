import {getCnxMail} from '../../config.js'
import {crearEnviadorDeMails} from './crearEnviadorDeMails.js'

function crearMailer(){
    return crearEnviadorDeMails(getCnxMail().mail, getCnxMail().pass)
}

export {crearMailer}