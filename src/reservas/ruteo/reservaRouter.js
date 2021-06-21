import { crearFactoryCU } from "../negocio/factoryCUReservas.js";
import express from "express";

const factoryCU = crearFactoryCU();

function crearRouterReserva() {
  const router = express.Router();

  router.post("/crear", async (req, res) => {
    try {
      const CU_confirmarReserva = factoryCU.crearCU_confirmarReserva();
      const reserva = await CU_confirmarReserva.ejecutar(req.body);
      return res.json({ reserva });
    } catch (err) {
      return res.status(404).send({ error: err.message });
    }
  });

  router.put("/cancelar/:idReserva", async (req, res) => {
    const { idReserva } = req.params;
    try {
      const cancelarReserva = factoryCU.crearCUCancelarReserva();
      const result = await cancelarReserva.ejecutar(idReserva);
      return res.send(result);
    } catch (err) {
      return res.status(404).send({ error: err.message });
    }
  });

  return router;
}

export { crearRouterReserva };
