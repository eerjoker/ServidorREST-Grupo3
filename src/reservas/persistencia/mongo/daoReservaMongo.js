function crearDaoReservasMongo(db) {
  const dbReservas = db.collection("reservas");

  return {
    guardar: async (reserva) => {
      const res = await dbReservas.insertOne(reserva);
      return res.ops[0];
    },
    getReservasActivas: async () => {
      const reservasActivas = await dbReservas.find({ activa: true }).toArray();
      return reservasActivas;
    },
    getReservasActivasProximas: async (diasLimite) => {
      const reservasPorUsuario = {};
      const maniana = new Date();
      maniana.setDate(maniana.getDate() + 1);
      const fechaLimite = new Date();
      fechaLimite.setDate(fechaLimite.getDate() + diasLimite);
      const res = await dbReservas
        .find({
          activa: true,
          fechaHora: {
            $gte: maniana.toISOString(),
            $lt: fechaLimite.toISOString(),
          },
        })
        .toArray();

      for (const reserva of res) {
        if (Array.isArray(reservasPorUsuario[reserva.idUsuario])) {
          reservasPorUsuario[reserva.idUsuario].push(reserva);
        } else {
          reservasPorUsuario[reserva.idUsuario] = [reserva];
        }
      }
      return reservasPorUsuario;
    },
    cancelOneReservation: async (id) => {
      const reserva = await dbReservas.findOneAndUpdate(
        { idReserva: parseInt(id) },
        {
          $set: {
            cancelada: true,
            activa: false,
          },
        }
      );
      return {
        message: "Cancelacion exitosa.",
        cancelItem: reserva.value,
      };
    },
  };
}

export { crearDaoReservasMongo };
