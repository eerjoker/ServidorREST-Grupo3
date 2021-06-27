import moment from 'moment'

function ConsultarClima(pronosticador) {
    return {
        ejecutar: async (fecha, latitud, longitud) => {     
        try {
            const nuevaFecha = moment(new Date(fecha))
            const fechaFormateada = nuevaFecha.format('dddd DD MMMM')
            if(fechaFormateada !== 'Fecha inválida'){
                return await pronosticador.getWeather(fechaFormateada, latitud, longitud)
            }
        } catch (error) {
            throw new Error('argumentos invalidos: fecha mal formada')
        }
    }}
}

export default ConsultarClima