// Ezequiel Salomon

import {crearUsuario} from "../modelos/usuario.js"
import {crearErrorDniEnUso} from "../../compartido/errors/errorDniEnUso.js"


function crearCURegistro(daoUsuarios, mailer, asuntoMailRegistro, generarCuerpoMailRegistro){
    return{
        ejecutar: async (datos) => {
           const registroUsuario = crearUsuario(datos)
           const {added} = await daoUsuarios.add(registroUsuario, 'dni') 
           if(!added){
                 throw crearErrorDniEnUso(`Ya existe un usuario con el dni ${registroUsuario.dni}`)
            }
           await mailer.enviarConHtml(datos.email, asuntoMailRegistro , generarCuerpoMailRegistro(datos))
        }
    } 
}



export {crearCURegistro}