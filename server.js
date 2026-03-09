const express = require("express");
const cors = require("cors");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

/* Middleware para ler JSON */
app.use(express.json());

/* Permitir acesso externo */
app.use(cors());

/* Health check da API */
app.get("/", (req, res) => {
 res.json({
  status: "API funcionando",
  service: "Order API"
 });
});

/* Rotas */
app.use("/order", orderRoutes);

/* Inicializa servidor */
app.listen(3000, () => {
 console.log("API rodando em http://localhost:3000");
});