const mongoose = require("mongoose");

// Controla qué rol tiene cada usuario dentro de un equipo
const MembresiaSchema = mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  equipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" },
  rol: { type: String, enum: ["admin", "miembro"], default: "miembro" }
}, { timestamps: true });

module.exports = mongoose.model("Membresia", MembresiaSchema);