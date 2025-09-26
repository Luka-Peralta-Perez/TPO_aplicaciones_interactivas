const express = require("express");
const router = express.Router();
const { getActividadPorUsuario, getActividadPorEquipo } = require("../controllers/actividad.controller");

router.get("/usuario/:usuarioId", getActividadPorUsuario);
router.get("/equipo/:equipoId", getActividadPorEquipo);

module.exports = router;