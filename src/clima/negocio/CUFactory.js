import ConsultarClima from './CUConsultarClima.js'
import Pronosticador from '../../compartido/services/clima/pronosticador.js'

function crearCU_ConsultarClima() {
    const pronosticador = new Pronosticador('1b50acfccfccab2eb23d9240cb6e8d21')
    const CU_Clima = ConsultarClima(pronosticador)
    return CU_Clima
}

export default {
    crearCU_ConsultarClima
}