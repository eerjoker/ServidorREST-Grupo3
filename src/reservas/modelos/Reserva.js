class Reserva {
  constructor({
    nombre,
    fechaHora,
    cancha,
    email,
    activa,
    cancelada,
    idUsuario,
  }) {
    this.nombre = nombre;
    this.fechaHora = fechaHora;
    this.cancha = cancha;
    this.email = email;
    this.activa = activa;
    this.cancelada = cancelada;
    this.idUsuario = idUsuario;
  }
}

export default Reserva;
