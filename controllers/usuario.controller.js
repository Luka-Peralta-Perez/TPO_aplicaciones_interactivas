const Usuario = require("../models/usuario.model");

// Lista todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crea un nuevo usuario
const createUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUsuarios, createUsuario };