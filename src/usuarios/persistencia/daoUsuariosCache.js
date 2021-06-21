const usuarios = []

function crearDaoUsuariosCache(){
    return{
        add: (usuario, claveUnica) => {
            const existe = usuarios.some(u => {
                return u[claveUnica] === usuario[claveUnica]
            })
            if(existe){            
                return {added: 0}
            }else{
                usuarios.push(usuario)
                console.log('usuario agregado')
                return {added: 1}
            }   
        },
        getById: (id) => {
            return usuarios.find(u => u.id === id)
        },
        getByDni: (dni) => {
            return usuarios.filter(u => u.dni === dni)
        },
        getAll: () => {
            return [...usuarios]
        }
    }
}

export {crearDaoUsuariosCache}