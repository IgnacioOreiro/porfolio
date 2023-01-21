const express = require("express");
const router = express.Router();
const proyectsController = require("../controllers/proyectsControllers");
const path = require("path");


router.get("/", proyectsController.proyects);


module.exports = router;