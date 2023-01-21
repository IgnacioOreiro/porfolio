const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers");
const path = require("path");


router.get("/", adminController.admin);


module.exports = router;