const pgp = require('pg-promise')();
const CONNECTION_STRING = `pg://${process.env.USER}@localhost:5432/grocery_store`
const db = pgp( CONNECTION_STRING )


const getProductsBySection = section => {
	return db.any(`
    SELECT name, section
    FROM grocery_items
    WHERE section = '${section}'
  `) 
}

const getOrdersByShopperId = id => {
  return db.any(`
    SELECT orders.id, SUM(grocery_items.price) AS total_cost
    FROM orders
    JOIN order_items
    ON order_items.id = orders.id
    JOIN grocery_items
    ON grocery_items.id = order_items.item_id
    WHERE orders.shopper_id = '${id}'
    GROUP BY orders.id
  `)
}

module.exports = {
  getProductsBySection,
  getOrdersByShopperId,
}