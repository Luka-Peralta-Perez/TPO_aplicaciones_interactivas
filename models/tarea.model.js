const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
  titulo: { type: String, required: true },

  descripcion: { type: String },

  estado: { type: String, enum: ["Pendiente", "En progreso", "Finalizado", "Cancelado"], default: "Pendiente" },

  etiquetas: [{ type: String }],

  comentarios: [{ autor: String, texto: String, fecha: Date }],

  historial: [{ estado: String, fecha: Date }],

  asignadoA: { type: String }, 

}, 
{ 
    timestamps: true 
}
);

const Tarea = mongoose.model("Tarea", TareaSchema);
module.exports = Tarea;