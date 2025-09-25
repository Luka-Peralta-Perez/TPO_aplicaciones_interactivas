const Membresia = require("../models/membresia.model");

// Lista las membresías
const getMembresias = async (req, res) => {
  try {
    const membresias = await Membresia.find({}).populate("usuario equipo");
    res.status(200).json(membresias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crea la membresía
const createMembresia = async (req, res) => {
  try {
    const membresia = await Membresia.create(req.body);
    res.status(201).json(membresia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMembresias, createMembresia };