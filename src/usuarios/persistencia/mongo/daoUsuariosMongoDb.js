import { crearErrorUsuarioNoEncontrado } from "../../../compartido/errors/errorUsuarioNoEncotrado"
import {crearUsuario} from "../../modelos/usuario.js"

function crearDaoUsuariosMongoDb(db){
    
    const usuarios = db.collection('usuarios')
    return{
        add: async (usuario, claveUnica) => {
            const existe = await usuarios.findOne({ id })
            if(existe){            
                return {added: 0}
            }else{
                await usuarios.insertOne(usuario)
                return {added: 1}
            }   
        },
        getById: async (id) => {
            const uBuscado = await usuarios.findOne({ id })
            if (buscado) {
                console.log('cliente encontrado!')
                return buscado
              } else {
                throw crearErrorClienteNoEncontrado()
              }
            
        },
        getByDni: async (dni) => {
            const registros = await usuarios.find({ dni }).toArray()
            const estudiantesAux = registros.map(reg => crearUsuario(reg))
            return estudiantesAux
        },
        getAll: async () => {
            const registros = await usuarios.find({}).toArray()
            const estudiantesAux = registros.map(reg => crearUsuario(reg))
            return estudiantesAux
        }
    }
}

export {crearDaoUsuariosCache}