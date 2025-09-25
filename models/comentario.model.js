const mongoose = require("mongoose");

// Registra texto, autor y fecha de cada comentario asociado a una tarea
const ComentarioSchema = mongoose.Schema({
  tarea: { type: mongoose.Schema.Types.ObjectId, ref: "Tarea" },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  texto: { type: String, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comentario", ComentarioSchema);