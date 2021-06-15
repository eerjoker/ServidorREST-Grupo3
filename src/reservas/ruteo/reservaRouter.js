import express from "express";
import crearFactoryCU from "../negocio/factoryCUReservas.js";

const factoryCU = crearFactoryCU();

function crearRouterReserva() {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const CU_confirmarReserva = factoryCU.crearCU_confirmarReserva();
    const reserva = await CU_confirmarReserva.ejecutar(req.body);
    res.json({ reserva });
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
