const express = require("express");
const router = express.Router();
const controller = require("../controllers/ingredientesControllers");

router.post("/", controller.criar);
router.get("/:id", controller.listarPorReceita);

module.exports = router;
