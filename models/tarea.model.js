const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
  titulo: { type: String, required: true },

  descripcion: { type: String },

  estado: { type: String, enum: ["Pendiente", "En progreso", "Finalizado", "Cancelado"], default: "Pendiente" },

  etiquetas: [{ type: String }],

  comentarios: [{
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
    contenido: String,
    fecha: { type: Date, default: Date.now }
  }],


  historial: [{
    estado: { type: String, enum: ["Pendiente", "En progreso", "Finalizado", "Cancelado"] },
    fecha: { type: Date, default: Date.now }
  }],


  asignadoA: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },

},
  {
    timestamps: true
  }
);

const Tarea = mongoose.model("Tarea", TareaSchema);
module.exports = Tarea;