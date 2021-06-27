import express from "express";
import CUFactory from "../negocio/CUFactory.js";

const router = express.Router();
const CasoDeUso_ConsultarClima = CUFactory.crearCU_ConsultarClima();

const crearClimaRoute = () => {
  router.get("/", async (req, res, next) => {
    const { date, lat, long } = req.query;
    try {
      const climaData = await CasoDeUso_ConsultarClima.ejecutar(
        date,
        lat,
        long
      );
      res.json({ msg: "ok", clima: climaData });
    } catch (e) {
      next(e);
    }
  });

  router.use((err, req, res, next) => {
    if (err.type === "ERROR_FORMATO_FECHA_INCORRECTO") {
      res.status(400);
    } else if (err.type === "ERROR_CLIMA_NO_ENCONTRADO") {
      res.status(404);
    } else {
      res.status(500);
    }
    res.json({ message: err.message });
  });

  return router;
};

export { crearClimaRoute };
