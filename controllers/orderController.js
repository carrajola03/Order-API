const orderService = require("../services/orderService");

/*
  Criar novo pedido
*/
exports.createOrder = async (req, res) => {
  try {

    const result = await orderService.createOrder(req.body);

    return res.status(201).json({
      message: "Pedido criado com sucesso",
      order: result
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};

/*
  Buscar pedido
*/
exports.getOrder = async (req, res) => {

  try {

    const orderId = req.params.orderId;

    const order = await orderService.getOrder(orderId);

    if (!order) {
      return res.status(404).json({
        message: "Pedido não encontrado"
      });
    }

    return res.status(200).json(order);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};

/*
  Listar pedidos
*/
exports.listOrders = async (req, res) => {

  try {

    const orders = await orderService.listOrders();

    return res.status(200).json(orders);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};

/*
  Atualizar pedido
*/
exports.updateOrder = async (req, res) => {

  try {

    const orderId = req.params.orderId;

    const updated = await orderService.updateOrder(orderId, req.body);

    return res.status(200).json({
      message: "Pedido atualizado",
      order: updated
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};

/*
  Deletar pedido
*/
exports.deleteOrder = async (req, res) => {

  try {

    const orderId = req.params.orderId;

    await orderService.deleteOrder(orderId);

    return res.status(200).json({
      message: "Pedido deletado"
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};