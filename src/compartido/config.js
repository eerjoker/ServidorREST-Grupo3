import dotenv from "dotenv";

dotenv.config();

const getCnxMail = () => {
  return {
    mail: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  };
};

function getCnxStr() {
  return process.env.CNX_STR;
}

function getMode() {
  return process.env.MODE || "TEST";
}

function getClimaApiKey() {
  return process.env.CLIMA_API_KEY;
}

export { getCnxMail, getCnxStr, getMode, getClimaApiKey };
