const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersController");
const path = require("path");


router.get("/", usersControllers.users);


module.exports = router;