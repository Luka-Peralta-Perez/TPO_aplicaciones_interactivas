const mongoose = require('mongoose');

// Representación del grupo de trabajo
const EquipoSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  miembros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }]
}, { timestamps: true });

module.exports = mongoose.model("Equipo", EquipoSchema);