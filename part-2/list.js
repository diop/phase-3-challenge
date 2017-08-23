const { productList, shoperOrders, realShoppers } = require('./database')
const print = require('node-print')

const listProducts = section => {
  print.pt(section)
}

const listOrders = id => {
  print.pt(id)
}

const listShoppers = (list) => {
  print.pt(list)
}

module.exports = { listProducts, listOrders, listShoppers }
