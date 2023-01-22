const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const adminRouter = require("./adminRouter");
const proyectsRouter = require("./proyectsRouter");
const usersRouter = require("./usersRouter");

router.get("/", mainControllers.home);

router.use("/admin", adminRouter);
router.use("/proyects", proyectsRouter);
router.use("/users", usersRouter);

module.exports = router;