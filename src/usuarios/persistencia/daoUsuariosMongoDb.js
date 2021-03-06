import { crearErrorUsuarioNoEncontrado } from "../../compartido/errors/errorUsuarioNoEncotrado.js";
import { crearUsuario } from "../modelos/Usuario.js";

function crearDaoUsuariosMongoDb(db) {
  const usuarios = db.collection("usuarios");
  return {
    add: async (usuario) => {
      const existe = await usuarios.findOne({ dni: usuario.dni });
      if (existe) {
        return { added: 0 };
      } else {
        await usuarios.insertOne(usuario);
        return { added: 1 };
      }
    },
    getById: async (id) => {
      const uBuscado = await usuarios.findOne({ id });
      if (buscado) {
        return buscado;
      } else {
        throw crearErrorUsuarioNoEncontrado();
      }
    },
    getByDni: async (dni) => {
      const registros = await usuarios.find({ dni }).toArray();
      const usuariosAux = registros.map((reg) => crearUsuario(reg));
      return usuariosAux;
    },
    getAll: async () => {
      const registros = await usuarios.find({}).toArray();
      const usuariosAux = registros.map((reg) => crearUsuario(reg));
      return usuariosAux;
    },
  };
}

export { crearDaoUsuariosMongoDb };
