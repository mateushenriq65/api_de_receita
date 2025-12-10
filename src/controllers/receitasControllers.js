const pool = require("../config/db");

module.exports = {
  async criar(req, res) {
    const { titulo, descricao, ingredientes, preparo } = req.body;

    try {
      const result = await pool.query(
        `INSERT INTO receitas (titulo, descricao, ingredientes, preparo)
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [titulo, descricao, ingredientes, preparo]
      );

      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).send(err.message);
    }
  },

  async listar(req, res) {
    try {
      const result = await pool.query("SELECT * FROM receitas ORDER BY id");
      res.json(result.rows);
    } catch (err) {
      console.log("ERRO AO LISTAR RECEITAS:", err);
      res.status(500).send(err.message);
    }
  }
};
