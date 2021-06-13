const reservas = []

function crearDaoReservasCache() {
    return {
        guardar: async (r) => {
            reservas.push(r)
        },
        getReservasActivas: () => {
        return reservas.filter(r => r.activa === true)
        },
        getReservasActivasProximas(diasLimite) {
        const reservasActivas = this.getReservasActivas()
        const reservasPorUsuario = {}
        const maniana = new Date()
        maniana.setDate(maniana.getDate() + 1)
        const fechaLimite = new Date()
        fechaLimite.setDate(fechaLimite.getDate() + diasLimite)
    
        for(const reserva of reservasActivas) {
            if(reserva.fechaHora.getDate() <= fechaLimite.getDate()
            && reserva.fechaHora.getMonth() <= fechaLimite.getMonth()
            && reserva.fechaHora.getFullYear() <= fechaLimite.getFullYear()
            && reserva.fechaHora.getDate() >= maniana.getDate()
            && reserva.fechaHora.getMonth() >= maniana.getMonth()
            && reserva.fechaHora.getFullYear() >= maniana.getFullYear()
            ) {
            if(Array.isArray(reservasPorUsuario[reserva.idUsuario])) {
                reservasPorUsuario[reserva.idUsuario].push(reserva)
            } else {
                reservasPorUsuario[reserva.idUsuario] = [reserva]
            }
            }
        }
        return reservasPorUsuario
        }
    }
}

export {crearDaoReservasCache}