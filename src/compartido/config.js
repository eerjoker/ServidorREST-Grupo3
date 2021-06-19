import dotenv from 'dotenv'

dotenv.config()

const getCnxMail = () => {
  
    return {
        mail: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
} 

function getCnxStr() {
    return process.env.CNX_STR
  }
  
  function getMode() {
    return process.env.MODE || 'TEST'
  }

export {getCnxMail, getCnxStr, getMode}