const pool = require("../config/db");

module.exports = {
  async criar(req, res) {
    const { nome, email, senha } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *",
        [nome, email, senha]
      );

      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  async listar(req, res) {
    try {
      const result = await pool.query("SELECT * FROM usuarios ORDER BY id");
      res.json(result.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};
