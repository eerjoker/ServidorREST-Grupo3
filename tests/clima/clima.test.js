import { crearServidorFactory } from "../../src/compartido/servidor/servidorFactory.js"
import axios from 'axios'

async function main() {

    const servidor = crearServidorFactory().crearServidor();

    await servidor.conectar(3000)

    const date = new Date(2021,5,25)
    const dateFail = 'asd'
    const dateOutOfRange = new Date(2021,6,25)

    console.log("Clima test exitoso")
    try{
        const {data} = await axios.get(`http://localhost:${3000}/clima/${date}`)
        console.log("REST SERVER RESULT: ", data)
    } catch (err){
        console.log("ERROR", err.response.data)
    }

    console.log("Clima test fallido")
    try{
        const {data} = await axios.get(`http://localhost:${3000}/clima/${dateFail}`)
        console.log("REST SERVER RESULT: ", data)
    } catch (err){
        console.log("ERROR", err.response.data)
    }

    console.log("Clima test fuera de rango")
    try{
        const {data} = await axios.get(`http://localhost:${3000}/clima/${dateOutOfRange}`)
        console.log("REST SERVER RESULT: ", data)
    } catch (err){
        console.log("ERROR", err.response.data)
    }
}

main()