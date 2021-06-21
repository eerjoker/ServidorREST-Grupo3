import {crearEnviadorDeMails} from "../../../../src/compartido/services/mail/enviadorDeMails.js"
import {getCnxMail} from "../../../../src/compartido/config.js"

const mailer = crearEnviadorDeMails(getCnxMail().mail, getCnxMail().pass)

await mailer.enviarConHtml("clubortemail@gmail.com", "TestMailer", `<h1> Probando Mailer </h1>` )