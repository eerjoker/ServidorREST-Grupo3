
class Reserva {
    constructor({ nombre, fechaHora, cancha, email, activa, idUsuario })
 {
        this.nombre  =  nombre ;
        this.fechaHora = fechaHora
        this.cancha  =  cancha ;
        this.email = email;
        this.activa = activa;
        this.idUsuario = idUsuario;
    }
}
    
export default Reserva