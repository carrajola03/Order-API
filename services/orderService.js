const db = require("../config/database");

/*
  Criar pedido
*/
exports.createOrder = async (data) => {

  /*
    Mapping do JSON recebido para o formato do banco
  */

  const orderId = data.numeroPedido;
  const value = data.valorTotal;
  const creationDate = new Date(data.dataCriacao);

  /*
    Inserir pedido
  */

  await db.query(
    `INSERT INTO orders(orderid,value,creationdate)
     VALUES($1,$2,$3)`,
    [orderId, value, creationDate]
  );

  /*
    Inserir items
  */

  for (const item of data.items) {

    await db.query(
      `INSERT INTO items(orderid,productid,quantity,price)
       VALUES($1,$2,$3,$4)`,
      [
        orderId,
        parseInt(item.idItem),
        item.quantidadeItem,
        item.valorItem
      ]
    );

  }

  return { orderId };
};

/*
  Buscar pedido
*/

exports.getOrder = async (orderId) => {

  const order = await db.query(
    `SELECT * FROM orders WHERE orderid=$1`,
    [orderId]
  );

  if (order.rows.length === 0) return null;

  const items = await db.query(
    `SELECT productid, quantity, price
     FROM items WHERE orderid=$1`,
    [orderId]
  );

  return {
    ...order.rows[0],
    items: items.rows
  };

};

/*
  Listar pedidos
*/

exports.listOrders = async () => {

  const result = await db.query(`SELECT * FROM orders`);

  return result.rows;

};

/*
  Atualizar pedido
*/

exports.updateOrder = async (orderId, data) => {

  await db.query(
    `UPDATE orders SET value=$1 WHERE orderid=$2`,
    [data.valorTotal, orderId]
  );

  return { orderId };

};

/*
  Deletar pedido
*/

exports.deleteOrder = async (orderId) => {

  await db.query(
    `DELETE FROM orders WHERE orderid=$1`,
    [orderId]
  );

};