const express = require("express");
const router = express.Router();
const viewersControllers = require("../controllers/viewersController");
const path = require("path");


router.get("/", viewersControllers.viewers);


module.exports = router;