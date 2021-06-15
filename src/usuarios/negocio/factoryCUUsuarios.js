import {crearMailer} from '../../compartido/services/mail/factoryMailer.js'
import {crearDaoUsuariosCache} from '../persistencia/daoUsuariosCache.js'
import  {crearCURegistro} from './crearRegistro.js'

const mailer = crearMailer()
const daoUsuarios = crearDaoUsuariosCache()

function crearFactoryCU() {
    
    return {
        crearCURegistro(){
            const CURegistro = crearCURegistro(daoUsuarios, mailer)
            return CURegistro
        }
    }
}

export { crearFactoryCU }