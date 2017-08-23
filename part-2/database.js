const connection = require('./connection')
const queries = require('./queries')

const getProductsBySection = section => {
	return db.any(queries.productsBySection(), section)
}

const getOrdersByShopperId = id => {
  return db.any(queries.ordersByShopperId(), id)
}

const getAllRealShoppers = () => {
  return db.any()
}

module.exports = {
  getProductsBySection,
  getOrdersByShopperId,
  getAllRealShoppers
}
