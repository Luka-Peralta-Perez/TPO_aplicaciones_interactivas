const express = require("express");
const router = express.Router();
const { getEquipos, createEquipo, agregarMiembro } = require("../controllers/equipo.controller");

router.get("/", getEquipos);
router.post("/", createEquipo);
router.post("/:equipoId/miembros", agregarMiembro);


module.exports = router;