const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bd_receitas",
  password: "wcc@2023",
  port: 5432,
});

pool.connect()
    .then(() => console.log("Conexão com o banco de dados estabelecida com sucesso!"))      
    .catch(err => console.error("Erro ao conectar ao banco de dados:", err));
    
module.exports = pool
