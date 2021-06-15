function cancelarReserva(dao, mailer) {
  return {
    async ejecutar(idReserva) {
      const { cancelItem } = await dao.cancelOneReservation(idReserva);
      if (!cancelItem) return;
      mailer.enviarConHtml(
        //el usuario deberia salir de la misma reserva cancelada
        "ivan.riboldi@outlook.com",
        "Cancelacion de reserva",
        `<div>Estimado usuario usted a cancelado su reserva de forma exitosa!</div></br><h3>Detalle de reserva: </h3></br><strong>Nombre: </strong>${cancelItem.nombre}</br><strong>Fecha: </strong>${cancelItem.fechaHora}`
      );
      return cancelResult;
    },
  };
}

export { cancelarReserva };
