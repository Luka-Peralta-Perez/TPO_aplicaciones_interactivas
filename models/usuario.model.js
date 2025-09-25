const mongoose = require("mongoose");

// Crea usuarios, les asigna tareas, y los usa como autores de
// comentarios
const UsuarioSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  rol: { type: String, enum: ["admin", "miembro"], default: "miembro" }
}, { timestamps: true });

module.exports = mongoose.model("Usuario", UsuarioSchema);