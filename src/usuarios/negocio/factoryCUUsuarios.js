import {crearMailer} from '../../compartido/services/mail/factoryMailer.js'
import DaoFactory from "../persistencia/daoUsuariosFactory.js"
import  {crearCURegistro} from './crearRegistro.js'
import { asuntoMailRegistro, generarCuerpoMailRegistro } from "../../compartido/services/mail/mailRegistro.js"

const mailer = crearMailer()
const daoUsuarios = DaoFactory.getDaoUsuarios()

function crearFactoryCU() {
    
    return {
        crearCURegistro(){
            const CURegistro = crearCURegistro(daoUsuarios, mailer, asuntoMailRegistro, generarCuerpoMailRegistro)
            return CURegistro
        }
    }
}

export { crearFactoryCU }