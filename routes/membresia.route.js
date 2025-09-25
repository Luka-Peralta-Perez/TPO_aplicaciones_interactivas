const express = require("express");
const router = express.Router();
const { getMembresias, createMembresia } = require("../controllers/membresia.controller");

router.get("/", getMembresias);
router.post("/", createMembresia);

module.exports = router;