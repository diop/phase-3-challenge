const pgp = require('pg-promise')();
const connectionString = 'postgres://localhost:5432/grocery_store'
const db = pgp(connectionString)

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

const getAllRealShoppers = () => {
  return db.any(`
    SELECT shoppers.first, COUNT(orders.id) FROM order_items
    JOIN orders
    ON orders.id = order_items.id
    JOIN shoppers
    ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.first
  `)
}

module.exports = {
  getProductsBySection,
  getOrdersByShopperId,
  getAllRealShoppers
}