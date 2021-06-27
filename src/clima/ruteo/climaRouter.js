import express from "express";
import CUFactory from "../negocio/CUFactory.js";

const router = express.Router();
const CasoDeUso_ConsultarClima = CUFactory.crearCU_ConsultarClima();

const crearClimaRoute = () => {
  router.get("/", async (req, res) => {
    const { date, lat, long } = req.query;
    try {
      const climaData = await CasoDeUso_ConsultarClima.ejecutar(
        date,
        lat,
        long
      );
      const msg = climaData ? "ok" : "No encontramos datos para esa fecha";
      res.json({ msg, clima: climaData || null });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  return router;
};

export { crearClimaRoute };
