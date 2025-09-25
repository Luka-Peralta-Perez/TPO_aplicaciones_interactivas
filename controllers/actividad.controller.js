const Actividad = require("../models/actividad.model");

const registrarActividad = async ({ usuarioId, accion, entidad, entidadId }) => {
  try {
    await Actividad.create({ usuario: usuarioId, accion, entidad, entidadId });
  } catch (error) {
    console.error("Error registrando actividad:", error.message);
  }
};

module.exports = { registrarActividad };