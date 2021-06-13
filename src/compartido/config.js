import dotenv from 'dotenv'

dotenv.config()

const getCnxMail = () => {
  
    return {
        mail: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
} 

export {getCnxMail}