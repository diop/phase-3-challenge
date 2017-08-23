const queries = () => {

  productsBySection: () => {
    return `SELECT name FROM grocery_items WHERE section = $1`
  },

  ordersByShopperId: () => {
    return `
      SELECT orders.id, SUM(CAST(grocery_items.price AS REAL))
      FROM orders
      INNER JOIN grocery_items ON orders.item_id = grocery_items.id
      WHERE shopper_id = $1
      GROUP BY orders.id
    `
  },

  allRealShoppers: () => {
    return `
      SELECT shoppers.name, COUNT(DISTINCT orders.id)
      FROM orders
      INNER JOIN shoppers ON orders.shopper_id = shoppers.id
      GROUP by shoppers.name
    `
  }

}
module.exports = queries
