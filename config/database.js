const { Pool } = require("pg");



const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "order_api",
  password: "C@rr@j0l@03#",
  port: 5432
});

module.exports = pool;