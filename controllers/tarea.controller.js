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

// Lista tareas con o sin filtros
const getTareasConFiltros = async (req, res) => {
  try {
    const filtros = {};

    if (req.query.estado) {
      filtros.estado = req.query.estado;
    }

    if (req.query.asignadoA) {
      filtros.asignadoA = req.query.asignadoA;
    }

    const tareas = await Tarea.find(filtros);
    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Busca una tarea por ID
const getTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tarea = await Tarea.findById(id);

    if (!tarea) {
      return res.status(404).json({ message: "Tarea no encontrada" });
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
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    if (["Finalizado", "Cancelado"].includes(tareaActual.estado)) {
      return res.status(403).json({ message: "No se puede editar una tarea finalizada o cancelada" });
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

// Agrega un comentario a una tarea
const addComentario = async (req, res) => {
  try {
    const { id } = req.params;
    const { autor, contenido } = req.body;

    const tarea = await Tarea.findById(id);
    if (!tarea) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    const nuevoComentario = {
      autor,
      contenido,
      fecha: new Date()
    };

    tarea.comentarios.push(nuevoComentario);
    await tarea.save();

    await registrarActividad({
      usuarioId: autor,
      accion: "Comentó tarea",
      entidad: "Tarea",
      entidadId: tarea._id
    });

    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTareasConFiltros,
  getTarea,
  createTarea,
  updateTarea,
  deleteTarea,
  addComentario
};