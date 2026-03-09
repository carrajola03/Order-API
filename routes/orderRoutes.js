const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

/*
  Criar pedido
*/
router.post("/", orderController.createOrder);

/*
  Buscar pedido por id
*/
router.get("/:orderId", orderController.getOrder);

/*
  Listar pedidos
*/
router.get("/list/all", orderController.listOrders);

/*
  Atualizar pedido
*/
router.put("/:orderId", orderController.updateOrder);

/*
  Deletar pedido
*/
router.delete("/:orderId", orderController.deleteOrder);

module.exports = router;