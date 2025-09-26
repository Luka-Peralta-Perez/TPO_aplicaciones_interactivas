# TPO_aplicaciones_interactivas

# TPO_aplicaciones_interactivas
#  API de Gestión de Tareas en Equipos

Una API REST construida con *Node.js, **Express* y *MongoDB* (Mongoose) para gestionar tareas colaborativas en equipos. Permite crear usuarios, equipos, asignar roles, registrar tareas, comentarios, historial de estados y actividad.

---

##  Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- Postman (para testeo)
- JavaScript

---

## Estructura del Proyecto
- /models         → Esquemas Mongoose
- /controllers    → Lógica de negocio
- /routes         → Endpoints HTTP
- /index.js       → Punto de entrada del servidor
- /seeds.js       → Script para poblar la base con datos iniciales
---

## Funcionalidades Implementadas

- [✔] CRUD de usuarios
- [✔] CRUD de equipos
- [✔] Asignación de roles mediante membresías
- [✔] CRUD de tareas
- [✔] Comentarios embebidos en tareas
- [✔] Historial de estados por tarea
- [✔] Etiquetas por tarea
- [✔] Registro de actividad (acciones de usuarios)
- [✔] Seed de datos iniciales (seeds.js)
- [✔] Validaciones básicas (estado, existencia de usuarios/equipos)

---

##  Cómo Ejecutar el Proyecto



```bash
1. Instalar dependencias:

npm install

2. Ejecutar el servidor:

node index.js

3. Poblar la base de datos con datos de prueba:

node seeds.js

4. Probar endpoints con Postman:
- GET /api/usuarios
- GET /api/equipos
- POST /api/tareas
- POST /api/equipos/:equipoId/miembros