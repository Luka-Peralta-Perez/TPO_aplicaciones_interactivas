const Equipo = require("../models/equipo.model");
const Usuario = require("../models/usuario.model");
const Membresia = require("../models/membresia.model");

// Lista equipos
const getEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.find({}).populate("miembros");
        res.status(200).json(equipos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crea el equipo
const createEquipo = async (req, res) => {
    try {
        const equipo = await Equipo.create(req.body);
        res.status(201).json(equipo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Agrega un miembro a un equipo
const agregarMiembro = async (req, res) => {
    try {
        const { equipoId } = req.params;
        const { usuarioId, rol } = req.body;

        const equipo = await Equipo.findById(equipoId);
        const usuario = await Usuario.findById(usuarioId);

        if (!equipo || !usuario) {
            return res.status(404).json({ message: "Equipo o usuario no encontrado" });
        }

        // Agrega al array de miembros del equipo
        if (!equipo.miembros.includes(usuarioId)) {
            equipo.miembros.push(usuarioId);
            await equipo.save();
        }

        // Crea la membresía
        const membresia = await Membresia.create({ usuario: usuarioId, equipo: equipoId, rol });

        res.status(201).json({ message: "Miembro agregado", membresia });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getEquipos, createEquipo, agregarMiembro };