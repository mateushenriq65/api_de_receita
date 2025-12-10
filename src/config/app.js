const express = require("express");
const cors = require("cors");

const usuariosRoutes = require("../routes/usuariosRoutes");
const receitasRoutes = require("../routes/receitasRoutes");
const ingredientesRoutes = require("../routes/ingredientesRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/receitas", receitasRoutes);
app.use("/ingredientes", ingredientesRoutes);

module.exports = app;
