const express = require("express");
const router = express.Router();

const {
  getTareasConFiltros, // Este reemplaza el listado simple
  getTarea,
  createTarea,
  updateTarea,
  deleteTarea,
  addComentario
} = require("../controllers/tarea.controller.js");

// Listado de tareas con o sin filtros
router.get("/", getTareasConFiltros);

// Obtiene una tarea específica
router.get("/:id", getTarea);

// Crea una nueva tarea
router.post("/", createTarea);

// Actualiza una tarea existente
router.put("/:id", updateTarea);

// Elimina una tarea
router.delete("/:id", deleteTarea);

// Agrega un comentario a una tarea
router.post("/:id/comentarios", addComentario);

module.exports = router;