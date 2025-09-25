const Tarea = require("../models/tarea.model");
const { registrarActividad } = require("./actividad.controller");

// Crea una tarea
const createTarea = async (req, res) => {
  try {
    const tarea = await Tarea.create(req.body);

    await registrarActividad({
      usuarioId: req.body.asignadoA,
      accion: "Creó tarea",
      entidad: "Tarea",
      entidadId: tarea._id
    });

    res.status(201).json(tarea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Lista todas las tareas
const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({});
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// Busca una Tarea por ID
const getTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findById(id);

        if (!tarea) {
            return res.status(404).json({ message: "Tarea no encontrado" });
        }

        res.status(200).json(tarea); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

// Actualiza una tarea
const updateTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareaActual = await Tarea.findById(id);

    if (!tareaActual) {
      return res.status(404).json({ message: "Tarea no encontrado" });
    }

    if (["Finalizado", "Cancelado"].includes(tareaActual.estado)) {
      return res.status(403).json({ message: "No se puede editar una tarea finalizado o cancelada" });
    }

    await Tarea.findByIdAndUpdate(id, req.body);
    const updatedTarea = await Tarea.findById(id);
    res.status(200).json(updatedTarea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Elimina una tarea
const deleteTarea = async (req, res) => {
    try {
        const { id } = req.params;

        const tarea = await Tarea.findByIdAndDelete(id);

        if (!tarea) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        res.status(200).json({ message: "Tarea eliminada exitosamente!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTareas,
    getTarea,
    createTarea,
    updateTarea,
    deleteTarea
};