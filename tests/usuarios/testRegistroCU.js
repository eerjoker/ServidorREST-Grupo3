import {crearCURegistro} from "../../src/usuarios/negocio/crearRegistro.js"

function crearDaoUsuariosTest() {
    const usuarios = []
    return {
        add: (usuario, claveUnica) => {
            const existe = usuarios.some(u => {
                return u[claveUnica] === usuario[claveUnica]
            })
            if (existe) {
                console.log(`El usuario ${usuario.nombre} no se ha registrado. Ya existe`)
                return {
                    added: 0
                }
            } else {
                usuarios.push(usuario)
                console.log(`El usuario ${usuario.nombre} se ha registrado`)
                return {
                    added: 1
                }
            }
        }
    }
}

const daoUsuarios = crearDaoUsuariosTest()

const enviadorDeMails = {
    enviarConHtml: async (to, subject, html) => {
            console.log(`Mail enviado a ${to}
            asunto: ${subject} 
            HTML a enviar: ${html} `)
        },
    }

const socio1 = {
    nombre: 'eze1',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '567777',
    password: 'eze1'
}

const socio2 = {
    nombre: 'eze2',
    apellido: 'salo',
    email: 'clubortemail@gmail.com',
    dni: '56',
    password: 'eze1'
  }

const CU_registro = crearCURegistro(daoUsuarios, enviadorDeMails)

CU_registro.ejecutar(socio1)
CU_registro.ejecutar(socio2)