const db = require('./client')
const queries = require('./queries')

const productList = section => {
	return db.any(queries.getProductList(), section)
}

const shopperOrders = id => {
  return db.any(queries.getShopperOrder(), id)
}

const realShoppers = () => {
  return db.any(queries.getRealShoppers())
}

module.exports = { productList, shopperOrders, realShoppers }
