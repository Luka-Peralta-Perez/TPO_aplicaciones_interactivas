const express = require('express');
const mongoose = require('mongoose');
const tareaRoute = require('./routes/tarea.route.js');
const app = express()
const usuarioRoute = require("./routes/usuario.route");
const equipoRoute = require("./routes/equipo.route");
const membresiaRoute = require("./routes/membresia.route");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

// Middleware
app.use("/api/usuarios", usuarioRoute);
app.use("/api/equipos", equipoRoute);
app.use("/api/membresias", membresiaRoute);
app.use("/api/tareas", tareaRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Routes
app.use("/api/tareas", tareaRoute);

app.get("/", (req, res) => {
    res.send("Hola desde Node API Server");
});

mongoose.connect("mongodb+srv://moraivanec2_db_user:DjE4Na8pOJMF2PvN@backenddb.d2g62pe.mongodb.net/Node_API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Conectado a la base de datos!");
        app.listen(3000, () => {
            console.log('El servidor se está ejecutando en el puerto 3000');
        });
    })
    .catch((err) => {
        console.error("La conexión falló:", err.message);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});
