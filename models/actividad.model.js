const mongoose = require("mongoose");

// Modelo que registra acciones realizadas por usuarios en el sistema
const ActividadSchema = mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }, 
  accion: { type: String, required: true }, 
  entidad: { type: String }, 
  entidadId: { type: mongoose.Schema.Types.ObjectId }, 
  fecha: { type: Date, default: Date.now } 
}, { timestamps: true });

module.exports = mongoose.model("Actividad", ActividadSchema);