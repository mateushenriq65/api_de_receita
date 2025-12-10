const pool = require("../config/db");

module.exports = {
  async criar(req, res) {
    const { receita_id, nome, quantidade } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO ingredientes (receita_id, nome, quantidade) VALUES ($1, $2, $3) RETURNING *",
        [receita_id, nome, quantidade]
      );

      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  async listarPorReceita(req, res) {
    const { id } = req.params;

    try {
      const result = await pool.query(
        "SELECT * FROM ingredientes WHERE receita_id = $1",
        [id]
      );
      res.json(result.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};
