const mongoose = require("mongoose");

// Guarda el estado y la fecha cada vez que una tarea cambia de estado
const HistorialSchema = mongoose.Schema({
  tarea: { type: mongoose.Schema.Types.ObjectId, ref: "Tarea" },
  estado: { type: String, enum: ["Pendiente", "En progreso", "Finalizado", "Cancelado"] },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Historial", HistorialSchema);