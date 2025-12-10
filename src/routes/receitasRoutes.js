const express = require("express");
const router = express.Router();
const controller = require("../controllers/receitasControllers");
const receitasControllers = require("../controllers/receitasControllers");

router.post("/", receitasControllers.criar);
router.get("/", receitasControllers.listar);

module.exports = router;
