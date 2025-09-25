const express = require("express");
const router = express.Router();
const { getTareas, getTarea, createTarea, updateTarea, deleteTarea } = require("../controllers/tarea.controller.js");

router.get("/", getTareas);

router.get("/:id", getTarea);

router.post("/", createTarea);

router.put("/:id", updateTarea);

router.delete("/:id", deleteTarea);

module.exports = router;