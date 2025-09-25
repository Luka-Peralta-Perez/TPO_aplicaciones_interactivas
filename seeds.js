const mongoose = require("mongoose");
const Usuario = require("./models/usuario.model");
const Equipo = require("./models/equipo.model");
const Membresia = require("./models/membresia.model");
const Tarea = require("./models/tarea.model");
const { registrarActividad } = require("./controllers/actividad.controller");

mongoose.connect("mongodb+srv://moraivanec2_db_user:DjE4Na8pOJMF2PvN@backenddb.d2g62pe.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB")
  .then(async () => {
    console.log("Conectado a la base de datos");

    // Limpieza previa
    await Usuario.deleteMany({});
    await Equipo.deleteMany({});
    await Membresia.deleteMany({});
    await Tarea.deleteMany({});

    // Crear usuarios
    const usuario1 = await Usuario.create({ nombre: "Mora", email: "moraivanec@gmail.com" });
    const usuario2 = await Usuario.create({ nombre: "Luka", email: "lukaperalta@gmail.com" });

    // Crear equipo
    const equipo = await Equipo.create({ nombre: "Equipo Rocket", miembros: [usuario1._id] });

    // Crear membresía
    await Membresia.create({ usuario: usuario1._id, equipo: equipo._id, rol: "admin" });
    await Membresia.create({ usuario: usuario2._id, equipo: equipo._id, rol: "colaborador" });

    // Crear tarea
    const tarea = await Tarea.create({
      titulo: "Diseñar logo",
      descripcion: "Crear un logo para la app",
      estado: "Pendiente",
      etiquetas: ["diseño", "branding"],
      asignadoA: usuario2._id,
      comentarios: [{
        autor: usuario1._id,
        texto: "Usá colores vibrantes"
      }],
      historial: [{
        estado: "Pendiente"
      }]
    });

    // Registrar actividad
    await registrarActividad({
      usuarioId: usuario1._id,
      accion: "Creó tarea",
      entidad: "Tarea",
      entidadId: tarea._id
    });

    console.log("Datos iniciales cargados ✅");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error al conectar:", err.message);
  });