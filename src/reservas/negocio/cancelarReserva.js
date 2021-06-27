import { crearErrorIdInexistente } from "../../compartido/errors/errorReservaIdInexistente.js";
import { crearErrorIdInvalido } from "../../compartido/errors/errorIdInvalido.js";
// Ivan Riboldi

function crearCUCancelarReserva(dao, mailer) {
  return {
    async ejecutar(idReserva) {
      const idReservaParsed = parseInt(idReserva);
      if (isNaN(idReservaParsed)) {
        throw crearErrorIdInvalido("El ID de la reserva debe ser numerico.");
      }
      const { cancelItem, cant } = await dao.cancelOneReservation(idReserva);
      if (!cant) throw crearErrorIdInexistente("Reserva inexistente");
      if (!cancelItem) return;
      mailer.enviarConHtml(
        cancelItem.email,
        "Cancelacion de reserva",
        `<div>Estimado usuario usted a cancelado su reserva de forma exitosa!</div></br><h3>Detalle de reserva: </h3></br><strong>Nombre: </strong>${cancelItem.nombre}</br><strong>Fecha: </strong>${cancelItem.fechaHora}`
      );
      return cancelItem;
    },
  };
}

export { crearCUCancelarReserva };
