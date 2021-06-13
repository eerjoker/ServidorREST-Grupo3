import {crearEnviadorDeMails} from './crearEnviadorDeMails.js'
import {getCnxMail} from '../../config.js'

function crearMailer(){
    return crearEnviadorDeMails(getCnxMail().mail, getCnxMail().pass)
}

export {crearMailer}