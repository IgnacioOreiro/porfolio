const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainControllers");
const adminRouter = require("./adminRouter");
const proyectsRouter = require("./proyectsRouter");
const viewersRouter = require("./viewersRouter");

router.get("/", mainControllers.home);

router.use("/admin", adminRouter);
router.use("/proyects", proyectsRouter);
router.use("/viewers", viewersRouter);

module.exports = router;